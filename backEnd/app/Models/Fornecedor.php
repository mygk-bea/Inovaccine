<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    protected $table = "Fornecedor";

    protected $primaryKey = 'codFornecedor';

    protected $fillable = [
        'codFornecedor',
        'nome',
        'telefone',
        'cnpj'
    ]; 

    use HasFactory;
}
