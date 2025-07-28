import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-section fade-in">
      <h2>My Projects</h2>
      
      <div className="projects-grid">

        {/* 🖼 Project 1 */}
        <div className="project-card">
          <img src="/images1/OIP.webp" alt="Project 1" />
          <h3>Webcam Project</h3>
          <p>This is a browser-based webcam app that lets users view live video from their device camera.
Built using HTML, CSS, and JavaScript with the getUserMedia API for real-time video access.</p>
        </div>


      </div>
    </div>
  );
}

export default Projects;
