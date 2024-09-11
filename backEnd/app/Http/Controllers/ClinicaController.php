<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clinica;
use App\Models\Medico;
use App\Models\Endereco;
use App\Models\Usuario;

class ClinicaController extends Controller
{

    // private $objMedico;
    // private $objClinica;
    // private $objEndereco;
    // private $objUsuario;

    // public function __construct(){
    //     $this->objMedico = new Medico();
    //     $this->objClinica = new Clinica();
    //     $this->objEndereco = new Endereco();
    //     $this->objUsuario = new Usuario();
    // }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $medicos= $this->objMedico->all();
        // return view('cadClinica', compact('medicos'));
    }


    public function store(Request $request){
            // Criação do endereço
            // $endereco = $this->objEndereco->create([
            //     'logradouro' => $request->logradouro,
            //     'bairro' => $request->bairro,
            //     'numero' => $request->numero,
            //     'cidade' => $request->cidade,
            //     'complemento' => $request->complemento,
            //     'cep' => $request->cep
            // ]);

            $endereco = new Endereco();
            $endereco->logradouro = $request->input('logradouro');
            $endereco->bairro = $request->input('bairro');
            $endereco->numero = $request->input('numero');
            $endereco->cidade = $request->input('cidade');
            $endereco->complemento = $request->input('complemento');
            $endereco->cep = $request->input('cep');
            $endereco->uf = $request->input('uf');
            $endereco->save();


            // Criação do usuário
            // $usuario = $this->objUsuario->create([
            //     'tipo' => 'clinica',
            //     'email' => $request->email,
            //     'senha' => $request->senha
            // ]);
            $usuario = new Usuario();
            $usuario->tipo = 'clinica';
            $usuario->email = $request->input('email');
            $usuario->senha = $request->input('senha');
            $usuario->save();

            $enderecoId = $endereco->id;
            $usuarioId = $usuario->id;

            // $clinica = $this->objClinica->create([
            //     'nome' => $request->nome,
            //     'cnpj' => $request->cnpj,
            //     'telefone' => $request->telefone,
            //     'periodoFunc_inicio' => $request->periodoFunc_inicio,
            //     'periodoFunc_fim' => $request->periodoFunc_fim,
            //     'fk_clinica_codMedico' => $request->fk_clinica_codMedico,
            //     'fk_clinica_codEndereco' => $enderecoId,
            //     'fk_clinica_codLogin' => $usuarioId
            // ]);
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

            // return redirect()->route('cadClinica');
    }
}
