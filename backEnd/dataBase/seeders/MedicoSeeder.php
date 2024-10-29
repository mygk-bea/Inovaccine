<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Medico;
use App\Models\Usuario;

class MedicoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usuario::create([
            'codLogin' => 1,
            'tipo' => 'medico',
            'email' => 'anaclara.silva@example.com',
            'senha' => 'Senha123!'
        ]);
        Medico::create([
            'codMedico' => 1,
            'nome' => 'Ana Clara Silva',
            'cpf' => '12345678900',
            'crm' => '123456789',
            'telefone' => '11912345678',
            'fk_medico_codLogin' => 1
        ]);

        Usuario::create([
            'codLogin' => 2,
            'tipo' => 'medico',
            'email' => 'joaopedro.santos@example.com',
            'senha' => 'Senha456!'
        ]);
        Medico::create([
            'codMedico' => 2,
            'nome' => 'João Pedro Santos',
            'cpf' => '98765432100',
            'crm' => '987654321',
            'telefone' => '21998765432',
            'fk_medico_codLogin' => 2
        ]);

        Usuario::create([
            'codLogin' => 3,
            'tipo' => 'medico',
            'email' => 'maria.oliveira@example.com',
            'senha' => 'Senha789!'
        ]);
        Medico::create([
            'codMedico' => 3,
            'nome' => 'Maria Fernanda Oliveira',
            'cpf' => '32165498700',
            'crm' => '456789123',
            'telefone' => '31934567890',
            'fk_medico_codLogin' => 3
        ]);

        Usuario::create([
            'codLogin' => 4,
            'tipo' => 'medico',
            'email' => 'lucas.costa@example.com',
            'senha' => 'Senha321!'
        ]);
        Medico::create([
            'codMedico' => 4,
            'nome' => 'Lucas Gabriel Costa',
            'cpf' => '65432109800',
            'crm' => '135792468',
            'telefone' => '41945671234',
            'fk_medico_codLogin' => 4
        ]);

        Usuario::create([
            'codLogin' => 5,
            'tipo' => 'medico',
            'email' => 'beatriz.almeida@example.com',
            'senha' => 'Senha135!'
        ]);
        Medico::create([
            'codMedico' => 5,
            'nome' => 'Beatriz Almeida',
            'cpf' => '14725836900',
            'crm' => '246813579',
            'telefone' => '51956784321',
            'fk_medico_codLogin' => 5
        ]);
    }
}
