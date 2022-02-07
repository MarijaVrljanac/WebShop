import React from 'react';
import {BsPlusLg, BsDashLg} from "react-icons/bs"
function Proizvod({product,onAdd,onRemove, inCart}) {


    const stil = { margin: 1 + "em", borderStyle: "dotted" };


  return  (  
    <div className={inCart===1 ? "card" : "card-cart"} style={stil}>
            <div className="card-header" >
                 <img className='card-img-top'  src ={product.image}   /> 
            </div>
            <div className="card-body">
                <div className="tag tag-teal"> {product.category.naziv}    </div>  
                
                <h4 className = "naslovKartice">  {product.name}   </h4>
                <p className="opisProizvoda">{product.description}</p>
    
                
                <p className='cenaRegularna'>  {product.price} RSD </p>   
                <p className='cenaPopust' > <strong>  Cena:      </strong>  {product.price*0.9} RSD</p>
                
                </div>
                {inCart === 1 ? (
        <>
            <button
                  className="btn"
                  onClick={() => onAdd(product.name, product.id)}
                >
                <BsPlusLg />
              </button>
              <button 
                className="btn"
                onClick={() => onRemove(product.name, product.id)}>
                <BsDashLg />
            </button>
        </>
      ) : (
      <h3>Količina: {product.amount}</h3>
      )}
    </div>   
    );
}

export default Proizvod;
