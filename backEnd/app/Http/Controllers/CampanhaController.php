<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Agendamento;
use App\Models\Vacina;
use App\Models\Campanha;

class CampanhaController extends Controller
{
    public function store(Request $request){

        $campanha = new Campanha();
        $campanha->nome = $request->input('nome');
        $campanha->fk_campanha_codVacina = $request->input('fk_campanha_codVacina');
        $campanha->fk_campanha_codAgendamento = $request->input('fk_campanha_codAgendamento');
        $campanha->dataInicio = $request->input('dataInicio');
        $campanha->dataFim = $request->input('dataFim');
        $campanha->save();
    }

    public function list() {
        $campanha = Campanha::with(['vacina', 'agendamento'])->get();
        return response()->json($campanha);
    }

    public function pesquisa(Request $request) {
        $search = $request->input('search');
        $campanha = Campanha::where('nome', 'like', '%'.$search.'%')->get();
        return response()->json($campanha);
    }
}
