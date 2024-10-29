<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Campanha;

class CampanhaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Campanha::create([
            'codCampanha' => 1,
            'nome' => 'Campanha de Vacinação contra Sarampo',
            'fk_campanha_codVacina'=> 1,
            'status'=> 1,
            'dataInicio'=> '2024-01-03',
            'dataFim'=> '2024-05-31'
        ]);

        Campanha::create([
            'codCampanha' => 2,
            'nome' => 'Campanha de Vacinação contra a Gripe',
            'fk_campanha_codVacina'=> 2,
            'status'=> 1,
            'dataInicio'=> '2024-10-04',
            'dataFim'=> '2024-06-30'
        ]);

        Campanha::create([
            'codCampanha' => 3,
            'nome' => 'Campanha DTPa (Difteria, Tétano e Coqueluche)',
            'fk_campanha_codVacina'=> 3,
            'status'=> 0,
            'dataInicio'=> '2024-01-15',
            'dataFim'=> '2024-03-15'
        ]);

        Campanha::create([
            'codCampanha' => 4,
            'nome' => 'Campanha de Vacinação contra Hepatite B',
            'fk_campanha_codVacina'=> 4,
            'status'=> 1,
            'dataInicio'=> '2024-05-02',
            'dataFim'=> '2024-04-20'
        ]);

        Campanha::create([
            'codCampanha' => 5,
            'nome' => 'Campanha Pneumocócica',
            'fk_campanha_codVacina'=> 5,
            'status'=> 0,
            'dataInicio'=> '2024-01-09',
            'dataFim'=> '2024-11-30'
        ]);
    }
}
