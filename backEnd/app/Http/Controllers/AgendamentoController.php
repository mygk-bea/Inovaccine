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
        $vacinas = $request->input('vacinas', []);
        $vacina = new Vacina();
        $valor = 0;
    
        foreach ($vacinas as $codVacina) {
            if($codVacina != null){
                $vacinaEspecifica = $vacina->where('codVacina', $codVacina)->first();
                $valor += $vacinaEspecifica->preco;
            }
        
        }

        $agendamento = new Agendamento();
        $agendamento->valor = $valor;
        $agendamento->fk_paciente_codPaciente = $request->input('paciente');
        $agendamento->fk_clinica_codClinica = $request->input('clinica');

        if ($request->input('modalidade') == 'clinica') {
            $clinicaEspecifica = Clinica::where('codClinica', $request->input('clinica'))->first();
            $agendamento->fk_endereco_codEndereco = $clinicaEspecifica->fk_clinica_codEndereco;
            
        } elseif ($request->input('modalidade') == 'casa') {
            $paciente = Paciente::where('codPaciente', $request->input('paciente'))->first();
            $agendamento->fk_endereco_codEndereco = $paciente->fk_paciente_codEndereco;
            
        } 
    
        $agendamento->data = $request->input('data');
        $agendamento->hora = $request->input('hora');
        $agendamento->comparecimento = false;
        $agendamento->forma_Pagamento = $request->input('forma_Pagamento');
        $agendamento->vacinas = implode(',',$request->input('vacina', []));
        $agendamento->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($userId) {
        // Filtra os funcionários pelo ID (caso esteja relacionado a um usuário)
        $agendamento = Agendamento::where('fk_paciente_codPaciente', $userId)
                                   ->orderBy('created_at', 'desc')
                                   ->get();
        
        return response()->json($agendamento);
    }
    
    public function showClinic($clinicId) {
        
        $agendamento = Agendamento::with(['paciente', 'endereco', 'campanha'])
                                    ->where('fk_clinica_codClinica', $clinicId)
                                    ->orderBy('created_at', 'desc')
                                    ->get();
        
        return response()->json($agendamento);
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
