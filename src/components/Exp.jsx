import React from 'react';
import ProjectPic1 from '../assets/projects/Projecto Wheater.png';
import ProjectPic2 from '../assets/projects/Projecto Soozie.png';
import ProjectPic3 from '../assets/projects/Rock&EDM.png';


import GithubBtn from './botones/GithubBtn';
import DemoBtn from './botones/DemoBtn';
import '../style/exp.css';
import '../style/animations.css';

const projectsList = [
  {
    id: 1,
    name: "Sunshine Sage",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat officiis pariatur fugit praesentium",
    imageUrl: ProjectPic1,
    githubLink: "https://github.com/Alexis-j/SunshineSage",
    demoLink: "https://sunshine-sage-web-pronostico-tiempo.netlify.app/"
  },
  {
    id: 2,
    name: "Bienes & Raices",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat officiis pariatur fugit praesentium",
    imageUrl: ProjectPic2,
    githubLink: "https://github.com/Alexis-j/Bienes-Raices",
    demoLink: "https://www.youtube.com/"
  },
  {
    id: 3,
    name: "Festival",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat officiis pariatur fugit praesentium",
    imageUrl: ProjectPic3,
    githubLink: "https://github.com/Alexis-j/FestivalMusica",
    demoLink: "https://clinquant-heliotrope-dcddf9.netlify.app/"
  }
];

function Projects() {
  return (
    <section id="projects" className='projects container'>
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsList.map(project => (
          <div className="project-content" key={project.id}>
            <div className="mve-arriba">
            <img src={project.imageUrl} alt={project.name} loading='lazy' />
            </div>
            <div className="project-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <nav className='nav-btns'>
              <GithubBtn link={project.githubLink} />
              <DemoBtn link={project.demoLink} />
              </nav>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
