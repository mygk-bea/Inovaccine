<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Estoque;
use App\Models\Vacina;
use App\Models\Clinica;

class EstoqueController extends Controller
{
    public function store(Request $request){

        $estoque = new Estoque();
        $estoque->fk_estoque_codLote = $request->input('codLote');
        $estoque->qtd_minimo = $request->input('qtd_minimo');
        $estoque->qtd = $request->input('qtd');
        $estoque->fk_estoque_codClinica = $request->input('codClinica');
        $estoque->fk_estoque_codVacina = $request->input('codVacina');
    }
}
