<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campanha extends Model
{
    protected $table = "Campanha";

    protected $primaryKey = 'codCampanha';

    protected $fillable = [
        'codCampanha',
        'nome',
        'fk_campanha_codVacina',
        'fk_campanha_codAgendamento',
        'dataInicio',
        'dataFim'
    ]; 

    public function vacina(){
        return $this->belongsTo(Vacina::class, 'fk_campanha_codVacina');
    }
    public function agendamento(){
        return $this->belongsTo(Agendamento::class, 'fk_campanha_codAgendamento');
    }
    use HasFactory;
}
