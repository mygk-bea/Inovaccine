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
        Schema::create('lote', function (Blueprint $table) {
            $table->increments('codLote')->unsigned();
            $table->decimal('valor', 10, 2)->nullable(false);
            $table->unsignedInteger('fk_fornecedor_codFornecedor');
            $table->string('vacina')->nullable(false);
            $table->date('dataCompra')->nullable(false);

            $table->foreign('fk_fornecedor_codFornecedor')->references('codFornecedor')->on('Fornecedor');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lote');
    }
};
