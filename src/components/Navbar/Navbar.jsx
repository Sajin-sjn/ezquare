import React, { useState } from 'react';
import './Navbar.css';

const Navigationbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="get-in-touch">Get in Touch</button>
      <div
        className={`menu-icon ${menuOpen ? 'rotated' : ''}`}
        onClick={toggleMenu}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navigationbar;
