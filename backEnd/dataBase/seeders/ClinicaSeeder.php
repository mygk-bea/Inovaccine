<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use App\Models\Clinica;
use App\Models\Endereco;

class ClinicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usuario::create([
            'codLogin' => 6,
            'tipo' => 'clinica',
            'email' => 'clinica1@vacinas.com.br',
            'senha' => 'Senha123!'
        ]);
        Endereco::create([
            'codEndereco' => 1,
            'logradouro' => 'Rua das Flores',
            'bairro' => 'Centro',
            'numero' => 123,
            'cidade' => 'São Paulo',
            'complemento' => 'Sala 1',
            'cep' => '01000000',
            'uf'=> 'SP'
        ]);
        Clinica::create([
            'codClinica' => 1,
            'nome' => 'Vacina Fácil',
            'cnpj' => '12345678000190',
            'fk_clinica_codEndereco' => 1,
            'telefone' => '11912345678',
            'fk_clinica_codLogin' => 6,
            'periodoFunc_inicio' => '08:00',
            'periodoFunc_fim' => '17:00',
            'fk_clinica_codMedico' => 1
        ]);


        Usuario::create([
            'codLogin' => 7,
            'tipo' => 'clinica',
            'email' => 'clinica2@vacinas.com.br',
            'senha' => 'Senha456@'
        ]);
        Endereco::create([
            'codEndereco' => 2,
            'logradouro' => 'Avenida Brasil',
            'bairro' => 'Jardim das Oliveiras',
            'numero' => 456,
            'cidade' => 'Rio de Janeiro',
            'complemento' => 'Andar 2',
            'cep' => '20000000',
            'uf'=> 'RJ'
        ]);
        Clinica::create([
            'codClinica' => 2,
            'nome' => 'Imuniza Rio',
            'cnpj' => '98765432000101',
            'fk_clinica_codEndereco' => 2,
            'telefone' => '21998765432',
            'fk_clinica_codLogin' => 7,
            'periodoFunc_inicio' => '09:00',
            'periodoFunc_fim' => '18:00',
            'fk_clinica_codMedico' => 2
        ]);


        Usuario::create([
            'codLogin' => 8,
            'tipo' => 'clinica',
            'email' => 'clinica3@vacinas.com.br',
            'senha' => 'Senha789#'
        ]);
        Endereco::create([
            'codEndereco' => 3,
            'logradouro' => 'Rua dos Limoeiros',
            'bairro' => 'Vila Nova',
            'numero' => 789,
            'cidade' => 'Belo Horizonte',
            'complemento' => '',
            'cep' => '30000000',
            'uf'=> 'MG'
        ]);
        Clinica::create([
            'codClinica' => 3,
            'nome' => 'Saúde em Dia',
            'cnpj' => '34567890000123',
            'fk_clinica_codEndereco' => 3,
            'telefone' => '31934567890',
            'fk_clinica_codLogin' => 8,
            'periodoFunc_inicio' => '07:30',
            'periodoFunc_fim' => '16:30',
            'fk_clinica_codMedico' => 3
        ]);



        Usuario::create([
            'codLogin' => 9,
            'tipo' => 'clinica',
            'email' => 'clinica4@vacinas.com.br',
            'senha' => 'Senha012$'
        ]);
        Endereco::create([
            'codEndereco' => 4,
            'logradouro' => 'Praça da Liberdade',
            'bairro' => 'Centro',
            'numero' => 101,
            'cidade' => 'Curitiba',
            'complemento' => 'Térreo',
            'cep' => '80000000',
            'uf'=> 'PR'
        ]);
        Clinica::create([
            'codClinica' => 4,
            'nome' => 'Vacinação Segura',
            'cnpj' => '56789123000145',
            'fk_clinica_codEndereco' => 4,
            'telefone' => '41912346789',
            'fk_clinica_codLogin' => 9,
            'periodoFunc_inicio' => '08:30',
            'periodoFunc_fim' => '17:30',
            'fk_clinica_codMedico' => 4
        ]);


        Usuario::create([
            'codLogin' => 10,
            'tipo' => 'clinica',
            'email' => 'clinica5@vacinas.com.br',
            'senha' => 'Senha345%'
        ]);
        Endereco::create([
            'codEndereco' => 5,
            'logradouro' => 'Rua da Paz',
            'bairro' => 'Vila Verde',
            'numero' => 234,
            'cidade' => 'Porto Alegre',
            'complemento' => 'Sala 2',
            'cep' => '90000000',
            'uf'=> 'RS'
        ]);
        Clinica::create([
            'codClinica' => 5,
            'nome' => 'Vacinas do Sul',
            'cnpj' => '12345678000167',
            'fk_clinica_codEndereco' => 5,
            'telefone' => '51923456789',
            'fk_clinica_codLogin' => 10,
            'periodoFunc_inicio' => '08:00',
            'periodoFunc_fim' => '15:00',
            'fk_clinica_codMedico' => 5
        ]);
    }
}
