import React from 'react';
import '../../style/buttons.css';

const GithubBtn = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
  };

  return (
    <button className="link-button mve-right" onClick={handleClick}>
      Github
    </button>
  );
};

export default GithubBtn;
