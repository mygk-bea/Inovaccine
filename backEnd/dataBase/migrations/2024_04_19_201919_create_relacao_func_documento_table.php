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
        Schema::create('relacao_func_documento', function (Blueprint $table) {
            $table->increments('codEmissao')->unsigned();
            $table->unsignedInteger('fk_func_codFuncionario')->nullable(false);
            $table->unsignedInteger('fk_documento_codDocumento')->nullable(false);
            $table->timestamps();

            $table->foreign('fk_func_codFuncionario')->references('codFuncionario')->on('Funcionario');
            $table->foreign('fk_documento_codDocumento')->references('codDocumento')->on('Documento');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relacao_func_documento');
    }
};
