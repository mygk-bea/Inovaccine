<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "Usuario";

    protected $fillable = [
        'codLogin',
        'tipo',
        'email',
        'senha'
    ]; 

    use HasFactory;
}
