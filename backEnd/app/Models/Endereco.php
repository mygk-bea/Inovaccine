<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    protected $table = "Endereco";

    protected $fillable = [
        'codEndereco',
        'logradouro',
        'bairro',
        'numero',
        'cidade',
        'complemento',
        'cep'
    ]; 

    use HasFactory;
}
