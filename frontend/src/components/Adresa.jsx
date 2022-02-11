import React    from 'react';
import {BsFillEnvelopeFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import './Adresa.css';
 
function Adresa( ) {
    return (
      <div>
      
       <div className='head'><strong><h3>Možete nas pronaći na sledećim lokacijama:</h3></strong>  </div>
              <div className='adresa'>
                <h5>Bulevar Mihajla Pupina 74a, Novi Beograd</h5>
                <img className='slika' src="https://www.google.com/maps/vt/data=ohhewixFMoTFxi77by5WDk_kMthWbwsHVRB-TqRemDvGXV-KcQRBmWqDbUd95JypHaZZOQAiFe7m8k5HVVcyFVvK6oxIroS8nCBPOQzf7omvNnkibxzRsYyfernGcBqcyLzVB3MOCuJQZLlD3pPPURH1cRVUjVaEMLLhRrFC8IM" ></img>
                <br></br>
                <h5>Cara Dušana 92, Zemun</h5>
                <img className='slika' src="https://www.google.com/maps/vt/data=EnT5d025cxcWMMmtssQkAsN8l5qagc9fpZJTvdnM8gNEwX_VtPRkcb0jvPMj4yDFFgB2oOj7Uk6jf2AnzDh2n5DRMuEtEj8OcsbtvsVnUHRaibPu3CbFrMWMzoOnBWPDwoNsVmur62_CGy-psynnt-uJED2vaoIV6IKR"></img>
                <br></br>
                <h5>Vojvode Knićanina 12/b, Novi Sad</h5>
                <img className='slika' src="https://www.google.com/maps/vt/data=yK9a-XxzDYKfR3Xl6uUBmGdQwc01xxPxg1MT1VVdY70h8_xq_6YtW_QqZW5oaU7j1CEjXlvdVm7S5ljv3BBqPTZwreGq-pIUzpKEsP4JmI50dzNO9FyEeesNqyJbl6YKBoTbN_31KyQcsRb7eSFdo_Xxef7IYv_sJOPgYptX-PihjlKdAKSOFNAkQ6Cb7w9pNGiyxaM_JcakvIPeuM4a0lQqPF6OC0szEGcV5wR-VPr7sYTPdRo3z_D_s7l04-0955XFzWBjwk5-Xs0ouD0utkMJvNpIh4OC7BdKDrN3" ></img>


       </div>
            <ul className='list'>
               <strong>Kontakt telefon: +381 11 123 456</strong>  
                <li> <strong>Email: slatkisi@gmail.com </strong></li>
                <li className="footerlink"><BsFillEnvelopeFill/><Link to="/kontakt" className="footerlink"> <strong> Ili kliknite ovde...  </strong></Link></li>
            </ul>
      
      
     
      
    </div>
      );
}
export default Adresa;