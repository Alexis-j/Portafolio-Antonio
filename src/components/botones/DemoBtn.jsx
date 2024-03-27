import React from 'react';
import '../../style/buttons.css';

const DemoBtn = ({ link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button className="link-button" onClick={handleClick}>
      Demo
    </button>
  );
};

export default DemoBtn;
