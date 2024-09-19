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
        $lote->fk_clinica_codClinica = $request->input('codClinica');
        $lote->fk_fornecedor_codFornecedor = $request->input('codFornecedor');
        $lote->fk_vacina_codVacina = $request->input('codVacina');
        $lote->dataCompra = $request->input('dataCompra');
        $lote->save();
    }
}