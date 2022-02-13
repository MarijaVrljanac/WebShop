import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './WelcomePagePageStyle.css';

import {Link} from "react-router-dom";
import axios from 'axios'


const slideImages = [
  'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a438ee76934473.5c7842c0514a2.jpg',
  'https://static.dw.com/image/16749891_303.jpg',
  'https://i.pinimg.com/originals/b4/d6/cd/b4d6cd0151ef783319ea223cd1513e16.jpg'
];

const Slideshow = () => {
 




    return (

      <div>
        <div className='wlcm'><h3>Dobro došli!</h3></div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <Link to="/adresa"><span>Naša prodavnica slatkiša</span></Link>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <Link to="/kupovina" className="ws"><span>Naši slatkiši</span></Link>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <Link to="/giftbox" className="ws"> <span>Gift box</span></Link>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;