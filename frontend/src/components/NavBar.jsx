import axios from "axios";
import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
 
function NavBar({cartNum,token}) {

  function handleLogout(){
    var config = {
      method: 'post',
      url: 'api/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token"), 
        
      },
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem("auth_token",null); 
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }



  return (
    <div className="navbar">
      <Link to="/"  className="navbar-items" >Pocetna </Link>
        <Link to="/kupovina"  className="navbar-items" >Kupovina </Link>
        <Link to="/login"  className="navbar-items" >Uloguj se  </Link>
        <Link to="/register"  className="navbar-items" >Registruj se  </Link>
        <Link to="/korpa" className="navbar-items" >
                <BsCartFill />
                <p className="cart-num">{cartNum}</p>

            </Link>
           
              
        
       
        
       

 
    </div>
  );
}
export default NavBar;