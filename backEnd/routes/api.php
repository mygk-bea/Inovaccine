<?php

use Illuminate\Http\Request;
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

// cadastros
Route::post('/cadClinica', [App\Http\Controllers\ClinicaController::class, 'store']);
Route::post('/cadMedico', [App\Http\Controllers\MedicoController::class, 'store']);
Route::post('/cadFuncionario', [App\Http\Controllers\FuncionarioController::class, 'store']);
Route::post('/cadVacina', [App\Http\Controllers\VacinaController::class, 'store']);

Route::post('/estoque', [App\Http\Controllers\EstoqueController::class, 'store']);


// pesquisa
Route::get('/pesquisaMedico', [App\Http\Controllers\MedicoController::class, 'list']);