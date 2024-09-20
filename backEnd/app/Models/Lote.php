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
        'fk_lote_codClinica',
        'fk_lote_codFornecedor',
        'fk_lote_codVacina',
        'dataCompra',
        'dataValidade'
    ]; 

    public function clinica(){
        return $this->belongsTo(Clinica::class, 'fk_lote_codClinica');
    }

    public function fornecedor(){
        return $this->belongsTo(Fornecedor::class, 'fk_lote_codFornecedor');
    }

    public function vacina(){
        return $this->belongsTo(Vacina::class, 'fk_lote_codVacina');
    }

    use HasFactory;
}
