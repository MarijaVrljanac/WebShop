import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar( ) {
  return (
    <div className="navbar">
        <Link to="/"  className="navbar-items" >Pocetna </Link>
        <Link to="/login"  className="navbar-items" >Uloguj se  </Link>
        <Link to="/register"  className="navbar-items" >Registruj se  </Link>
       
       

 
    </div>
  );
}
export default NavBar;