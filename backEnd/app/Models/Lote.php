<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lote extends Model
{
    protected $table = "Lote";

    protected $primaryKey = 'codLote';

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

    public function clinica(){
        return $this->belongsTo(Clinica::class, 'fk_clinica_codClinica');
    }

    public function fornecedor(){
        return $this->belongsTo(Fornecedor::class, 'fk_fornecedor_codFornecedor');
    }

    public function vacina(){
        return $this->belongsTo(Vacina::class, 'fk_vacina_codVacina');
    }

    use HasFactory;
}
