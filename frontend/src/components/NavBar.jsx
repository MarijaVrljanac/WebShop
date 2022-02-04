import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({cartNum}) {
  return (
    <div className="navbar">
        <Link to="/"  className="navbar-items" >Pocetna </Link>
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