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
Route::post('/cadFornecedor', [App\Http\Controllers\FornecedorController::class, 'store']);
Route::post('/cadLote', [App\Http\Controllers\LoteController::class, 'store']);
Route::post('/cadPaciente', [App\Http\Controllers\PacienteController::class, 'store']);
Route::post('/cadCampanha', [App\Http\Controllers\CampanhaController::class, 'store']);
Route::post('/cadDenuncia', [App\Http\Controllers\DenunciaController::class, 'store']);
// Route::post('/cadAgendamento', [App\Http\Controllers\AgendamentoController::class, 'store']);
// Route::post('/cadPostagem', [App\Http\Controllers\PostagemController::class, 'store']);

// pesquisa
Route::get('/pesquisaMedico', [App\Http\Controllers\MedicoController::class, 'pesquisa']);
Route::get('/pesquisaPaciente', [App\Http\Controllers\PacienteController::class, 'pesquisa']);
Route::get('/pesquisaCampanha', [App\Http\Controllers\CampanhaController::class, 'pesquisa']);
Route::get('/pesquisaFuncionario', [App\Http\Controllers\FuncionarioController::class, 'pesquisa']);
Route::get('/pesquisaVacina', [App\Http\Controllers\VacinaController::class, 'pesquisa']);

// listagens
Route::get('/listagemClinica', [App\Http\Controllers\ClinicaController::class, 'list']);
Route::get('/listagemFuncionario', [App\Http\Controllers\FuncionarioController::class, 'list']);
Route::get('/listagemLote', [App\Http\Controllers\LoteController::class, 'list']);
Route::get('/listagemCampanha', [App\Http\Controllers\CampanhaController::class, 'list']);
Route::get('/listagemCampanhaVacina', [App\Http\Controllers\CampanhaController::class, 'listarCampanhaVacina']);
Route::get('/listagemVacina', [App\Http\Controllers\VacinaController::class, 'list']);
Route::get('/listagemMedico', [App\Http\Controllers\MedicoController::class, 'list']);
Route::get('/listagemPaciente', [App\Http\Controllers\PacienteController::class, 'list']);
// Route::get('/listagemAgendamento', [App\Http\Controllers\AgendamentoController::class, 'list']);
// Route::get('/mural', [App\Http\Controllers\PostagemController::class, 'list']);

Route::post('/login', [App\Http\Controllers\LoginController::class, 'autenticar']);
