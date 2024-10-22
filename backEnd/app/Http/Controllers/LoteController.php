<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Lote;
use App\Models\Vacina;
use App\Models\Clinica;
use App\Models\Fornecedor;

class LoteController extends Controller
{
    public function store(Request $request){
        $cnpj = $request->input('cnpj');
        $fornecedores = Fornecedor::all();
        $fornecedor = Fornecedor::where('cnpj', $cnpj)->first(); 

        if(empty($fornecedor)){
            $fornecedor = new Fornecedor();
            $fornecedor->nome = $request->input('nome');
            $fornecedor->telefone = $request->input('telefone');
            $fornecedor->cnpj = $request->input('cnpj');
            $fornecedor->save();
            $idFornecedor = $fornecedor->codFornecedor;

            $lote = new Lote();
            $lote->codLote = $request->input('codLote');
            $lote->valor = $request->input('valor');
            $lote->qtd_minimo = $request->input('qtd_minimo');
            $lote->qtd = $request->input('qtd');
            $lote->fk_lote_codFornecedor = $idFornecedor;
            $lote->fk_lote_codClinica = $request->input('fk_lote_codClinica');
            $lote->fk_lote_codVacina = $request->input('fk_lote_codVacina');
            $lote->dataCompra = $request->input('dataCompra');
            $lote->dataValidade = $request->input('dataValidade');
            $lote->save();
        } else {
            $cnpj = $request->input('cnpj');
            $idFornecedor = Fornecedor::where('cnpj', $cnpj)->pluck('codFornecedor')->first();
    
            $lote = new Lote();
            $lote->codLote = $request->input('codLote');
            $lote->valor = $request->input('valor');
            $lote->qtd_minimo = $request->input('qtd_minimo');
            $lote->qtd = $request->input('qtd');
            $lote->fk_lote_codFornecedor = $idFornecedor;
            $lote->fk_lote_codClinica = $request->input('fk_lote_codClinica');
            $lote->fk_lote_codVacina = $request->input('fk_lote_codVacina');
            $lote->dataCompra = $request->input('dataCompra');
            $lote->dataValidade = $request->input('dataValidade');
            $lote->save();
        }
    }

    public function list(){
        $lote = Lote::with(['fornecedor', 'clinica', 'vacina'])->orderBy('created_at', 'desc')->get();
        return response()->json($lote);
    }
}