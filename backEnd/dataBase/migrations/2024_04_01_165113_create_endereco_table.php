<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Endereco', function (Blueprint $table) {
            $table->increments('codEndereco')->unsigned();
            $table->string('logradouro', 100)->nullable(false);
            $table->string('bairro', 100)->nullable(false);
            $table->string('numero', 100)->nullable(false);
            $table->string('cidade', 100)->nullable(false);
            $table->string('complemento', 100)->nullable();
            $table->char('cep', 8)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Endereco');
    }
};

