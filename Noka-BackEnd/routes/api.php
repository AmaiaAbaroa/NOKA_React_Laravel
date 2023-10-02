<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ConsultationController;
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

// Registra un usuario
Route::post('/register', [AuthController::class, 'register']);
// Login de un usuario
Route::post('/login', [AuthController::class, 'login']);
// Actualizar los datos de un usuario específico
Route::put('/users/{id}', [UserController::class, 'update']);

// Listar todos los usuarios
Route::get('/users', [UserController::class, 'index']);
// Mostrar un usuarios especifico
Route::get('/users/{id}', [UserController::class, 'show']);
// Añadir una consulta 
Route::post('/consultation', [ConsultationController::class, 'store']);
// Listar todas las consultas 
Route::get('/consultation', [ConsultationController::class, 'index']);
// Mostrar una consulta especifica 
Route::get('/consultation/{id}', [ConsultationController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    // Recoge el usuario autenticado
    Route::get('/user', [AuthController::class, 'user']);
    // Logout de un usuario
    Route::post('/logout', [AuthController::class, 'logout']);




// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
});
