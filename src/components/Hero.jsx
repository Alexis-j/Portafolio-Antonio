import React from 'react';
import ProfilePic from '../assets/pngwing.com.png';
import '../style/hero.css';
import ContactBtn from './botones/ContactBtn';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="photo-container">
        <img className="hero-photo" src={ProfilePic} alt="logo_cv" loading='lazy' />
      </div>
      <div className="saludo">
        <div className="name">
          <h1>Hi, I am <br/>
          <strong>Tony Tony Chopper</strong></h1>
        </div>
        <h2 className="job-title">Miembro de los piratas <br /> Sombrero de Paja</h2>
        < ContactBtn />
      </div>
    </section>
  );
}

export default Hero;
