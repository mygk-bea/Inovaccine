<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agendamento extends Model
{
    protected $table = "Agendamento";

    protected $primaryKey = 'codAgendamento';

    protected $fillable = [
        'codAgendamento',
        'valor',
        'fk_paciente_codPaciente',
        'fk_clinica_codClinica',
        'fk_endereco_codEndereco',
        'data',
        'hora',
        'comparecimento',
        'fk_campanha_codCampanha',
        'forma_Pagamento'
    ]; 

    public function paciente(){
        return $this->belongsTo(Paciente::class, 'fk_paciente_codPaciente');
    }

    public function clinica(){
        return $this->belongsTo(Clinica::class, 'fk_clinica_codClinica');
    }

    public function endereco(){
        return $this->belongsTo(Endereco::class, 'fk_endereco_codEndereco');
    }

    public function campanha(){
        return $this->belongsTo(Campanha::class, 'fk_campanha_codCampanha');
    }
    use HasFactory;
}
