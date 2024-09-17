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
        Schema::create('lote', function (Blueprint $table) {
            $table->increments('codLote')->unsigned();
            $table->decimal('valor', 10, 2)->nullable(false);
            $table->decimal('qtd', 10, 2)->nullable(false);
            $table->decimal('qtd_minimo', 10, 2)->nullable(false);
            $table->unsignedInteger('fk_fornecedor_codFornecedor');
            $table->unsignedInteger('fk_clinica_codClinica');
            $table->unsignedInteger('fk_vacina_codVacina');
            $table->date('dataCompra')->nullable(false);

            $table->foreign('fk_fornecedor_codFornecedor')->references('codFornecedor')->on('Fornecedor');
            $table->foreign('fk_clinica_codClinica')->references('codClinica')->on('Clinica');
            $table->foreign('fk_vacina_codVacina')->references('codVacina')->on('Vacina');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lote');
    }
};
