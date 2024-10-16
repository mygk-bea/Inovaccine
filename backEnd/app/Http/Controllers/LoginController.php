<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class LoginController extends Controller
{
    public function autenticar(Request $request) {

        $user = new User();

        $usuario = $user->where('email', $email)
        ->where('senha', $senha)
        ->get()
        ->first();

        if($usuario->tipo == 'medico'){
            session_start();
            $_SESSION['email'] = $usuario->email;
            $_SESSION['senha'] = $usuario->senha;
            return redirect()->route("http://localhost:4200/");
        } 

        // super user


        if($usuario->tipo == 'paciente'){
            session_start();
            $_SESSION['email'] = $usuario->email;
            $_SESSION['senha'] = $usuario->senha;
            return redirect()->route("http://localhost:4200/");
        }    
    
    }
} 
