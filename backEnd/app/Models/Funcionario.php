<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    protected $table = 'funcionario'; // Nome da tabela no banco de dados

    protected $fillable = ['nome', 'cpf', 'telefone']; // Campos que podem ser atribuídos em massa
}
