import React from "react";
import ProfilePic from "../assets/Tony-Tony-Chopper-PNG-Picture.png";
import "../style/about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container mve-right">
          <h2 className="about-subtitle">Hello!</h2>
          <p className="about-text">
            Hi, I am Tony Tony Chopper,
            el médico intrépido de los Piratas del Sombrero de Paja.
            Con mi pelaje azul y mi sombrero distintivo, me sumerjo en este mundo lleno de samuráis y peligros desconocidos,
            listo para enfrentar cualquier desafío que se interponga en nuestro camino.
            Con mi habilidad médica y mi Fruta del Diablo Zoan, me embarco en esta emocionante odisea, decidido a proteger a mis amigos y a cumplir mi promesa de salvar vidas, sin importar los obstáculos que se presenten.

            <br /><br />
            En Wano, mi valentía y determinación se pondrán a prueba,
            pero estoy listo para demostrar que incluso el más pequeño de los reno puede ser un gran héroe en esta tierra llena de aventuras.
          </p>
      </div>
      <div className="about-photo-container">
        <img
          className="about-photo mve-left"
          src={ProfilePic}
          alt="logo_cv"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default About;
