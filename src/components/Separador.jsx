import React from "react";
import "../style/separador.css";
import SeparadorPic from '../assets/chopperHover.jpg';

function separador() {
  return (
    <div className="separador">
      <div className="divider-stripe">
      </div>
      <img
        className="separador-photo"
        src={SeparadorPic}
        alt="separador"
        loading="lazy">
        </img>
        <div className="divider-stripe">
      </div>
    </div>
  );
}

export default separador;
