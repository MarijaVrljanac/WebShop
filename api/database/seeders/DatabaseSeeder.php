<?php

namespace Database\Seeders;

use App\Models\Kategorija;

use App\Models\Korpa;
use App\Models\Kupovina;
use App\Models\Proizvodi;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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



              //kreiracemo ovde admina
              $admin = new User();
              $admin->name="Admin";
              $admin->email="admin@gmail.com";
              $admin->password= Hash::make("admin");
              $admin->admin = 1;
              $admin->save();
        User::factory(10)->create();

  


        $kats = new KategorijaSeeder(); 
        $kats->run();

        $ks = new KorpaSeeder();
        $ks->run();

        $ps = new ProizvodiSeeder();
        $ps->run();

        $kupovina1 = new Kupovina();
        $kupovina1->sum = 100;
        $kupovina1->cartNum = 1;
        $kupovina1->user_id = 1;
        $kupovina1->korpa_id = 1;
        $kupovina1->save();

    }
}
