import React from "react";
import Navbar from "./Navbar"; // import the Navbar component
import "./Header.css"; // header-specific styles

function Header() {
  return (
    <header className="header">
      {/* Navbar sits at the top */}
      <Navbar />

      {/* Hero / Intro Section */}
      <div className="header-card">
        <h1 className="header-title">Hi, I’m Naman 👋</h1>
        <p className="header-subtitle">
          A passionate Computer Science and Engg student exploring{" "}
          <span>Web Development</span>, <span>React</span>, and{" "}
          <span>Spring Boot</span>.
        </p>
        <a href="#projects" className="header-button">
          View My Work
        </a>
      </div>
    </header>
  );
}

export default Header;
