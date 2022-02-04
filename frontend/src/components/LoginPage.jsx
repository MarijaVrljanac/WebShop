import React from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import axios from "axios";
function LoginPage() {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newUserData = userData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newUserData[e.target.name]=e.target.value;
        //console.log(newUserData);//probaj
        setUserData(newUserData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    function handleLogin(e){
        //ovo smo dodali tek nakon axio.post() i nakon e.preventDef. treba da sredimo onaj eror 419 u verifyCRFToken-u (vidi poslednje vezbe)
        e.preventDefault(); // da zaustavi refresovanje na stranici da bi mogla da se izvrsi metoda handleLogin jer metoda onSubmit u formi vec ima neko svoje predefinisano ponasanje

        //za komunikaciju izmedju laravela i reacta cemo koristiti axios
        //moramo da pokrenemo npm install axios i da ga importujemo
        //"http://127.0.0.1:8000/api/login" je ruta na kojoj se ovo nalazi u laravelu
        axios
            .post("http://127.0.0.1:8000/api/login", userData )
            .then((res)=>{ //ako se uspesno izvrsi logovanje uci ce u funkciju (zbog ovog then)
                console.log(res.data);
                if(res.data.success===true){
                    alert("USPESNO"); //srediti da kad se uloguje korisnik da mu se prikaze neka stranica, npr sa proizvodima
                }else{
                    alert("NEUSPESNO");
                }
            });
           

    }
  return (
        <div>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Log in</h2>
                            <form onSubmit={handleLogin} >                          
                                                      
                                <div className="input-group">
                                    <input 
                                        className="input--style-3" 
                                        type="email" 
                                        placeholder="Email" 
                                        name="email"
                                        onInput={handleInput}
                                    />
                                </div>
                                
                                <div className="input-group">
                                    <input className="input--style-3" type="password" placeholder="Password" name="password"  onInput={handleInput}/>
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                                </div>
                                <br/><br/>
                                 
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
        
    );
}

export default LoginPage;
