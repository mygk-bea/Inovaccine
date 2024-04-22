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
        Schema::create('Vacina', function (Blueprint $table) {
            $table->increments('codVacina')->unsigned();
            $table->string('informacao', 100)->nullable(false);
            $table->decimal('preco', 10, 2)->nullable(false);
            $table->date('dataValidade')->nullable(false);
            $table->date('periodo')->nullable(false);
            $table->string('status', 20)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Vacina');
    }
};
