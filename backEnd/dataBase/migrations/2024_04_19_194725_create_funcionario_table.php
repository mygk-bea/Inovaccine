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
        Schema::create('Funcionario', function (Blueprint $table) {
            $table->increments('codFuncionario')->unsigned();
            $table->string('nome', 100)->nullable(false);
            $table->char('cpf', 11)->nullable(false);
            $table->char('telefone', 9)->nullable(false);
            $table->unsignedInteger('fk_funcionario_codLogin')->nullable(false);

            $table->foreign('fk_funcionario_codLogin')->references('codLogin')->on('Usuario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Funcionario');
    }
};
