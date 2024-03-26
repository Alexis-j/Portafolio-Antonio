import React from 'react';
import ProjectPic1 from '../assets/projects/Projecto Wheater.png';
import DemoBtn from './botones/DemoBtn';
import '../style/exp.css';

function Projects() {
  return (
    <section id="projects" className='projects container'>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-content">
          <img src={ProjectPic1} alt="first_Project" loading='lazy' />
          <div className="project-text">
            <h3>Sunshine Sage</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat officiis pariatur fugit praesentium</p>
            <nav>
              <DemoBtn />
              <DemoBtn />
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
