<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vacina;

class VacinaController extends Controller
{
    public function store(Request $request){
        $vacina = new Vacina();
        $vacina->nome = $request->input('nome');
        $vacina->informacao = $request->input('informacao');
        $vacina->preco = $request->input('preco');
        $vacina->periodo = $request->input('periodo');
        $vacina->diasAplicacao = implode(',',$request->input('diasAplicacao', []));
        $vacina->save();
    }

    public function list() {
        $vacina = Vacina::orderBy('created_at', 'desc')->get();;
        return response()->json($vacina);
    }

    public function pesquisa(Request $request) {
        $search = $request->input('search');
        $vacina = Vacina::where('nome', 'like', '%'.$search.'%')->orderBy('created_at', 'desc')->get();
        return response()->json($vacina);
    }
}
