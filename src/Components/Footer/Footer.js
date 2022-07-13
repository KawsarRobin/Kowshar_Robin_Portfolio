import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { Typewriter } from 'react-simple-typewriter';
import './Footer.css';
const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_et104hn',
        'template_iiqgynr',
        form.current,
        'user_5CAKtxWfzxsDcMBBzQmPk'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };
  return (
    <div className="background">
      <ScrollToTop smooth color="#6f00ff" />
      <div id="contact" className="container section">
        <div className="row">
          <div className="col-md-12">
            <p id="contacts_header" className="section__title">
              <Typewriter
                words={[
                  'Say Hi 👋',
                  'Get in touch now 🤗',
                  "Let's have a cup of tea ☕️",
                ]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </p>
          </div>
        </div>
        <div className="row contacts">
          <div className="col-md-3 col-lg-4">
            <div className="contacts__list">
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd>
                  <a href="tel:82344563333">(+880) 1610-989-169</a>
                </dd>
                <dt>Skype:</dt>
                <dd>
                  <a href="skype:live:KowsharRobin">live:KowsharRobin</a>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <a href="mailto:kowsharrobin@gmail.com">
                    kowsharrobin@gmail.com
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="contacts__form">
              <p className="contacts__form-title">
                Or just write me a letter here_
              </p>
              <form className="js-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    className="form-field js-field-name"
                    type="text"
                    placeholder="Your name"
                    required
                    name="name"
                    id="validationCustom01"
                  />
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="form-field js-field-email"
                    type="email"
                    placeholder="Your e-mail"
                    required
                    name="email"
                    id="validationCustom03"
                  />
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="form-field js-field-email"
                    type="text"
                    placeholder="Subject"
                    required
                    name="subject"
                    id="validationCustom03"
                  />
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-field js-field-message"
                    placeholder="Type the message here"
                    required
                    name="message"
                    id="validationCustom04"
                  ></textarea>
                  <span className="form-validation"></span>
                  <span className="form-invalid-icon">
                    <i className="mdi mdi-close" aria-hidden="true"></i>
                  </span>
                </div>
                <button
                  className="site-btn site-btn--form"
                  type="submit"
                  value="Send"
                >
                  <i class="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="contacts__social col-md-3 pt-4 pt-md-0">
            <ul>
              <li>
                <a
                  href="https://github.com/KawsarRobin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kawsar-robin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin-square"></i> Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/KawsarRobinn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook-square"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kawsarrobinn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer ps-md-5 ms-md-5 mt-5">
            <p>&copy; 2021 Kowshar Robin. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
