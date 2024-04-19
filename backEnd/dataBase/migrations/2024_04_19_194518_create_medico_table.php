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
        Schema::create('Medico', function (Blueprint $table) {
            $table->increments('codMedico')->unsigned();
            $table->string('nome', 100)->nullable(false);
            $table->char('cpf', 11)->nullable(false);
            $table->char('crm', 9)->nullable(false);
            $table->char('telefone', 11)->nullable(false);
            $table->unsignedInteger('fk_medico_codLogin')->nullable(false);
            $table->timestamps();

            $table->foreign('fk_medico_codLogin')->references('codLogin')->on('Usuario');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Medico');
    }
};
