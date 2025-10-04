import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-list">
        <div className="skill-card">💻 HTML</div>
        <div className="skill-card">🎨 CSS</div>
        <div className="skill-card">⚛️ React</div>
        <div className="skill-card">📜 JavaScript</div>
        <div className="skill-card">🎬 Video Editing</div>
        <div className="skill-card">🖼️ Photo Editing</div>
      </div>
    </div>
  );
}

export default Skills;
