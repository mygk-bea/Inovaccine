<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use App\Models\Clinica;
use App\Models\Paciente;
use App\Models\SuperUser;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function autenticar(Request $request) {

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
            $usuarioTipo = $usuario->tipo;
            $clinicaNome = $clinica->nome;

        return response()->json(['validado' => true, 'id' => $clinicaCod, 'tipo' => $usuarioTipo, 'nome' => $clinicaNome]);
    } 

    if ( $usuario->tipo == 'paciente') {
        $codigo_login = $usuario->codLogin;
        $selectPaciente = new Paciente();
        $paciente = Paciente::where('fk_paciente_codLogin', $codigo_login)->get()->first();
        $pacienteCod = $paciente->codPaciente;
        $usuarioTipo = $usuario->tipo;
        $pacienteNome = $paciente->nome;

        return response()->json(['validado' => true, 'id' => $pacienteCod, 'tipo' => $usuarioTipo, 'nome' => $pacienteNome]);
    } 

    if ( $usuario->tipo == 'super-user') {
        $codigo_login = $usuario->codLogin;
        $selectSuperUser = new SuperUser();
        $super_user = SuperUser::where('fk_superuser_codLogin', $codigo_login)->get()->first();
        $super_userCod = $super_user->codSuperUser;
        $usuarioTipo = $usuario->tipo;
        $super_userNome = $super_user->nome;

        return response()->json(['validado' => true, 'id' => $super_userCod, 'tipo' => $usuarioTipo, 'nome' => $super_userNome]);
    } 

    return response()->json(['validado' => false, 'mensagem' => 'Tipo de usuário não permitido.'], 403);
    
    }
} 
