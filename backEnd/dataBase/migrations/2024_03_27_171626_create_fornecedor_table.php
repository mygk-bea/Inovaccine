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
        Schema::create('Fornecedor', function (Blueprint $table) {
            $table->increments('codFornecedor')->unsigned();
            $table->string('nome', 100)->nullable(false);
            $table->char('telefone', 9)->nullable(false);
            $table->char('cnpj', 14)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Fornecedor');
    }
};
