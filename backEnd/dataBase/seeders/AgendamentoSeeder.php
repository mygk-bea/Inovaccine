<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Agendamento;

class AgendamentoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Agendamento::create([
            'codAgendamento' => 1,
            'valor' => 1500.00,
            'fk_paciente_codPaciente' => 1,
            'fk_clinica_codClinica' => 1,
            'fk_endereco_codEndereco' => 1,
            'data' => '2024-11-29',
            'hora' => '20:20',
            'comparecimento' => true,
            'fk_campanha_codCampanha' => 1,
            'forma_Pagamento' => 'Pix',
            'vacinas' => '1, 2, 3'
        ]);
        
        Agendamento::create([
            'codAgendamento' => 2,
            'valor' => 200.50,
            'fk_paciente_codPaciente' => 2,
            'fk_clinica_codClinica' => 1,
            'fk_endereco_codEndereco' => 2,
            'data' => '2024-11-29',
            'hora' => '14:30',
            'comparecimento' => false,
            'fk_campanha_codCampanha' => 2,
            'forma_Pagamento' => 'Cartão de Crédito',
            'vacinas' => '1, 2, 3'
        ]);
        
        Agendamento::create([
            'codAgendamento' => 3,
            'valor' => 750.00,
            'fk_paciente_codPaciente' => 3,
            'fk_clinica_codClinica' => 1,
            'fk_endereco_codEndereco' => 3,
            'data' => '2024-11-29',
            'hora' => '09:45',
            'comparecimento' => true,
            'fk_campanha_codCampanha' => 3,
            'forma_Pagamento' => 'Dinheiro',
            'vacinas' => '1, 2, 3'
        ]);
        
        Agendamento::create([
            'codAgendamento' => 4,
            'valor' => 500.75,
            'fk_paciente_codPaciente' => 4,
            'fk_clinica_codClinica' => 2,
            'fk_endereco_codEndereco' => 4,
            'data' => '2024-04-25',
            'hora' => '16:00',
            'comparecimento' => false,
            'fk_campanha_codCampanha' => 4,
            'forma_Pagamento' => 'Boleto',
            'vacinas' => '1, 2, 3'
        ]);
        
        Agendamento::create([
            'codAgendamento' => 5,
            'valor' => 1200.00,
            'fk_paciente_codPaciente' => 5,
            'fk_clinica_codClinica' => 2,
            'fk_endereco_codEndereco' => 5,
            'data' => '2024-05-12',
            'hora' => '11:15',
            'comparecimento' => true,
            'fk_campanha_codCampanha' => 5,
            'forma_Pagamento' => 'Transferência Bancária',
            'vacinas' => '1, 2, 3'
        ]);
    }
}
