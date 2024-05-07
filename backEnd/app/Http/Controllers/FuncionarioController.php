<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Funcionario;

class FuncionarioController extends Controller
{
    public function store(Request $request){

        $cadastro = new Funcionario();

        $cadastro->nome	= $request->nome;
        $cadastro->cpf = $request->cpf;
        $cadastro->telefone = $request->telefone;

        $cadastro->save();

        return redirect('/');
        
    }
}
