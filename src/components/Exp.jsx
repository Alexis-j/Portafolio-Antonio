import React from 'react';
import ProjectPic1 from '../assets/projects/Projecto Freelancer.png';
import '../style/exp.css';

function projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-container">
        <img src={ProjectPic1} alt="first_Project" loading='lazy' />
          <div>
            <h2>Project 1</h2>
            <h3>Project Name</h3>
            <p>Project description</p>
          </div>
      </div>
    </section>
    );
}

export default projects;
