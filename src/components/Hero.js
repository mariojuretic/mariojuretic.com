import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <div className="content-container">
      <div className="hero__content">
        <h1 className="hero__title">Are you looking for a new website?</h1>
        <h3 className="hero__subtitle">I can build one for you! Check out my work.</h3>
        <Link to="/work" className="hero__button">My work</Link>
      </div>
    </div>
  </section>
);

export default Hero;