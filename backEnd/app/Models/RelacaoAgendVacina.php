<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RelacaoAgendVacina extends Model
{
    protected $table = "relacao_agendamento_vacina";

    protected $primaryKey = ['fk_paciente_codPaciente', 'fk_vacina_codVacina'];

    protected $fillable = [
        'fk_paciente_codPaciente',
        'fk_vacina_codVacina',
        'fk_agendamento_codAgendamento'
    ]; 

    public function paciente(){
        return $this->belongsTo(Paciente::class, 'fk_paciente_codPaciente');
    }

    public function vacina(){
        return $this->belongsTo(Vacina::class, 'fk_vacina_codVacina');
    }

    public function agendamento(){
        return $this->belongsTo(Agendamento::class, 'fk_agendamento_codAgendamento');
    }


    use HasFactory;
}
