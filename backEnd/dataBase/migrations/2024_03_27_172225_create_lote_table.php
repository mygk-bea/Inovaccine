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
        Schema::create('Lote', function (Blueprint $table) {
            $table->increments('codLote')->unsigned();
            $table->decimal('valor', total: 10, places: 2)->nullable(false);
            $table->string('vacina')->nullable(false);
            $table->date('data_compra')->nullable(false);
            $table->decimal(total: 10, places: 0)->nullable(false);
            $table->unsignedInteger('fk_fornecedor_codFornecedor')->nullable(false);
            $table->timestamps();


            $table->foreign('fk_fornecedor_codFornecedor')->references('codFornecedor')->on('Fornecedor');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Lote');
    }
};
