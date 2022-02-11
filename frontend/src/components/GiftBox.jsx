import React    from 'react';
import {BsFillEnvelopeFill } from "react-icons/bs";
import {Link} from "react-router-dom";
 
function GiftBox( ) {
    return (
      <div>
       <div className='giftbox'>
       <strong><h3>Poklon kutije sa slatkišima - slatki paketići</h3></strong>  
                <p>Poklon kutije sa slatkišima idealno su rešenje za sve ljubitelje poslastica koji se ne mogu odlučiti za manji broj ukusa. A i zašto bi – veći broj slatkih zalogaja znači i duže uživanje! Upoznajte se sa ponudom Slatkoteka delikatesa i obradujte svoje najmilije ili poslovne partnere omiljenim ukusima čokolade i voća jer – proverene kombinacije ne treba menjati.</p>
                <p>Mi pravimo poklon kutije sa slatkišima po Vašem izboru i dostavljamo na željenu adresu.</p>
                <p>Možete nas kontaktirati nekoliko dana unapred, ukoliko ste zainteresovani za ovu uslugu.</p>
                <img src="https://www.daffydowndilly.co.uk/wp-content/uploads/2017/02/fizzy-sweetbox.jpg"></img>
                

       </div>
            <ul>
               <strong>Kontaktirajte nas</strong>  
                <li>+381 11 123 456</li>
                <li>slatkisi@gmail.com</li>
                <li className="footerlink"><BsFillEnvelopeFill/><Link to="/kontakt" className="footerlink"> Pište nam... </Link></li>
            </ul>
      
      
     
      
    </div>
      );
}
export default GiftBox;