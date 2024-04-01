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
        Schema::create('RelacaoAgendamento', function (Blueprint $table) {
            $table->unsignedInteger('fk_paciente_codPaciente');
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->string('nome', 100)->nullable(false);

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
            $table->foreign('fk_paciente_codPaciente')->references('codPaciente')->on('Paciente');

            $table->primary(['fk_paciente_codPaciente', 'fk_vacina_codVacina']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('RelacaoAgendamento');
    }
};

