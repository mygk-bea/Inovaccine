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
        Schema::create('agendamento', function (Blueprint $table) {
            $table->increments('codAgendamento')->unsigned();
            $table->decimal('valor', 10, 2)->nullable(false);
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->unsignedInteger('fk_paciente_codPaciente');
            $table->unsignedInteger('fk_clinica_codClinica');
            $table->dateTime('dataHora')->nullable(false);
            $table->boolean('comparecimento');
            $table->unsignedInteger('fk_campanha_codCampanha')->nullable();

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
            $table->foreign('fk_paciente_codPaciente')->references('codPaciente')->on('Paciente');
            $table->foreign('fk_clinica_codClinica')->references('codClinica')->on('Clinica');
            $table->foreign('fk_campanha_codCampanha')->references('codCampanha')->on('campanha');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agendamento');
    }
};
