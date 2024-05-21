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
        Schema::create('postagem', function (Blueprint $table) {
            $table->increments('codPostagem')->unsigned();
            $table->string('titulo', 100)->nullable(false);
            $table->string('conteudo', 100)->nullable(false);
            $table->dateTime('data_hora_postagem')->nullable(false);
            $table->unsignedInteger('fk_post_codFuncionario')->nullable(false);
            $table->boolean('curtida')->nullable(false);

            $table->foreign('fk_post_codFuncionario')->references('codFuncionario')->on('Funcionario');
        
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('postagem');
    }
};
