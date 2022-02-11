import axios from "axios";
import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
 
function NavBar({cartNum,token}) {

  function handleLogout(){ //logout se sjebao ali popravicemo
    console.log("USAO")
    var config = {
      method: 'post',
      url: 'api/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
        
      },
    };
    console.log(window.sessionStorage.getItem("auth_token"))
    alert("A");
    axios(config)
    .then(function (response) {
     // console.log(JSON.stringify(response.data));
      alert("A");
      window.sessionStorage.setItem("auth_token",null); 
      window.sessionStorage.setItem("auth_name",null); 
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }



  return (
    <div className="navbar">
      <Link to="/"  className="navbar-items" >Početna strana</Link>
       
        {token == null ?   //ako nije ulogovan moze da se uloguje ili registruje
            <>  
                <Link to="/login"  className="navbar-items" >Uloguj se  </Link>
                <Link to="/register"  className="navbar-items" >Registruj se  </Link>
                
             
             
             </> 
             :  //ako jeste ulologovan treba da vidimo da li je admin ili nije admin
             <>  
             
                {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                //admin moze da vidi poruke i da dodaje nove proizvode
                    <> 
                       <Link to="/admin/addProduct"  className="navbar-items" >Dodaj proizvod </Link>
                       <Link to="/admin/poruke"  className="navbar-items" >Poruke </Link>
                    </>
                : //ulogovani korisnici koji nisu admin mogu da vide korpu i da dodaju proizvode
                    <>
                     <Link to="/kupovina"  className="navbar-items" >Kupovina </Link>
                    <Link to="/korpa" className="navbar-items" >
                        <BsCartFill />
                        <p className="cart-num">{cartNum}</p>

                    </Link>
                   
                    </>
                
                //svi korisnici mogu da se odloguju
                }
                 <a href="/" className="navbar-items" onClick={handleLogout}> Odjavi se </a>
                
             </>
              
        }
        
       

 
    </div>
  );
}
export default NavBar;