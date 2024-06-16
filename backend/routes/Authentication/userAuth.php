<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::get('me', [AuthController::class, 'me']);

Route::group(['middleware' => ['auth:api', 'role:admin,user']], function () {
    Route::get('/hello', function () {
        return response()->json(['message' => 'Hello World!']);
    });
});
