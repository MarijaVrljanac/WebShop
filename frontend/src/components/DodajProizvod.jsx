import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DodajProizvod = () => {
    const $token="";

    const [productData,setProductData]=useState({
        description:"",
        name:"",
        amount:0,
        price:0,
        category:1,
        image:""
    });
    function handleInput(e){  
        let newProductData = productData;  
        newProductData[e.target.name]=e.target.value;
        console.log(newProductData);
        console.log(e.target.name)
        console.log(e.target.value)
        setProductData(newProductData);  
       
    }
    let navigate = useNavigate();
    function handleAdd(e){
        alert("A");
        
      
        alert("A");
            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/proizvodi", productData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
                .then((res)=>{  
                    console.log(res.data);
                     
                     navigate("/admin");
                })
                .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log(error.response.data);
                      
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }
                
                  });
    }



  return (
    <div className='register'>
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
            <div className="card card-3">
                <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">Dodaj novi proizvod</h2>
                        <form onSubmit={handleAdd}>
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="Name" name="name" required onInput={handleInput}/>
                            </div>
          
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="Description" name="description" required onInput={handleInput}/>
                            </div>
                          
                            <div className="input-group">
                                 <select  className="input--style-3" name="category" id="1" onInput={handleInput}>
                                     
                                    <option  className="input--style-3" value="1" id={1} >Sladoled</option>
                                    <option className="input--style-3" value="2" id={2} >Lizalica</option>
                                    <option className="input--style-3" value="3" id={3} >Bombone</option>
                                     <option className="input--style-3" value="4" id={4} >Torta</option>
                                 </select>
                                    
                            </div>

                        
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="price" name="price" required onInput={handleInput}/>
                            </div>
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="Amount" name="amount "required onInput={handleInput}/>
                            </div>
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="Image link" name="image "required onInput={handleInput}/>
                            </div>
                            <div className="p-t-10">
                                <button className="btn btn--pill btn--green" type="submit" id="register" name="register" >Submit</button>
                            </div>

                            <br/><br/>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DodajProizvod