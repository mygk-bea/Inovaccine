<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Vacina;

class VacinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Vacina::create([
            'codVacina' => 1,
            'nome' => 'Sarampo',
            'informacao' => 'Protege contra o sarampo, uma doença altamente contagiosa.',
            'preco' => 59.90,
            'periodo' => 'Crianças (1 a 2 anos), adultos (não vacinados).',
            'diasAplicacao' => 'Segunda, Quarta, Sexta'
        ]);

        Vacina::create([
            'codVacina' => 2,
            'nome' => 'Influenza (Gripe)',
            'informacao' => 'Ajuda a prevenir a gripe sazonal.',
            'preco' => 120.50,
            'periodo' => 'Crianças (a partir de 6 meses), adultos e idosos.',
            'diasAplicacao' => 'Terça, Quinta, Sábado'
        ]);

        Vacina::create([
            'codVacina' => 3,
            'nome' => 'DTPa (Difteria, Tétano e Coqueluche)',
            'informacao' => 'Combina proteção contra difteria, tétano e coqueluche.',
            'preco' => 34.99,
            'periodo' => 'Crianças (a partir de 2 meses), adolescentes e adultos (recomendada a cada 10 anos).',
            'diasAplicacao' => 'Domingo, Segunda, Terça'
        ]);

        Vacina::create([
            'codVacina' => 4,
            'nome' => 'Hepatite B',
            'informacao' => 'Previne a hepatite B, uma infecção viral que afeta o fígado.',
            'preco' => 89.00,
            'periodo' => 'Crianças (a partir do nascimento), adultos e gestantes.',
            'diasAplicacao' => 'Quarta, Quinta, Domingo'
        ]);

        Vacina::create([
            'codVacina' => 5,
            'nome' => 'Pneumocócica',
            'informacao' => 'Protege contra infecções pneumocócicas, incluindo pneumonia e meningite.',
            'preco' => 45.75,
            'periodo' => 'Crianças (a partir de 2 meses), idosos e adultos com condições de saúde específicas.',
            'diasAplicacao' => 'Sábado, Segunda, Quarta'
        ]);
    }
}
