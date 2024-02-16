import React, { useState } from 'react';
import '../style/navbar.css'
import BurguerButton from './botones/BurguerButton';

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <h2 className='logo'>KAS</h2>

      <nav className={`navbar ${menuVisible ? 'active' : ''}`}>
        <ul className='nav-list'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Services</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
      </nav>

      <BurguerButton onClick={toggleMenu} isOpen={menuVisible} />
    </header>
  );
}

export default Navbar;
