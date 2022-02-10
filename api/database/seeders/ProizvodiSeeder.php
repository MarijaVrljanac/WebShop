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
        Proizvodi::create(['image'=>'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/rainbow-candy-lolipop-shana-novak.jpg', 'name'=>'Lizalica', 'description'=>'Lizalica je vrsta bombone od šećera koja se sastoji od tvrde bombone koja je oblivena oko vrha štapića i namenjena je za lizanje. Lizalice postoje i mnogim oblicima i ukusima.', 'price'=>250, 'amount'=>1, 'category'=>2]);
        Proizvodi::create(['image'=>'https://madus.com.np/wp-content/uploads/2020/12/Chocolate-cake-recipe-1200a.jpg', 'name'=>'Cokoladna torta sa lesnicima', 'description'=>'Ovo je torta sa mekanim čokoladnim biskvitom od mlevenih prženih lešnika, i sa puno kreme od kuvanih jaja sa crnom i mlečnom čokoladom i opet sa prženim lešnicima, pola mleveno a pola krupno seckano.', 'price'=>2000, 'amount'=>1, 'category'=>4]);
        Proizvodi::create(['image'=>'https://previews.123rf.com/images/mazzzur/mazzzur1808/mazzzur180800134/107633298-assorted-gummy-candies-in-the-shop-top-view-jelly-sweets-.jpg', 'name'=>'Gumene bombone u raznim oblicima', 'description'=>'Gumene bombone su slatkiši u kojima je u osnovi želatin. Sem želatina , u sastav gumenih bombona ulazi glukozni sirup, šećer, veštačke boje.', 'price'=>750, 'amount'=>1, 'category'=>3]);
        Proizvodi::create(['image'=>'http://images.kurir.rs/slika-620x419/gumene-bombone-foto-profimedia-1460386556-884283.jpg', 'name'=>'Gumene bombone gliste', 'description'=>'Gumene bombone su slatkiši u kojima je u osnovi želatin. Sem želatina , u sastav gumenih bombona ulazi glukozni sirup, šećer, veštačke boje.', 'price'=>300, 'amount'=>1, 'category'=>3]);
        Proizvodi::create(['image'=>'https://media.istockphoto.com/photos/ice-cream-picture-id500545362?k=20&m=500545362&s=612x612&w=0&h=47BAAM62P7qU-m8rZcAJVJcINlidqv5jxvKj58VVBtk=', 'name'=>'Sareni sladoled', 'description'=>'Sladoled, ledena poslastica kojoj  niko ne može odoleti, svakodnevno se proizvodi u našim fabrikama po jedinstvenim recepturama koje garantuju nezaboravan ukus.', 'price'=>169, 'amount'=>1, 'category'=>1]);
        Proizvodi::create(['image'=>'https://thumbs.dreamstime.com/b/lollipop-colorful-isolated-against-white-30521506.jpg', 'name'=>'Lizalica', 'description'=>'Lizalica je vrsta bombone od šećera koja se sastoji od tvrde bombone koja je oblivena oko vrha štapića i namenjena je za lizanje. Lizalice postoje i mnogim oblicima i ukusima.', 'price'=>984, 'amount'=>1, 'category'=>2]);
        Proizvodi::create(['image'=>'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55J1g26iCVmkbTn7MhsmLTK9ava4aP-EyZw&usqp=CAU', 'name'=>'Cokoladna torta', 'description'=>'Čokoladna torta koja se topi u ustima. Sočan biskvit, fina čokoladna krema u kombinaciji sa marmeladom i šlagom, svi je vole.', 'price'=>354, 'amount'=>1, 'category'=>4]);
        Proizvodi::create(['image'=>'https://i2.wp.com/mnemagazin.me/wp-content/uploads/2017/02/gumene-bombone-e1486640233242.jpg?ssl=1', 'name'=>'Gumene bombone u raznim oblicima', 'description'=>'Gumene bombone su slatkiši u kojima je u osnovi želatin. Sem želatina , u sastav gumenih bombona ulazi glukozni sirup, šećer, veštačke boje.', 'price'=>741, 'amount'=>1, 'category'=>3]);
        Proizvodi::create(['image'=>'https://s3.envato.com/files/240029552/DSC_2558.jpg', 'name'=>'Gumene bombone lubenica', 'description'=>' ', 'price'=>974, 'amount'=>1, 'category'=>3]);
        Proizvodi::create(['image'=>'https://www.thespruceeats.com/thmb/RrP9qTWy2BbntDB6GCwWi8Yy29U=/3000x2000/filters:fill(auto,1)/UbeIceCreamHERO-ae953a4c3ede4690bd2f0ccbc104ea12.jpg', 'name'=> 'sladoledd','description'=>'Sladoled, ledena poslastica kojoj  niko ne može odoleti, svakodnevno se proizvodi u našim fabrikama po jedinstvenim recepturama koje garantuju nezaboravan ukus.', 'price'=>190, 'amount'=>1, 'category'=>1]);

    }
}
