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

        $fornecedor = new Fornecedor();
        $fornecedor->nome = $request->input('nome');
        $fornecedor->telefone = $request->input('telefone');
        $fornecedor->cnpj = $request->input('cnpj');
        $fornecedor->save();

        $fornecedorId = $fornecedor->codFornecedor;

        $lote = new Lote();
        $lote->valor = $request->input('valor');
        $lote->qtd_minimo = $request->input('qtd_minimo');
        $lote->qtd = $request->input('qtd');
        $lote->fk_lote_codClinica = $request->input('codClinica');
        $lote->fk_lote_codFornecedor = $fornecedorId;
        $lote->fk_lote_codVacina = $request->input('codVacina');
        $lote->dataCompra = $request->input('dataCompra');
        $lote->save();
    }

    public function list(){
        $lote = Lote::with(['fornecedor', 'clinica', 'vacina'])->get();
        return response()->json($lote);
    }
}