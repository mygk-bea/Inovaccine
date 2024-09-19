<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    protected $table = 'medico'; // Nome da tabela no banco de dados

    protected $primaryKey = 'codMedico';

    protected $fillable = ['codMedico', 'nome', 'cpf', 'crm', 'telefone', 'fk_medico_codLogin']; // Campos que podem ser atribuídos em massa

    public function endereco(){
        return $this->belongsTo(Endereco::class, 'fk_clinica_codEndereco');
    }
    public function medico(){
        return $this->belongsTo(Medico::class, 'fk_clinica_codMedico');
    }
    
    use HasFactory;
}
