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
        Schema::create('super_user', function (Blueprint $table) {
            $table->increments('codSuperUser')->unsigned();
            $table->string('nome', 100)->nullable(false);
            $table->unsignedInteger('fk_superuser_codLogin')->nullable();
            $table->timestamps();

            $table->foreign('fk_superuser_codLogin')->references('codLogin')->on('Usuario');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('super_user');
    }
};
