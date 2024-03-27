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
        Schema::create('Clinica', function (Blueprint $table) {
            $table->increments('codClinica')->unsigned();
            $table->string('nome', 100)->nullable(false);
            $table->char('cnpj', 14)->nullable(false);
            $table->unsignedInteger('fk_clinica_codEndereco')->nullable(false);
            $table->char('telefone', 9)->nullable(false);
            $table->unsignedInteger('fk_clinica_codLogin')->nullable(false);
            $table->dateTime('periodo_funcionamento')->nullable(false);
            $table->unsignedInteger('fk_clinica_codMedico')->nullable(false);
            $table->timestamps();

            $table->foreign('fk_clinica_codEndereco')->references('codEndereco')->on('Endereco');
            $table->foreign('fk_clinica_codLogin')->references('codLogin')->on('Usuario');
            $table->foreign('fk_clinica_codMedico')->references('codMedico')->on('Medico');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Clinica');
    }
};
