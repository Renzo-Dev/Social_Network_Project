<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\InvalidClaimException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        // проводим валидацию данных
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ]);

        // создаем пользователя
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // создаем JWT токен для созданного пользователя
        $token = JWTAuth::fromUser($user);
        // возвращаем JWT токен пользователя
        return response()->json(compact('user', 'token'));
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (!$token = Auth::guard('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh(Request $request): JsonResponse
    {
        try {
            // Обновление токена
            $newToken = auth()->refresh(true);
            return response()->json(compact('newToken'), 200);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not refresh token'], 500);
        }
    }

    public function me(): JsonResponse
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json($user->toArray());
    }

    private function respondWithToken($token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
