import React from 'react';
import logo from '../../../img/KowsharRobinLogo.png';
import './Navagation.css';

const Navagation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid container">
        <a
          className="navbar-brand"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kawsar-robin/"
        >
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonials">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navagation;
