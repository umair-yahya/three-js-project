// components/Navbar.jsx
import React from 'react';

const Navbar = ({ scrollProgress }) => (
  <>
    <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
    <nav className="floating-nav" aria-label="Primary Navigation">
      <ul>
        <li><a href="#home" tabIndex={0}>Home</a></li>
        <li><a href="#about" tabIndex={0}>About</a></li>
        <li><a href="#services" tabIndex={0}>Services</a></li>
        <li><a href="#portfolio" tabIndex={0}>Portfolio</a></li>
        <li><a href="#contact" tabIndex={0}>Contact</a></li>
      </ul>
    </nav>
  </>
);

export default Navbar;