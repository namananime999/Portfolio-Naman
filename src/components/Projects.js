import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-section fade-in">
      <h2>My Projects</h2>

      <div className="projects-grid">

        {/* 🖥 Website Project */}
        <div className="project-card">
          <h3>Petrol pump  Website</h3>
          <p>
            A responsive petrol pump website built using React, Tailwind, and Framer Motion. 
            Showcases projects, skills, and contact information.
          </p>
          <a 
            href="https://sapthagiri-enterprise-indianoil.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Website
          </a>
        </div>

      </div>
    </div>
  );
}

export default Projects;
