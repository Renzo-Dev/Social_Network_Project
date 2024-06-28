<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:api', 'role:admin,user']], function () {
    Route::get('/hello', function () {
        return response()->json(['message' => 'Hello World!']);
    });
});
