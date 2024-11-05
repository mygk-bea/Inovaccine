<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use App\Models\SuperUser;

class SuperUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Usuario::create([
            'codLogin' => 21,
            'tipo' => 'super-user',
            'email' => 'beatriz@inovaccine.com.br',
            'senha' => 'Senha301!'
        ]);
        SuperUser::create([
            'codSuperUser' => 1,
            'nome' => 'Beatriz Meyagusko',
            'fk_superuser_codLogin' => 21
        ]);

        Usuario::create([
            'codLogin' => 22,
            'tipo' => 'super-user',
            'email' => 'julia@inovaccine.com.br',
            'senha' => 'Senha271!'
        ]);
        SuperUser::create([
            'codSuperUser' => 2,
            'nome' => 'Júlia Bueno',
            'fk_superuser_codLogin' => 22
        ]);

        Usuario::create([
            'codLogin' => 23,
            'tipo' => 'super-user',
            'email' => 'thayna@inovaccine.com.br',
            'senha' => 'Senha035!'
        ]);
        SuperUser::create([
            'codSuperUser' => 3,
            'nome' => 'Thayná Marostica',
            'fk_superuser_codLogin' => 23
        ]);

        Usuario::create([
            'codLogin' => 24,
            'tipo' => 'super-user',
            'email' => 'vitor@inovaccine.com.br',
            'senha' => 'Senha597!'
        ]);
        SuperUser::create([
            'codSuperUser' => 4,
            'nome' => 'Vitor Fantes',
            'fk_superuser_codLogin' => 24
        ]);

        Usuario::create([
            'codLogin' => 25,
            'tipo' => 'super-user',
            'email' => 'super@admin.com.br',
            'senha' => '123'
        ]);
        SuperUser::create([
            'codSuperUser' => 4,
            'nome' => 'Super admin',
            'fk_superuser_codLogin' => 25
        ]);
    }
}
