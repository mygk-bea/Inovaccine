<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class LoginController extends Controller
{
    public function autenticar(Request $request) {

        // criando validação
        $request->validate([
            'email.required' => 'O campo e-mail é obrigatório',
            'senha.required' => 'O campo senha é obrigatório'
        ]);

        $user = new User();

        $email = $request->email;
        $senha = $request->senha;

        $usuario = $user->where('email', $email)
        ->where('senha', $senha)
        ->get()
        ->first();

        if(!isset($usuario)){
            return response()->json(['error' => 'e-mail ou senha incorretos.']);
        }

        if($usuario->tipo == 'medico'){
            session_start();
            $_SESSION['email'] = $usuario->email;
            $_SESSION['senha'] = $usuario->senha;
            
            return response()->json(['validado' => true, 'id' => $usuario->codLogin]);
        } 

        // super user


        if($usuario->tipo == 'paciente'){
            session_start();
            $_SESSION['email'] = $usuario->email;
            $_SESSION['senha'] = $usuario->senha;
            return response()->json(['validado' => true, 'id' => $usuario->codLogin]);
        }    

        
    
    }
} 
