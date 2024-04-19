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
        Schema::create('carteira', function (Blueprint $table) {
            $table->increments('codCarteira')->unsigned();
            $table->string('dose', 100)->nullable(false);
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->unsignedInteger('fk_clinica_codClinica');
            $table->timestamps();

            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');
            $table->foreign('fk_clinica_codClinica')->references('codClinica')->on('Clinica');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carteira');
    }
};
