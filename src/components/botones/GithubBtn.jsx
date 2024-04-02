import React, { useState, useEffect } from "react";
import { checkVisibility } from "../ScrollUtils";

import '../../style/btns/buttons.css';

const GithubBtn = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility("projects", setIsVisible); // Cambiado a "projects"
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <button className={`link-button ${isVisible ? "mve-right" : ""}`}  onClick={handleClick}>
      Github
    </button>
  );
};

export default GithubBtn;
