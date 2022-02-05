import React, { useState } from "react";
import Proizvod from './Proizvod';
 
const Proizvodi = ({ products, onAdd,onRemove }) => {
  const [sort, setSort] = useState(true);
  function sortAsc(){
    
    setSort(true);
  }
  function sortDesc(){
    
    setSort(false);
  }
  return (
    <div className="proizvodi">
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
    
<<<<<<< HEAD
                      <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1}/>
=======
                      <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1} />
>>>>>>> 0f5f9df99029b8d37430aa7d7e7268a8554f07ae
                  
             ))}
                </>

              ):(
                <>
                   {products
                  .sort((a, b) => a.price < b.price ?  1 : -1)
                  .map((p) => (
    
<<<<<<< HEAD
                      <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1} />
=======
                      <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1}  />
>>>>>>> 0f5f9df99029b8d37430aa7d7e7268a8554f07ae
                  
                  ))}
                </>
              )}




             

        </div>
    </div>
  );
    
}

export default Proizvodi;
