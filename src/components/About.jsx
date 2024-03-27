import React from "react";
import ProfilePic from "../assets/about_me.jpg";
import "../style/about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container container">
          <h2 className="about-subtitle">Hello!</h2>
          <p className="about-text">
            Hi, I am Tony Tony Chopper,
            I’m 26 years old and I’m a designer.
            The creation of different media and creative,
            functional design are my passion.
            <br /><br />
            Finding inspiration around every corner,
            constantly changing perspectives,
            getting creative ideas, bringing design closer to others,
            rethinking every project, questioning the function of a design and creating things in exchange that would not have been possible on our own,
            inspire me for my job.
          </p>
      </div>
      <div className="about-photo-container">
        <img
          className="about-photo"
          src={ProfilePic}
          alt="logo_cv"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default About;
