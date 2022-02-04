import React from 'react';
import './RegisterPageStyle.css';
function RegisterPage() {
  return (
        <div>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Register</h2>
                                <form method="POST">
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Name" name="nameR" required/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthdayR"required/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                    
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="emailR" id="emailR"  required/>
                                    </div>
                                
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phoneR"required/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="password" placeholder="Password" name="passwordR"required/>
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
        
    );
}

export default RegisterPage;
