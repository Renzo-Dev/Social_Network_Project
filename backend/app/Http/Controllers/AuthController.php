<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            // Проводим валидацию данных
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
//                'password' => 'required|string|min:6|confirmed'
                'password' => 'required|string|min:6'
            ]);

            if ($validator->fails()) {
                throw new ValidationException($validator);
            }

            // Создаем пользователя
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Создаем JWT токен для созданного пользователя
            $token = JWTAuth::fromUser($user);

            // Возвращаем JWT токен пользователя
            return response()->json(compact('user', 'token'));
        } catch (ValidationException $e) {
            // Обработка исключений валидации
            return response()->json(['error' => 'Некорректные данные', 'details' => $e->errors()], 422);
        } catch (QueryException $e) {
            // Обработка исключения при создании пользователя (например, если пользователь уже существует)
            if ($e->errorInfo[1] == 1062) { // 1062 это код ошибки для дубликата уникального ключа в MySQL
                return response()->json(['error' => 'Пользователь с таким email уже существует'], 409);
            }
            return response()->json(['error' => 'Ошибка при создании пользователя'], 500);
        } catch (\Exception $e) {
            // Обработка любых других исключений
            return response()->json(['error' => 'Произошла непредвиденная ошибка', 'message' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request): \Illuminate\Http\JsonResponse
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

    public function logout(Request $request): \Illuminate\Http\JsonResponse
    {
        Auth::logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh(Request $request): \Illuminate\Http\JsonResponse
    {
        return $this->respondWithToken(Auth::refresh());
    }

    public function me(): \Illuminate\Http\JsonResponse
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['error' => 'NotFound'], 404);
        }
        return response()->json($user->toArray());
    }

    private function respondWithToken($token): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
