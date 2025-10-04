import React, { useState } from "react";
import "./Navbar.css";
import {
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      {/* Hamburger for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={closeMenu}>
            <FaUser className="nav-icon" /> About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            <FaTools className="nav-icon" /> Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            <FaProjectDiagram className="nav-icon" /> Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            <FaEnvelope className="nav-icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
