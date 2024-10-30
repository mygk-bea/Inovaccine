<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use App\Models\Clinica;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function autenticar(Request $request) {

        // // criando validação
        // $request->validate([
        //     'email.required' => 'O campo e-mail é obrigatório',
        //     'senha.required' => 'O campo senha é obrigatório'
        // ]);

        // $user = new User();

        // $email = $request->email;
        // $senha = $request->senha;

        // $usuario = $user->where('email', $email)
        // ->where('senha', $senha)
        // ->get()
        // ->first();

        // if(!isset($usuario)){
        //     return response()->json(['error' => 'e-mail ou senha incorretos.']);
        // }

        // if($usuario->tipo == 'clinica'){
        //     session_start();
        //     $_SESSION['email'] = $usuario->email;
        //     $_SESSION['senha'] = $usuario->senha;

        //     $codigo_login = $usuario->codLogin;
        //     $selectClinica = new Clinica();
        //     $clinica = $selectClinica->where('fk_clinica_codLogin', '=', $codigo_login);
        //     $clinicaCod = $clinica->codClinica;

            
        //     return response()->json(['validado' => true, 'id' => $clinicaCod]);
        // } 

          // Criando validação
    $request->validate([
        'email' => 'required|email',
        'senha' => 'required'
    ]);

    
        $email = $request->email;
        $senha = $request->senha;


    $user = new Usuario();
            $usuario = $user->where('email', $email)->where('senha', $senha)->first();

       if(!isset($usuario)){
            return response()->json(['error' => 'e-mail ou senha incorretos.']);
        }

    if ( $usuario->tipo == 'clinica') {
            $codigo_login = $usuario->codLogin;
            $selectClinica = new Clinica();
            $clinica = Clinica::where('fk_clinica_codLogin', $codigo_login)->get()->first();
            $clinicaCod = $clinica->codClinica;

        return response()->json(['validado' => true, 'id' => $clinicaCod]);
    } 

        return response()->json(['validado' => false, 'mensagem' => 'Tipo de usuário não permitido.'], 403);
    


        // super user


        // if($usuario->tipo == 'paciente'){
        //     session_start();
        //     $_SESSION['email'] = $usuario->email;
        //     $_SESSION['senha'] = $usuario->senha;
        //     return response()->json(['validado' => true, 'id' => $usuario->codLogin]);
        // }    

        
    
    }
} 
