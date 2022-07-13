import React from 'react';
import downloadResume from '../../../src/img/img_btn_icon.png';
import resume from '../../img/Kowshar_Robin_Resume.pdf';
import './About.css';
const About = () => {
  return (
    <section id="about" className="container section">
      <div className="row">
        <div
          className="col-md-10"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <h2 id="hello_header" className="section__title">
            Hi_
          </h2>
          <p className="section__description pe-lg-5">
            I am Kowshar Robin, a Junior <b>MERN</b> Stack Web developer able to
            build a Web presence from the ground up - from concept, navigation,
            layout and programming to UX. Experienced with a demonstrated
            history of working in the computer software industry. Skilled in
            Front End technologies such as Html5 , Css3 , JavaScript , React ,
            BootStrap, Material UI, Tailwind CSS, Sass, and Back End
            technologies such as Node.JS, Express JS and MongoDb. Learning a
            variety of scripting languages and multimedia tools is one of my
            strengths. I am also a hard worker and team player. I am looking for
            a challenging opportunity that will enable me to use my skills and
            abilities to achieve a challenging goal.
          </p>
          <div>
            <h3>Personal Obsession</h3>
            <div className="fw-bolder d-flex justify-content-start fs-3 my-3 align-items-start">
              <i
                data-toggle="tooltip"
                title="Travelling!"
                class="fas fa-plane  mx-2"
                data-placement="top"
              ></i>
              <i
                data-toggle="tooltip"
                title="Coding!"
                class="fas fa-laptop-code mx-2"
                data-placement="top"
              ></i>
              <i
                data-toggle="tooltip"
                title="Gaming!"
                class="fas fa-gamepad mx-2"
                data-placement="top"
              ></i>
              <i
                data-toggle="tooltip"
                title="Music!"
                class="fas fa-music mx-2"
                data-placement="top"
              ></i>
              <i
                data-toggle="tooltip"
                title="Riding!"
                class="fas fa-bicycle mx-2"
                data-placement="top"
              ></i>
            </div>
          </div>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="section_btn site-btn"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img src={downloadResume} alt="" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
