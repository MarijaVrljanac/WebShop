import React, { useState } from "react";
import Proizvod from './Proizvod';
 
const Proizvodi = ({ products, onAdd,onRemove, sumPrice }) => {
  const [sort, setSort] = useState(true);
  function sortAsc(){
    
    setSort(true);
  }
  function sortDesc(){
    
    setSort(false);
  }
  return (
    <div>
      <h2 className="caption">Naša ponuda</h2>
      <div className="buttons">
        <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
      </div>
        <div className="all-products">
              {sort === true ? (
                <>
                {products
                  .sort((a, b) => a.price < b.price ? -1 : 1)
                  .map((p) => (
    
                      <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1} sumPrice={sumPrice}/>
                  
             ))}
                </>

              ):(
                <>
                   {products
                  .sort((a, b) => a.price < b.price ?  1 : -1)
                  .map((p) => (
    
                      <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1} sumPrice={sumPrice} />
                  
                  ))}
                </>
              )}




             

        </div>
    </div>
  );
    
}

export default Proizvodi;
