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
        Schema::create('campanha', function (Blueprint $table) {
            $table->increments('codCampanha')->unsigned();
            $table->string('nome')->nullable(false);
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->unsignedInteger('fk_agendamento_codAgendamento');
            $table->dateTime('dataInicio')->nullable(false);
            $table->dateTime('dataFim')->nullable(false);

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
            $table->foreign('fk_agendamento_codAgendamento')->references('codAgendamento')->on('agendamento');

            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campanha');
    }
};
