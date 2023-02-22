import Proizvod from "./Proizvod";
import React, { useState } from "react";
import Korpastyle from "./Korpastyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Korpa = ({ products, sum, cartNum }) => {
 

  return (
    <div className="cart-container">
      <div className="korpaDiv">
        <h3>Vaša korpa:</h3>
      </div>

      {products.map((prod) => (
        <Proizvod product={prod} key={prod.id} inCart={0} />
      ))}

      <div className="cenaDiv">
        <h3>Ukupna cena proizvoda: {sum} RSD</h3>
        <button className="nastavibtn" >
          Nastavi sa kupovinom
        </button>
      </div>
    </div>
  );
};

export default Korpa;
