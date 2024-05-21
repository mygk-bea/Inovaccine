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
        Schema::create('disk_Denuncia', function (Blueprint $table) {
            $table->increments('codDenuncia')->unsigned();
            $table->boolean('anonimo');
            $table->string('nome', 100)->nullable(false);
            $table->unsignedInteger('fk_endereco_codEndereco');
            $table->string('observacao', 100)->nullable(false);

            $table->foreign('fk_endereco_codEndereco')->references('codEndereco')->on('Endereco');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('disk_Denuncia');
    }
};
