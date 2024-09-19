<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Paciente;
use App\Models\Endereco;
use App\Models\Usuario;

class PacienteController extends Controller
{
    public function store(Request $request){
        // cadastro endereco
        $endereco = new Endereco();
        $endereco->logradouro = $request->input('logradouro');
        $endereco->bairro = $request->input('bairro');
        $endereco->numero = $request->input('numero');
        $endereco->cidade = $request->input('cidade');
        $endereco->complemento = $request->input('complemento');
        $endereco->cep = $request->input('cep');
        $endereco->uf = $request->input('uf');
        $endereco->save();

        // cadastro login
        $usuario = new Usuario();
        $usuario->tipo = 'paciente';
        $usuario->email = $request->input('email');
        $usuario->senha = $request->input('senha');
        $usuario->save();

        $enderecoId = $endereco->codEndereco;
        $usuarioId = $usuario->id; 


        // cadastro paciente
        $paciente = new Paciente();
        $paciente->nome = $request->input('nome');
        $paciente->cpf = $request->input('cpf');
        $paciente->telefone = $request->input('telefone');
        $paciente->dataNasc = $request->input('dataNasc');
        $paciente->responsavel = $request->input('responsavel');
        $paciente->fk_paciente_codEndereco = $enderecoId;
        $paciente->fk_paciente_codLogin = $usuarioId;
        $paciente->save();
    }

    public function list() {
        $paciente = Paciente::all();
        return response()->json($paciente);
    }

    public function pesquisa(Request $request) {
        $search = $request->input('search');
        $paciente = Paciente::where('nome', 'like', '%'.$search.'%')->get();
        return response()->json($paciente);
    }
}
