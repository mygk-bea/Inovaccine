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
        Schema::create('relacao_vacina_clinica', function (Blueprint $table) {
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->unsignedInteger('fk_clinica_codClinica');
            $table->timestamps();

            $table->primary(['fk_vacina_codVacina', 'fk_clinica_codClinica']);

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
            $table->foreign('fk_clinica_codClinica')->references('codClinica')->on('Clinica');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relacao_vacina_clinica');
    }
};
