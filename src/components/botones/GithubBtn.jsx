import React from 'react';
import '../../style/buttons.css';

const GithubBtn = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
  };

  return (
    <button className="github-btn" onClick={handleClick}>
      Github
    </button>
  );
};

export default GithubBtn;
