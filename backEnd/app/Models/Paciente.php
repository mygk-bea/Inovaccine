<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    protected $table = 'paciente'; // Nome da tabela no banco de dados

    protected $primaryKey = 'codPaciente';

    protected $fillable = ['codPaciente', 'nome', 'dataNasc', 'cpf', 'telefone', 'fk_paciente_codEndereco', 'fk_paciente_codLogin', 'responsavel']; // Campos que podem ser atribuídos em massa

    public function endereco(){
        return $this->belongsTo(Endereco::class, 'fk_paciente_codEndereco');
    }

    public function usuario(){
        return $this->belongsTo(Usuario::class, 'fk_paciente_codLogin');
    }

    use HasFactory;
}
