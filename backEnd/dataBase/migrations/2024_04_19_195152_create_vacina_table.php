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
            $table->string('nome', 100)->nullable(false);
            $table->string('informacao', 100)->nullable(false);
            $table->decimal('preco', 10, 2)->nullable(false);
            // idade, gestante :)
            $table->string('periodo')->nullable(false);
            $table->string('diasAplicacao')->nullable(false);
            
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
