<?php


use App\Http\Controllers\AuthController;
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

Route::middleware('enum:gender,province,kidegoa,etapa')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
});

// Route::post('/register', [AuthController::class, 'register'])->middleware('EnumValuesValidator:gender,province,kidegoa,etapa');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/gender-options', [AuthController::class, 'getGenderOptions']);
Route::get('/province-options', [AuthController::class, 'getProvinceOptions']);
Route::get('/kidegoa-options', [AuthController::class, 'getKidegoaOptions']);
Route::get('/etapa-options', [AuthController::class, 'getEtapaOptions']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
});
