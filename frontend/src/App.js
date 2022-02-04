 
 
 import React   from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Footer from './components/Footer';
 
 
import './App.css';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Proizvodi from './components/Proizvodi';

function App() {
  
  return (
    <>
    <BrowserRouter className="App">
    <NavBar></NavBar>
      
      <Routes>
        <Route   path="/"  element={<Proizvodi />}/>
        <Route   path="/register"  element={<RegisterPage />}/>
        <Route   path="/login"  element={<LoginPage />}/>

        
         
          
      </Routes>
      <Footer></Footer>
  </BrowserRouter>
     
    </>
  );
}

export default App;
