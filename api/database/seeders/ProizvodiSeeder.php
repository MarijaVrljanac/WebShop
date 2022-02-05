<?php

namespace Database\Seeders;
use App\Models\Proizvodi;
use Illuminate\Database\Seeder;

class ProizvodiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Proizvodi::factory(10)->create();
    }
}
