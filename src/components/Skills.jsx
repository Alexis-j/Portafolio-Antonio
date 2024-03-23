import React from 'react';
import '../style/skills.css';

export default function Skills() {
  return (
    <section id="skills" class="skills">
      <h2 class="title">Skills</h2>
      <div className="skills-container">
        <div class="skills-item">
          <h3>Frontend</h3>
          <p>HTML5, CSS3, Bootstrap, SASS, JavaScript, React</p>
        </div>
        <div class="skills-item">
          <h3>Backend</h3>
          <p>Ruby, Ruby on Rails, PHP</p>
        </div>
        <div class="skills-item">
          <h3>Tools</h3>
          <p>Git, VSCode, Figma, Github</p>
        </div>
      </div>
    </section>
  );
}
