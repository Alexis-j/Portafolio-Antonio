import React from 'react';
import 'devicon';
import '../style/skills.css'; // Asegúrate de que esta ruta sea correcta y apunte al archivo de estilos de tus habilidades

export default function Skills() {
  return (
    <section id="skills" className='skills'>
      <h2 className="title">Skills</h2>
      <div className="skills-container container">
        <div className="skills-item">
          <h3 className='skills-titulo'>Frontend</h3>
          <p className='devicon'>
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            {/* <i className="devicon-sass-original colored"></i> */}
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
          </p>
        </div>
        <div className="skills-item">
          <h3 className='skills-titulo'>Backend</h3>
          <p className='devicon'>
            <i className="devicon-ruby-plain colored"></i>
            <i className="devicon-rails-plain colored"></i>
            <i className="devicon-php-plain colored" style={{fontSize:"75px"}}></i>
          </p>
        </div>
        <div className="skills-item">
          <h3 className='skills-titulo'>Tools</h3>
          <p className='devicon'>
            <i className="devicon-git-plain colored"></i>
            <i className="devicon-visualstudio-plain colored"></i>
            <i className="devicon-figma-plain colored"></i>
            <i className="devicon-github-original colored"></i>
            <i className="devicon-mysql-plain-wordmark colored"></i>
          </p>
        </div>
      </div>
    </section>
  );
}
