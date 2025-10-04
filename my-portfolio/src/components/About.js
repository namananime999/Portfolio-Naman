import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section fade-in">
      <h2>About Me</h2>
      
      <img 
        src={process.env.PUBLIC_URL + "/images1/naman.jpg"} 
        alt="My Profile" 
        className="about-img" 
      />

      <p>
        I am a Computer Science student and a Web Developer. 
        I’m passionate about coding, building projects, and constantly improving my skills. 
        I enjoy exploring new technologies and working on creative ideas. 
        Apart from coding, I’m also interested in learning new tools and gaining knowledge in different fields.
      </p>
    </div>
  );
}

export default About;
