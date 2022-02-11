import React    from 'react';
import {Link} from "react-router-dom";
 
function NotFound( ) {
    return (
      <div>
       <div className='notfound'>
       <h1>404</h1>
       <h3>Not Found</h3>
       <img src='https://covid19.mohp.gov.np/images//sad.png'></img>
       <h5>Stranica koju tražite ne postoji ili je uklonjena.</h5>
       <Link to="/"><span>Vrati se nazad na početnu stranu</span></Link>
      </div>
    </div>
      );
}
export default NotFound;