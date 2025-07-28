import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section fade-in">
      <h2>About Me</h2>
      
      <img src="/images1/profile.jpg" alt="My Profile" className="about-img" />

      <p>
        I’m a Computer Science student with a deep interest in technology, creativity, and learning. I enjoy building
        websites and exploring how things work behind the scenes. Alongside coding, I have a passion for video and photo
        editing. I love turning raw content into engaging visuals. I’m always learning and trying new tools—from front-end
        frameworks like React to editing software like Premiere Pro and Photoshop. My goal is to combine both technical and
        creative skills in meaningful projects.
      </p>
    </div>
  );
}

export default About;
