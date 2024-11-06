<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Funcionario;
use App\Models\Usuario;
use App\Models\Clinica;


class FuncionarioController extends Controller
{

    public function store(Request $request){

        $usuario = new Usuario();
        $usuario->tipo = 'funcionario';
        $usuario->email = $request->input('email');
        $usuario->senha = $request->input('senha');
        $usuario->save();

        $usuarioId = $usuario->codLogin;

        $funcionario = new Funcionario();
        $funcionario->nome = $request->input('nome');
        $funcionario->cpf = $request->input('cpf');
        $funcionario->telefone = $request->input('telefone');
        $funcionario->fk_funcionario_codLogin = $usuarioId;
        $funcionario->fk_funcionario_codClinica = $request->input('fk_funcionario_codClinica');
        $funcionario->save();
    }

    public function list(){
        $funcionario = Funcionario::orderBy('created_at', 'desc')->get();
        return response()->json($funcionario);
    }

    public function pesquisa(Request $request) {
        $search = $request->input('search');
        $funcionario = Funcionario::where('nome', 'like', '%'.$search.'%')->orderBy('created_at', 'desc')->get();
        return response()->json($funcionario);
    }
}   
