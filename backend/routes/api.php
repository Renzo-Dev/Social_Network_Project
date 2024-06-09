<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//require_once __DIR__ . '/../routes/Authentication/userAuth.php';


Route::get('/info', function () {
    phpinfo();
});
