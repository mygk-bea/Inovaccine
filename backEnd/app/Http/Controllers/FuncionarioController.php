<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Funcionario;
use App\Models\Usuario;


class FuncionarioController extends Controller
{

    public function store(Request $request){

        $usuario = new Usuario();
        $usuario->tipo = 'funcionario';
        $usuario->email = $request->input('email');
        $usuario->senha = $request->input('senha');
        $usuario->save();

        $usuarioId = $usuario->id;

        $funcionario = new Funcionario();
        $funcionario->nome = $request->input('nome');
        $funcionario->cpf = $request->input('cpf');
        $funcionario->telefone = $request->input('telefone');
        $funcionario->fk_funcionario_codLogin = $usuarioId;
        $funcionario->save();
    }
}   
