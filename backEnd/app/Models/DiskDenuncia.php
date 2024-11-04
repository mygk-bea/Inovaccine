<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiskDenuncia extends Model
{
    protected $table = "disk_Denuncia";

    protected $primaryKey = 'codDenuncia';

    protected $fillable = [
        'codDenuncia',
        'anonimo',
        'nome',
        'fk_endereco_codEndereco',
        'observacao'
    ]; 

    public function endereco(){
        return $this->belongsTo(Endereco::class, 'fk_endereco_codEndereco');
    }

    use HasFactory;
}
