<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use App\Models\Funcionario;

class FuncionarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       Usuario::create([
        'codLogin' => 11,
        'tipo' => 'funcionario',
        'email' => 'ana.silva@email.com',
        'senha' => 'Ana123!'
       ]);
       Funcionario::create([
        'codFuncionario' => 1,
        'nome' => 'Ana Paula Silva',
        'cpf' => '12345678900',
        'telefone' => '11912345678',
        'fk_funcionario_codLogin' => 11
       ]); 

       Usuario::create([
        'codLogin' => 12,
        'tipo' => 'funcionario',
        'email' => 'carlos.santos@email.com',
        'senha' => 'Carlos456@'
       ]);
       Funcionario::create([
        'codFuncionario' => 2,
        'nome' => 'Carlos Eduardo Santos',
        'cpf' => '98765432100',
        'telefone' => '21998765432',
        'fk_funcionario_codLogin' => 12
       ]); 

       Usuario::create([
        'codLogin' => 13,
        'tipo' => 'funcionario',
        'email' => 'maria.oliveira@email.com',
        'senha' => 'Maria789#'
       ]);
       Funcionario::create([
        'codFuncionario' => 3,
        'nome' => 'Maria Clara Oliveira',
        'cpf' => '45678912300',
        'telefone' => '31934567890',
        'fk_funcionario_codLogin' => 13
       ]); 


       Usuario::create([
        'codLogin' => 14,
        'tipo' => 'funcionario',
        'email' => 'joao.almeida@email.com',
        'senha' => 'Joao012$'
       ]);
       Funcionario::create([
        'codFuncionario' => 4,
        'nome' => 'João Pedro Almeida',
        'cpf' => '32165498700',
        'telefone' => '41912346789',
        'fk_funcionario_codLogin' => 14
       ]); 

       Usuario::create([
        'codLogin' => 15,
        'tipo' => 'funcionario',
        'email' => 'beatriz.gomes@email.com',
        'senha' => 'Bea345%'
       ]);
       Funcionario::create([
        'codFuncionario' => 5,
        'nome' => 'Beatriz Gomes',
        'cpf' => '15975348600',
        'telefone' => '51923456789',
        'fk_funcionario_codLogin' => 15
       ]); 
    }
}
