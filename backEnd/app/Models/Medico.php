<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    protected $table = 'medico'; // Nome da tabela no banco de dados

    protected $fillable = ['nome', 'cpf', 'crm', 'telefone']; // Campos que podem ser atribuídos em massa
}
