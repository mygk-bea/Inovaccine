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
        Schema::create('relacao_func_clinica', function (Blueprint $table) {
            $table->unsignedInteger('fk_func_codFuncionario');
            $table->unsignedInteger('fk_clinica_codClinica');
            

            $table->primary(['fk_func_codFuncionario', 'fk_clinica_codClinica']);

            $table->foreign('fk_func_codFuncionario')->references('codFuncionario')->on('Funcionario');
            $table->foreign('fk_clinica_codClinica')->references('codClinica')->on('Clinica');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relacao_func_clinica');
    }
};
