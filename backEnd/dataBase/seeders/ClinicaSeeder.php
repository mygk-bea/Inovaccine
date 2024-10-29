<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use App\Models\Clinica;

class ClinicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usuario::create([
            'codLogin' => '',
            'tipo' => 'clinica',
            'email' => '',
            'senha' => ''
        ]);
        Clinica::create([
            'codClinica' => '',
            'nome' => '',
            'cnpj' => '',
            'fk_clinica_codEndereco' => '',
            'telefone' => '',
            'fk_clinica_codLogin' => '',
            'periodoFunc_inicio' => '',
            'periodoFunc_fim' => '',
            'fk_clinica_codMedico' => ''
        ]);


        Usuario::create([
            'codLogin' => '',
            'tipo' => 'clinica',
            'email' => '',
            'senha' => ''
        ]);
        Clinica::create([
            'codClinica' => '',
            'nome' => '',
            'cnpj' => '',
            'fk_clinica_codEndereco' => '',
            'telefone' => '',
            'fk_clinica_codLogin' => '',
            'periodoFunc_inicio' => '',
            'periodoFunc_fim' => '',
            'fk_clinica_codMedico' => ''
        ]);


        Usuario::create([
            'codLogin' => '',
            'tipo' => 'clinica',
            'email' => '',
            'senha' => ''
        ]);
        Clinica::create([
            'codClinica' => '',
            'nome' => '',
            'cnpj' => '',
            'fk_clinica_codEndereco' => '',
            'telefone' => '',
            'fk_clinica_codLogin' => '',
            'periodoFunc_inicio' => '',
            'periodoFunc_fim' => '',
            'fk_clinica_codMedico' => ''
        ]);



        Usuario::create([
            'codLogin' => '',
            'tipo' => 'clinica',
            'email' => '',
            'senha' => ''
        ]);
        Clinica::create([
            'codClinica' => '',
            'nome' => '',
            'cnpj' => '',
            'fk_clinica_codEndereco' => '',
            'telefone' => '',
            'fk_clinica_codLogin' => '',
            'periodoFunc_inicio' => '',
            'periodoFunc_fim' => '',
            'fk_clinica_codMedico' => ''
        ]);


        Usuario::create([
            'codLogin' => '',
            'tipo' => 'clinica',
            'email' => '',
            'senha' => ''
        ]);
        Clinica::create([
            'codClinica' => '',
            'nome' => '',
            'cnpj' => '',
            'fk_clinica_codEndereco' => '',
            'telefone' => '',
            'fk_clinica_codLogin' => '',
            'periodoFunc_inicio' => '',
            'periodoFunc_fim' => '',
            'fk_clinica_codMedico' => ''
        ]);
    }
}
