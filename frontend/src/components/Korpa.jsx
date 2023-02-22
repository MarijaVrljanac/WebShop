import Proizvod from "./Proizvod";
import React, { useState } from "react";
import Korpastyle from "./Korpastyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Korpa = ({ products, sum, cartNum, user_id, korpa_id }) => {

  const [data, setData] = useState({
    sum:0.0, cartNum:0, user_id:0, korpa_id:0
  });

  let navigate = useNavigate();

  function handleSend(e) {
    e.preventDefault();
    setData(sum, cartNum, user_id, korpa_id );

    axios
      .post("http://127.0.0.1:8000/api/kupi", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.success);
        if (res.data.success === true) {
          console.log(res);
          navigate("/");
        
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.error(error.response.data));
  }
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
        <button className="nastavibtn" onClick={handleSend}>Nastavi sa kupovinom</button>
      </div>
    </div>
  );
};

export default Korpa;
