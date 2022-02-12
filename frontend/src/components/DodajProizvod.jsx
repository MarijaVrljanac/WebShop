import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DodajProizvod = () => {


    const [userData,setUserData]=useState({
        email:"",
        name:"",
        phone:"",
        birthdate:"",
        password:""
    });
    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newUserData = userData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData);
        //console.log(newUserData);//probaj
        setUserData(newUserData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    let navigate = useNavigate();
    function handleAdd(e){
             
            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/register", userData )
                .then((res)=>{  
                    console.log(res.data);
                     //nakonn sto se registruje da ga posaljemo na stranicu za login
                     navigate("/login");
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
                                 <select  className="input--style-3" name="sladoled" id="1">
                                     
                                    <option  className="input--style-3" value="sladoled" id={1} >Sladoled</option>
                                    <option className="input--style-3" value="lizalica" id={2} >Lizalica</option>
                                    <option className="input--style-3" value="bombone" id={3} >Bombone</option>
                                     <option className="input--style-3" value="torta" id={4} >Torta</option>
                                 </select>
                                    
                            </div>

                        
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="price" name="price" required onInput={handleInput}/>
                            </div>
                            <div className="input-group">
                                <input className="input--style-3" type="text" placeholder="Amount" name="amount "required onInput={handleInput}/>
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