<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estoque extends Model
{
    protected $table = "Estoque";

    protected $fillable = [
        'codEstoque',
        'fk_estoque_codLote',
        'qtd_minimo',
        'qtd',
        'fk_estoque_codClinica',
        'fk_estoque_codVacina'
    ]; 

    use HasFactory;
}
