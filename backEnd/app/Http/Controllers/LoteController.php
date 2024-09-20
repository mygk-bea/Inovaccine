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
        $lote = new Lote();
        $lote->valor = $request->input('valor');
        $lote->qtd_minimo = $request->input('qtd_minimo');
        $lote->qtd = $request->input('qtd');
        $lote->fk_lote_codClinica = $request->input('fk_lote_codClinica');
        $lote->fk_lote_codFornecedor = $request->input('fk_lote_codFornecedor');
        $lote->fk_lote_codVacina = $request->input('fk_lote_codVacina');
        $lote->dataCompra = $request->input('dataCompra');
        $lote->save();
    }

    public function list(){
        $lote = Lote::with(['fornecedor', 'clinica', 'vacina'])->get();
        return response()->json($lote);
    }
}