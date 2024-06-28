<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
});
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('refresh', [AuthController::class, 'refresh']);
});

Route::get('me', [AuthController::class, 'me']);
Route::post('checkJWT', [AuthController::class, 'checkJWT']);
