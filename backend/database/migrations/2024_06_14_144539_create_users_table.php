<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Запуск миграции.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            // Создаем уникальный идентификатор для каждой записи
            $table->id();
            // Поле для хранения имени пользователя
            $table->string('name');
            // Поле для хранения уникального email пользователя
            $table->string('email')->unique();
            // Поле для хранения хэшированного пароля пользователя
            $table->string('password');
            // Поля для автоматического отслеживания времени создания и обновления записи
            $table->timestamps();
        });
    }

    /**
     * Отмена миграции.
     *
     * @return void
     */
    public function down()
    {
        // Удаляем таблицу users, если она существует
        Schema::dropIfExists('users');
    }
}
