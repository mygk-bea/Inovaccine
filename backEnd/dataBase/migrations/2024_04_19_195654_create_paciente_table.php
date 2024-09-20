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
        Schema::create('Paciente', function (Blueprint $table) {
            $table->increments('codPaciente')->unsigned();
            $table->string('nome', 100)->nullable(false);
            $table->date('dataNasc')->nullable(false);
            $table->char('cpf', 11)->unique()->nullable(false);
            $table->char('telefone', 11)->nullable(false);
            $table->unsignedInteger('fk_paciente_codEndereco')->nullable();
            $table->unsignedInteger('fk_paciente_codLogin')->nullable();
            $table->string('senha', 10)->nullable(false);
            $table->string('email', 100)->unique()->nullable(false);
            $table->boolean('responsavel');

            $table->foreign('fk_paciente_codEndereco')->references('codEndereco')->on('Endereco');
            $table->foreign('fk_paciente_codLogin')->references('codLogin')->on('Usuario');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Paciente');
    }
};
