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
            $table->char('telefone', 9)->nullable(false);
            $table->unsignedInteger('fk_endereco_codEndereco')->nullable();
            $table->string('login', 50)->unique()->nullable(false);
            $table->string('senha', 10)->nullable(false);
            $table->string('email', 100)->unique()->nullable(false);
            $table->boolean('responsavel');

            $table->foreign('fk_endereco_codEndereco')->references('codEndereco')->on('Endereco');
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
