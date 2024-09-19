<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacina extends Model
{
    protected $table = "Vacina";
    protected $fillable = ['codVacina','nome', 'informacao', 'preco', 'periodo', 'diasAplicacao'];
    
    use HasFactory;
}
