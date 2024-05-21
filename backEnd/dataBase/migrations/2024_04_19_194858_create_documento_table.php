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
        Schema::create('Documento', function (Blueprint $table) {
            $table->increments('codDocumento')->unsigned();
            $table->string('tipo', 100)->nullable(false);
            $table->string('arquivo', 100)->nullable(false);
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Documento');
    }
};
