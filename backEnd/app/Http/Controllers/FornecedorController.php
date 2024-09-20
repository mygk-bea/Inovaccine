<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Fornecedor;

class FornecedorController extends Controller
{
    public function store(Request $request){
    $fornecedor = new Fornecedor();
    $fornecedor->nome = $request->input('nome');
    $fornecedor->telefone = $request->input('telefone');
    $fornecedor->cnpj = $request->input('cnpj');
    $fornecedor->save();
    }
}
