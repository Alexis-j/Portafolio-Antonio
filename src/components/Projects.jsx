import React, { useState, useEffect } from 'react';
import { checkVisibility } from '../components/ScrollUtils';

import ProjectPic1 from '../assets/projects/Projecto Wheater.png';
import ProjectPic2 from '../assets/projects/Projecto Soozie.png';
import ProjectPic3 from '../assets/projects/Rock&EDM.png';

import GithubBtn from './botones/GithubBtn';
import DemoBtn from './botones/DemoBtn';
import '../style/projects.css';
import '../style/btns/animations.css';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility("projects", setIsVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className='projects'>
      <h2 className={`fadeIn ${isVisible ? "mve-arriba" : ""}`}>Projects</h2>
      <div className="projects-container">
        {projectsList.map(project => (
          <div className="project-content" key={project.id}>
            <div className={`mve ${isVisible ? "mve-arriba" : ""}`}>
              <img src={project.imageUrl} alt={project.name} loading='lazy' />
            </div>
            <div className="project-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <nav className='nav-btns'>
                <GithubBtn link={project.githubLink} />
                <DemoBtn className={`mve ${isVisible ? "mve-left" : ""}`} link={project.demoLink} />
              </nav>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
