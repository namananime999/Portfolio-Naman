import React from 'react';
import './Header.css';
import { FaHome, FaUser, FaCode, FaFolder, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">MyPortfolio</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home"><FaHome /> Home</a></li>
          <li><a href="#about"><FaUser /> About</a></li>
          <li><a href="#skills"><FaCode /> Skills</a></li>
          <li><a href="#projects"><FaFolder /> Projects</a></li>
          <li><a href="#contact"><FaEnvelope /> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
