<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuperUser extends Model
{

    protected $table = 'super_user';

    protected $primaryKey = 'codSuperUser';

    protected $fillable = ['codSuperUser', 'nome', 'fk_superuser_codLogin']; 

    public function usuario(){
        return $this->belongsTo(Usuario::class, 'fk_superuser_codLogin');
    }

    use HasFactory;
}
