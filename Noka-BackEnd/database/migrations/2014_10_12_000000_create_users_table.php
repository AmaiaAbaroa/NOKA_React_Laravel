<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('lastname');
            $table->date('birthdate');
            $table->enum('gender',['Emakumezkoa', 'Gizonezkoa', 'No binario', 'Bestelakoak'])->default(null);
            $table->enum('province',['Araba', 'Bizkaia', 'Gipuzkoa'])->default(null);
            $table->enum('kidegoa',['Ahur Hezkuntza', 'Lehen Hezkuntza', 'Bigarren Hezkuntza'])->default(null);
            $table->enum('etapa',['Ez dakit', 'Zerbait', 'Hutsik'])->default(null);
            $table->enum('role',['admin','user'])->default('user');
            $table->enum('status',['active','inactive'])->default('active');
            $table->boolean('privacy');
            $table->boolean('info')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
