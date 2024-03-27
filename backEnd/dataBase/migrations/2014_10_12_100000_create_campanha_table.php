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
        Schema::create('Campanha', function (Blueprint $table) {
            $table->increments('codCampanha')->unsigned();
            $table->string('nome')->nullable(false);
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->dateTime('dataInicio')->nullable(false);
            $table->dateTime('dataFim')->nullable(false);
            $table->timestamps();

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Campanha');
    }
};
