<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use App\Models\Endereco;
use App\Models\Paciente;

class PacienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usuario::create([
            'codLogin' => 16,
            'tipo' => 'paciente',
            'email' => 'paciente1@email.com.br',
            'senha' => 'Senha123!'
        ]);
        Endereco::create([
            'codEndereco' => 6,
            'logradouro' => 'Avenida Paulista',
            'bairro' => 'Bela Vista',
            'numero' => 456,
            'cidade' => 'São Paulo',
            'complemento' => 'Andar 12',
            'cep' => '01311000',
            'uf' => 'SP'
        ]);
        Paciente::create([
            'codPaciente' => 1,
            'nome' => 'Ana Paula da Silva',
            'dataNasc' => '1985-07-13',
            'cpf' => '45384912030',
            'telefone' => '51912345678',
            'fk_paciente_codEndereco' => 6,
            'fk_paciente_codLogin' => 16,
            'responsavel' => true
        ]);

        Usuario::create([
            'codLogin' => 17,
            'tipo' => 'paciente',
            'email' => 'paciente2@email.com.br',
            'senha' => 'Senha456!'
        ]);
        Endereco::create([
            'codEndereco' => 7,
            'logradouro' => 'Rua dos Andradas',
            'bairro' => 'Centro',
            'numero' => 789,
            'cidade' => 'Porto Alegre',
            'complemento' => 'Apto 402',
            'cep' => '90020000',
            'uf' => 'RS'
        ]);
        Paciente::create([
            'codPaciente' => 2,
            'nome' => 'Pedro Santos',
            'dataNasc' => '1978-04-05',
            'cpf' => '90123456789',
            'telefone' => '41987654321',
            'fk_paciente_codEndereco' => 7,
            'fk_paciente_codLogin' => 17,
            'responsavel' => false
        ]);

        Usuario::create([
            'codLogin' => 18,
            'tipo' => 'paciente',
            'email' => 'paciente3@email.com.br',
            'senha' => 'Teste789!'
        ]);
        Endereco::create([
            'codEndereco' => 8,
            'logradouro' => 'Avenida Brasil',
            'bairro' => 'Jardim América',
            'numero' => 101,
            'cidade' => 'Rio de Janeiro',
            'complemento' => 'Cobertura',
            'cep' => '22250040',
            'uf' => 'RJ'
        ]);
        Paciente::create([
            'codPaciente' => 3,
            'nome' => 'Carlos Nascimento',
            'dataNasc' => '1995-01-15',
            'cpf' => '56789012345',
            'telefone' => '31998765432',
            'fk_paciente_codEndereco' => 8,
            'fk_paciente_codLogin' => 18,
            'responsavel' => true
        ]);

        Usuario::create([
            'codLogin' => 19,
            'tipo' => 'paciente',
            'email' => 'paciente4@email.com.br',
            'senha' => 'Acesso321!'
        ]);
        Endereco::create([
            'codEndereco' => 9,
            'logradouro' => 'Rua XV de Novembro',
            'bairro' => 'Centro',
            'numero' => 333,
            'cidade' => 'Curitiba',
            'complemento' => 'Loja B',
            'cep' => '80020000',
            'uf' => 'PR'
        ]);
        Paciente::create([
            'codPaciente' => 4,
            'nome' => 'Juliana Moreira',
            'dataNasc' => '2001-05-25',
            'cpf' => '01234567890',
            'telefone' => '21912345678',
            'fk_paciente_codEndereco' => 9,
            'fk_paciente_codLogin' => 19,
            'responsavel' => false
        ]);

        Usuario::create([
            'codLogin' => 20,
            'tipo' => 'paciente',
            'email' => 'paciente5@email.com.br',
            'senha' => 'Senha987!'
        ]);
        Endereco::create([
            'codEndereco' => 10,
            'logradouro' => 'Rua Augusta',
            'bairro' => 'Consolação',
            'numero' => 212,
            'cidade' => 'São Paulo',
            'complemento' => 'Subsolo',
            'cep' => '01413000',
            'uf' => 'SP'
        ]);
        Paciente::create([
            'codPaciente' => 5,
            'nome' => 'Fernanda Costa',
            'dataNasc' => '1992-08-21',
            'cpf' => '80123456789',
            'telefone' => '11987654321',
            'fk_paciente_codEndereco' => 10,
            'fk_paciente_codLogin' => 20,
            'responsavel' => true
        ]);

    }
}
