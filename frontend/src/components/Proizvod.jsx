import React from 'react';
import {BsPlusLg, BsDashLg} from "react-icons/bs"
function Proizvod({product,onAdd,onRemove}) {
  return  (  
    <div className="card">
     
            <div className="card-header" >
                 <img className='card-img-top'  src ={product.image}   /> 
            </div>
            <div className="card-body">
                <div className="tag tag-teal"> {product.category}    </div>  
                
                <h4 className = "naslovKartice">  {product.name}   </h4>
                <p className="opisProizvoda">{product.description}</p>
    
                
                <p className='cenaRegularna'>  {product.price}  </p>   
                <p className='cenaPopust' > <strong>  Cena:      </strong>  {product.price*0.9} </p>
                <h3 className="amount">Kolicina:  {product.amount}</h3>
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
                
            </div> 
        </div>
    );
}

export default Proizvod;
