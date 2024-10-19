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
        'status',
        'dataInicio',
        'dataFim'
    ]; 

    public function vacina(){
        return $this->belongsTo(Vacina::class, 'fk_campanha_codVacina');
    }
    use HasFactory;
}
