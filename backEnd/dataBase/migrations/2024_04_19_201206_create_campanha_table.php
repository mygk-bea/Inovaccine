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
            $table->unsignedInteger('fk_campanha_codVacina');
            $table->dateTime('dataInicio')->nullable(false);
            $table->dateTime('dataFim')->nullable(false);
            $table->boolean('status')->nullable(false);

            $table->foreign('fk_campanha_codVacina')->references('codVacina')->on('Vacina');

            $table->timestamps();

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
