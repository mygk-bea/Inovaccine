<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Agendamento;
use App\Models\RelacaoAgendVacina;
use App\Models\Vacina;
use App\Models\Clinica;
use App\Models\Paciente;

class AgendamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $vacinas = $request->vacina;
        $valor = 0;
        $todasVacinas = new Vacina();
        

        // pegar a soma do valor total do atendimento
        foreach ($vacinas as $codVacina) {
            $vacinaEspecifica = Vacina::where('codVacina', $codVacina)->get()->first();
            $valorVacina = $vacinaEspecifica->valor;
            $valor += $valorVacina;
        }

        $agendamento = new Agendamento();
        
        $agendamento->valor =  $valor;
        $agendamento->fk_paciente_codPaciente = $request->paciente;
        $agendamento->fk_clinica_codClinica = $request->clinica;
        if($request->modalidade == 'clinica'){
            $clinicaEspecifica = Clinica::where('codClinica', $request->clinica)->get()->first();
            $codEndereco = $clinicaEspecifica->fk_clinica_codEndereco;
            $agendamento->fk_endereco_codEndereco = $codEndereco;
        }elseif ($request->modalidade == 'casa') {
            $paciente = Paciente::where('codPaciente', $request->paciente)->get()->first();
            $codEndereco = $paciente->fk_paciente_codEndereco;
            $agendamento->fk_endereco_codEndereco = $codEndereco;
        }
        $agendamento->data= $request->data;
        $agendamento->hora= $request->hora;
        $agendamento->comparecimento= false;
        $agendamento->forma_Pagamento= $request->formaPagamento;
        $agendamento->save();
        $codAgendamento= $agendamento->codAgendamento;
        
        // insert na relação agendamento e vacina
        foreach ($vacinas as $codVacina) {
        $relacao_agend_vacina = new RelacaoAgendVacina();
        $relacao_agend_vacina->fk_paciente_codPaciente = $request->paciente;
        $relacao_agend_vacina->fk_vacina_codVacina = $request->vacina;
        $relacao_agend_vacina->fk_agendamento_codAgendamento = $codAgendamento;
        $relacao_agend_vacina->save();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
