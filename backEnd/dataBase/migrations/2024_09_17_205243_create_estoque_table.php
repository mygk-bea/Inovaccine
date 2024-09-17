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
        Schema::create('estoque', function (Blueprint $table) {
            $table->increments('codEstoque')->unsigned();
            $table->decimal('qtd', 10, 2)->nullable(false);
            $table->decimal('qtd_minimo', 10, 2)->nullable(false);
            $table->unsignedInteger('fk_estoque_codLote')->nullable(false);
            $table->unsignedInteger('fk_estoque_codClinica')->nullable(false);
            $table->unsignedInteger('fk_estoque_codVacina')->nullable(false);

            $table->foreign('fk_estoque_codLote')->references('codLote')->on('Lote');
            $table->foreign('fk_estoque_codClinica')->references('codClinica')->on('Clinica');
            $table->foreign('fk_estoque_codVacina')->references('codVacina')->on('Vacina');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estoque');
    }
};
