<?php

namespace App\Models;

use Couchbase\Role;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * Массив атрибутов, которые должны быть скрыты при сериализации.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    /**
     * Получить идентификатор JWT для пользователя.
     *
     * @return mixed
     */
    public function getJWTIdentifier(): mixed
    {
        return $this->getKey();
    }

    /**
     * Получить пользовательские утверждения JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims(): array
    {
        return [];
    }

    /**
     * Роли, принадлежащие пользователю.
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * Проверить, имеет ли пользователь определенную роль.
     */
    public function hasRole($role)
    {
        return $this->roles()->where('name', $role)->exists();
    }

    /**
     * Назначить роль пользователю.
     */
    public function assignRole($role)
    {
        $role = Role::where('name', $role)->firstOrFail();
        $this->roles()->attach($role);
    }

    /**
     * Удалить роль у пользователя.
     */
    public function removeRole($role)
    {
        $role = Role::where('name', $role)->firstOrFail();
        $this->roles()->detach($role);
    }
}
