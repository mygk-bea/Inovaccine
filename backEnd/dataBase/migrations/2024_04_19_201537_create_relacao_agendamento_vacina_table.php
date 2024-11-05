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
        Schema::create('relacao_agendamento_vacina', function (Blueprint $table) {
            $table->unsignedInteger('fk_paciente_codPaciente');
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->unsignedInteger('fk_agendamento_codAgendamento');
            // $table->string('nome', 100)->nullable(false);

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
            $table->foreign('fk_paciente_codPaciente')->references('codPaciente')->on('Paciente');
            $table->foreign('fk_agendamento_codAgendamento')->references('codAgendamento')->on('agendamento');

            $table->primary(['fk_paciente_codPaciente', 'fk_vacina_codVacina']);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relacao_agendamento_vacina');
    }
};
