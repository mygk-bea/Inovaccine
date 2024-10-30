<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    protected $table = 'funcionario'; // Nome da tabela no banco de dados

    protected $primaryKey = 'codFuncionario';

    protected $fillable = ['codFuncionario', 'nome', 'cpf', 'telefone', 'fk_funcionario_codLogin', 'fk_funcionario_codClinica']; // Campos que podem ser atribuídos em massa

    public function usuario(){
        return $this->belongsTo(Usuario::class, 'fk_funcionario_codLogin');
    }

    public function clinica(){
        return $this->belongsTo(Clinica::class, 'fk_funcionario_codClinica');
    }

    use HasFactory;
}
