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
        Schema::create('Dependentes', function (Blueprint $table) {
            $table->increments('codDependente')->unsigned();
            $table->string('nome', 100)->nullable(false);
            $table->unsignedInteger('fk_paciente_codPaciente');


            $table->foreign('fk_paciente_codPaciente')->references('codPaciente')->on('Paciente');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Dependentes');
    }
};
