<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Обработка входящего запроса.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string[]  ...$roles
     * @return mixed
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'Неавторизован'], 401);
        }

        if (!array_intersect($roles, $user->roles()->pluck('name')->toArray())) {
            return response()->json(['error' => 'Доступ запрещен'], 403);
        }

        return $next($request);
    }
}
