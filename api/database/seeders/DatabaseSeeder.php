<?php

namespace Database\Seeders;

use App\Models\Kategorija;
use App\Models\Korpa;
use App\Models\Proizvodi;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Kategorija::truncate();
        Korpa::truncate();
        Proizvodi::truncate();

        User::factory(10)->create();

        $kats = new KategorijaSeeder(); 
        $kats->run();

        $ks = new KorpaSeeder();
        $ks->run();

        $ps = new ProizvodiSeeder();
        $ps->run();

    }
}
