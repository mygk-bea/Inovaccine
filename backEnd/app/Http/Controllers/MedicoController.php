<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Medico;
use App\Models\Usuario;


class MedicoController extends Controller
{
    public function index()
    {
        
    }

    public function store(Request $request){

        $usuario = new Usuario();
        $usuario->tipo = 'medico';
        $usuario->email = $request->input('email');
        $usuario->senha = $request->input('senha');
        $usuario->save();

        $usuarioId = $usuario->codLogin;

        $medico = new Medico();
        $medico->nome = $request->input('nome');
        $medico->telefone = $request->input('telefone');
        $medico->cpf = $request->input('cpf');
        $medico->crm = $request->input('crm');
        $medico->fk_medico_codLogin = $usuarioId;
        $medico->save();
    
    }

    public function list() {
        $medico = Medico::orderBy('created_at', 'desc')->get();
        return response()->json($medico);
    }

    public function pesquisa(Request $request) {
        $search = $request->input('search');
        $medico = Medico::where('nome', 'like', '%'.$search.'%')->orderBy('created_at', 'desc')->get();
        return response()->json($medico);
    }
}
