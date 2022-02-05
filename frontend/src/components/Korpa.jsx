import Proizvod from "./Proizvod";
import React from "react";

const Korpa = ({products, sumPrice}) => {
    return (
      <div className="cart-container">
          <div className="korpaDiv"><h3>Vaša korpa:</h3></div>
          
          {products.map((prod)=> (
            <Proizvod product={prod} key={prod.id} inCart={0}/>
          ))}


      <div className="cenaDiv"><h3>Ukupna cena proizvoda: {sumPrice} RSD</h3>
          </div>
      </div>

      
    );
  };

export default Korpa;