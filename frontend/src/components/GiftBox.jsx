import React    from 'react';
import {BsFillEnvelopeFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import './GiftBox.css';
 
function GiftBox( ) {
    return (
      <div>
       <div className='head'><strong><h3>Poklon kutije sa slatkišima - slatki paketići</h3></strong> </div>
       <div className='giftbox'>
                <h5>Poklon kutije sa slatkišima idealno su rešenje za sve ljubitelje poslastica koji se ne mogu odlučiti za manji broj ukusa.</h5>
                
                <h5>A i zašto bi – veći broj slatkih zalogaja znači i duže uživanje!</h5>
                <h5>Obradujte svoje najmilije ili poslovne partnere omiljenim ukusima slatkiša jer – proverene kombinacije ne treba menjati.</h5>
                <br></br>
                
                <img className='img' src="https://www.daffydowndilly.co.uk/wp-content/uploads/2017/02/fizzy-sweetbox.jpg"></img>
                <br></br>
                <p>Mi pravimo poklon kutije sa slatkišima po Vašem izboru i dostavljamo na željenu adresu.</p>
                <p>Možete nas kontaktirati nekoliko dana unapred, ukoliko ste zainteresovani za ovu uslugu.</p>

       </div>
            <ul className='list'>
               <strong>Kontakt telefon: +381 11 123 456</strong>  
                <li> <strong>Email: slatkisi@gmail.com </strong></li>
                <li className="footerlink"><BsFillEnvelopeFill/><Link to="/kontakt" className="footerlink"> <strong> Ili kliknite ovde...  </strong></Link></li>
            </ul>
      
      
     
      
    </div>
      );
}
export default GiftBox;