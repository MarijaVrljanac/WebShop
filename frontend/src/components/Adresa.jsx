import React    from 'react';
import {BsFillEnvelopeFill } from "react-icons/bs";
import {Link} from "react-router-dom";
 
function Adresa( ) {
    return (
      <div>
       <div className='adresa'>
       <strong><h3>Možete nas pronaći na sledećim lokacijama</h3></strong>  
                <p>Bulevar Mihajla Pupina 74a, Novi Beograd</p>
                <img src="https://www.google.com/maps/vt/data=ohhewixFMoTFxi77by5WDk_kMthWbwsHVRB-TqRemDvGXV-KcQRBmWqDbUd95JypHaZZOQAiFe7m8k5HVVcyFVvK6oxIroS8nCBPOQzf7omvNnkibxzRsYyfernGcBqcyLzVB3MOCuJQZLlD3pPPURH1cRVUjVaEMLLhRrFC8IM"></img>
                <p>Cara Dušana 92, Zemun</p>
                <img src="https://www.google.com/maps/vt/data=EnT5d025cxcWMMmtssQkAsN8l5qagc9fpZJTvdnM8gNEwX_VtPRkcb0jvPMj4yDFFgB2oOj7Uk6jf2AnzDh2n5DRMuEtEj8OcsbtvsVnUHRaibPu3CbFrMWMzoOnBWPDwoNsVmur62_CGy-psynnt-uJED2vaoIV6IKR"></img>
                <p>Vojvode Knićanina 12/b, Novi Sad</p>
                <img src="https://www.google.com/maps/vt/data=yK9a-XxzDYKfR3Xl6uUBmGdQwc01xxPxg1MT1VVdY70h8_xq_6YtW_QqZW5oaU7j1CEjXlvdVm7S5ljv3BBqPTZwreGq-pIUzpKEsP4JmI50dzNO9FyEeesNqyJbl6YKBoTbN_31KyQcsRb7eSFdo_Xxef7IYv_sJOPgYptX-PihjlKdAKSOFNAkQ6Cb7w9pNGiyxaM_JcakvIPeuM4a0lQqPF6OC0szEGcV5wR-VPr7sYTPdRo3z_D_s7l04-0955XFzWBjwk5-Xs0ouD0utkMJvNpIh4OC7BdKDrN3"></img>


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
export default Adresa;