<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clinica;
use App\Models\Medico;
use App\Models\Endereco;
use App\Models\Usuario;

class ClinicaController extends Controller
{

    public function index()
    {
        // $medicos= $this->objMedico->all();
        // return view('cadClinica', compact('medicos'));
    }


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
            $usuario->tipo = 'clinica';
            $usuario->email = $request->input('email');
            $usuario->senha = $request->input('senha');
            $usuario->save();

            $enderecoId = $endereco->codEndereco;
            $usuarioId = $usuario->codLogin; 


            // cadastro clinica
            $clinica = new Clinica();
            $clinica->nome = $request->input('nome_cli');
            $clinica->cnpj = $request->input('cnpj');
            $clinica->fk_clinica_codMedico = $request->input('nome_medico');
            $clinica->telefone = $request->input('telefone');
            $clinica->periodoFunc_inicio = $request->input('hora_inicio');
            $clinica->periodoFunc_fim = $request->input('hora_fim');
            $clinica->fk_clinica_codEndereco = $enderecoId;
            $clinica->fk_clinica_codLogin = $usuarioId;
            $clinica->save();
    }

    public function list() {
        $clinica = Clinica::with(['endereco', 'medico'])->orderBy('created_at', 'desc')->get();
        return response()->json($clinica);
    }
}
