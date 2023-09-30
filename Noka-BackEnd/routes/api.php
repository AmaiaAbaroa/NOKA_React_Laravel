<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Listar todos los usuarios
Route::get('/users', [UserController::class, 'index']);
// Editar un usuario específico
Route::get('/users/{id}/edit', [UserController::class, 'edit']);
// Actualizar un usuario específico
Route::put('/users/{id}', [UserController::class, 'update']);
// Mostrar un usuarios especifico
Route::get('/users/{id}', [UserController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);




// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
});
