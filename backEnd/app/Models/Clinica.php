<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clinica extends Model
{
    protected $table = "Clinica";

    protected $fillable = [
        'codClinica',
        'nome',
        'cnpj',
        'fk_clinica_codEndereco',
        'telefone',
        'fk_clinica_codLogin',
        'periodo_funcionamento',
        'fk_clinica_codMedico'
    ]; 

    use HasFactory;
}
