<?php

namespace Database\Factories;
use App\Models\Kategorija;
use App\Models\Proizvodi;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProizvodiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->randomElement($array = array('Sareni sladoled', 'Ljubicasti sladoled', 'Lizalica', 'Gumene bombone gliste', 'Gumene bombone u raznim oblicima','Gumene bombone lubenica', 'Cokoladna torta', 'Cokoladna torta sa lesnicima')),
            'description'=>$this->faker->text(),
            'price' => $this->faker->randomDigitNotNull(),
            'amount' => $this->faker->randomDigitNotNull(),
            'category' => Kategorija::find(random_int(1,Kategorija::count()))
        ];
    }
}
