import React from 'react';
import '../../style/BurguerButton.css';

function BurguerButton({ onClick, isOpen }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={`icon nav-icon-5 ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurguerButton;
