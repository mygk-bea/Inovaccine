<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(MedicoSeeder::class);
        $this->call(ClinicaSeeder::class);
        $this->call(FuncionarioSeeder::class);
        $this->call(VacinaSeeder::class);
        $this->call(CampanhaSeeder::class);
        $this->call(PacienteSeeder::class);
        $this->call(SuperUserSeeder::class);
    }
}
