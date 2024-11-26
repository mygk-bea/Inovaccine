<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DiskDenuncia;
use App\Models\Endereco;

class DenunciaController extends Controller
{
    public function store(Request $request){
        $endereco = new Endereco();
        $endereco->logradouro = $request->input('rua');
        $endereco->cidade = $request->input('cidade');
        $endereco->numero = $request->input('numero');
        $endereco->cep = $request->input('cep');
        $endereco->save();

        $codEndereco = $endereco->codEndereco;

        $denuncia = new DiskDenuncia();
        $denuncia->anonimo = $request->input('anonimato');
        if($denuncia->anonimato == false){
            $denuncia->nome = $request->input('nome');
        }
        $denuncia->observacao = $request->input('descricao');
        $denuncia->termos = $request->input('termos');
        $denuncia->fk_endereco_codEndereco = $codEndereco;
        $denuncia->save();  
    }
}
