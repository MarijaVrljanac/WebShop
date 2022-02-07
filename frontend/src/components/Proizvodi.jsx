import React, { useState } from "react";
import Proizvod from './Proizvod';
import {BsSearch} from "react-icons/bs"
 
const Proizvodi = ({ products, onAdd,onRemove }) => {
  const [sort, setSort] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  

  function sortAsc(){
    
    setSort(true);
  }
  function sortDesc(){
    
    setSort(false);
  }
  function handleInput(e){
       setSearchTerm(e.target.value);
       console.log(e.target.value);
  }
  





  return (
     <div>
    <div className="proizvodi">
      <h2 className="caption">Naša ponuda</h2>
      <div className="buttons">
        <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
        <input type="text" placeholder='Pretraga...' onChange={handleInput}></input>  <BsSearch />
         
               
               
      </div>
        
        <div className="all-products">
            {sort === true  ? (
                <>

                  
                {searchTerm==' ' ? (  
                    <>
                   {products
                      .sort((a, b) => a.price < b.price ? -1 : 1)
                      .map((p) => (
        
                          <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1}/>
                      
                     ))}
                     </>
                ):(  
                  <>
                  {products
                     .sort((a, b) => a.price < b.price ? -1 : 1)
                     .filter(p=>p.name.includes(searchTerm))
                     .map((p) => (
       
                         <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1}/>
                     
                    ))}
                    </>
                )}
                
                </>

              ):(
                <>

                  
                {searchTerm==' ' ? (  
                    <>
                   {products
                      .sort((a, b) => a.price < b.price ? -1 : 1)
                      .map((p) => (
        
                          <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1}/>
                      
                     ))}
                     </>
                ):(   
                  <>
                  {products
                     .sort((a, b) => a.price < b.price ?  1 : -1)
                     .filter(p=>p.name.includes(searchTerm))
                     .map((p) => (
       
                         <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1}/>
                     
                    ))}
                    </>
                )}
                
                </>
              )}








              {searchTerm === ' ' ? ( //ne radimo pretragu jer nije korisnik nista uneo
                <>
                  
                </>

              ):(
                <>
                   {products
                  . filter(p=>p.name.includes(searchTerm)).map((p) => (
    
                      <Proizvod product={p} key={p.id} onAdd={onAdd} onRemove={onRemove} inCart={1} />
                  
                  ))}
                </>
              )}

            


             

        </div>
    </div>
    </div>
  );
    
}

export default Proizvodi;
