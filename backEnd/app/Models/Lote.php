<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estoque extends Model
{
    protected $table = "Estoque";

    protected $fillable = [
        'codLote',
        'valor',
        'qtd_minimo',
        'qtd',
        'fk_clinica_codClinica',
        'fk_fornecedor_codFornecedor',
        'fk_vacina_codVacina',
        'dataCompra'
    ]; 

    use HasFactory;
}
