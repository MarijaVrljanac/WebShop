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
            'price' => $this->faker->numberBetween($min = 1000, $max = 9000) ,
            'amount' =>0,
            'category' => Kategorija::find(random_int(1,Kategorija::count())),
            'image' => $this->faker->randomElement($array = array ('https://media.istockphoto.com/photos/ice-cream-picture-id500545362?k=20&m=500545362&s=612x612&w=0&h=47BAAM62P7qU-m8rZcAJVJcINlidqv5jxvKj58VVBtk=','https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg','https://i2.wp.com/mnemagazin.me/wp-content/uploads/2017/02/gumene-bombone-e1486640233242.jpg?ssl=1','https://s3.envato.com/files/240029552/DSC_2558.jpg'))
        ];
    }
}
