"use client";
import { useState } from "react";

const Main = () => {

  const [recipient, setRecipient] = useState('dreamcode231@gmail.com');
  const [name, setName] = useState('');
  const [sendEmail, setSendEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const content = `name: ${name}\nemail :${sendEmail}\nmessage : ${message}`
        const emailUrl = `mailto:${recipient}?Phone=${encodeURIComponent(Phone)}&body=${encodeURIComponent(content)}`;

        window.location.href = emailUrl;
    };
  return (
    <div className="drake-main">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
            </div>
            <img
              className="me"
              src="./image/me.jpg"
              alt="Me"
              data-xblocker="passed"
              style={{ visibility: "visible" }}
            />
            <h2 className="email">hello@John Midali</h2>
            <h2 className="address">Base in  Drummondville, Canada</h2>
            <p className="copyright">© 2022 John. All Rights Reserved</p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
            <a
              href="##"
              className="theme-btn"
            >
              <i className="fa-solid fa-envelope"></i> Hire Me!
            </a>
          </div>

          <section
            className="hero-section page-section scroll-to-page"
            id="home"
          >
            <div className="custom-container">
              <div className="hero-content content-width">
                <div className="section-header">
                  <h4
                    className="subtitle scroll-animation"
                    data-animation="fade_from_bottom"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <i className="fa-solid fa-home"></i> Introduce
                  </h4>
                  <h1
                    className="scroll-animation"
                    data-animation="fade_from_bottom"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    Say Hi from
                    <span>&nbsp;John, Blockchain Developer</span>
                  </h1>
                </div>
                <p
                  className="scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  I development and code beautifully simple things and i love
                  what i do. Just simple like that!
                </p>
                <a
                  href="#portfolio"
                  className="go-to-project-btn scroll-to scroll-animation"
                  data-animation="rotate_up"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <img
                    src="./image/round-text.png"
                    alt="Rounded Text"
                    data-xblocker="passed"
                    style={{ visibility: "visible" }}
                  />
                  <i className="fa-solid fa-arrow-down"></i>
                </a>

                <div className="facts d-flex">
                  <div
                    className="left scroll-animation"
                    data-animation="fade_from_left"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h1>10+</h1>
                    <p>
                      Years of <br />
                      Experience
                    </p>
                  </div>
                  <div
                    className="right scroll-animation"
                    data-animation="fade_from_right"
                    style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                  >
                    <h1>7+</h1>
                    <p>
                      projects completed on <br />3 countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="about-area page-section scroll-to-page" id="about">
          <div className="custom-container">
            <div className="about-content content-width">
              <div className="section-header">
                <h4
                  className="subtitle scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-user"></i> About
                </h4>
                <h1
                  className="scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  Every great Development begin with an even{" "}
                  <span>better story</span>
                </h1>
              </div>
              <p
                className="scroll-animation"
                data-animation="fade_from_bottom"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                Hi.. I’m John. I’ve been working as a Web and Blockchain
                developer for the past 10+ years. During that time, I’ve built a
                bunch of different web and blockchain like marketplaces, dApp,
                CRM and analytic dashboards. Right after I finished university,
                I landed a gig at a software development company called “Bozz
                software” where I worked for three years. And then, I worked for
                some startup companies like Onteca, Simform on different roles.
                I have tried to think of the projects with a startup CEO’s mind
                as much as possible and brought ideas, and solutions to my past
                clients and companies.
              </p>
            </div>
          </div>
        </section>

        <section
          className="resume-area page-section scroll-to-page"
          id="resume"
        >
          <div className="custom-container">
            <div className="resume-content content-width">
              <div className="section-header">
                <h4
                  className="subtitle scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-briefcase"></i> Resume
                </h4>
                <h1
                  className="scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  Education &amp; <span>Experience</span>
                </h1>
              </div>

              <div className="resume-timeline">
                <div
                  className="item scroll-animation"
                  data-animation="fade_from_right"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <span className="date">2020 - Present</span>
                  <h2>Blockchain Developer</h2>
                  <p>Simform</p>
                  <ul style={{listStyleType:"circle"}}>
                    <li>
                      Worked on the design and development of the 2
                      decentralized applications.
                    </li>
                    <li>
                      Engineered an NFT marketplace utilizing the MERN Stack and
                      Solidity.
                    </li>
                    <li>
                      Developed a dApp for decentralized exchange on Ethereum.
                    </li>
                    <li>
                      Built an integration with a third-party identity
                      verification solution to ensure.
                    </li>
                    <li>
                      Increased testing coverage by 70% using Cypress and Jest.
                    </li>
                    <li>
                      Integrated smart contracts with frontend application.
                    </li>
                  </ul>
                </div>
                <div
                  className="item scroll-animation"
                  data-animation="fade_from_right"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <span className="date">2018 - 2020</span>
                  <h2>Full Stack Developer</h2>
                  <p>Onteca</p>
                  <ul style={{listStyleType:"circle"}}>
                    <li>
                      Implementing a scalable eCommerce web application with 4
                      developers.
                    </li>
                    <li>
                      By building reusable components, reduced development time
                      60 hours.
                    </li>
                    <li>
                      Added new features to a portfolio of over 40 customer
                      applications.
                    </li>
                    <li>
                      Introduced test-driven development (TDD)methodology and
                      proposed leveraging Scrum to shorten release times by 40%
                      and improve code quality by 30%.
                    </li>
                  </ul>
                </div>
                <div
                  className="item scroll-animation"
                  data-animation="fade_from_right"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <span className="date">2016 - 2018</span>
                  <h2>Frontend Developer</h2>
                  <p>Bozz Software</p>
                  <ul style={{listStyleType:"circle"}}>
                    <li>Developed custom E-commerce platform.</li>
                    <li>Created more than 80 landing pages.</li>
                    <li>
                      Designed and developed a scalable, production-ready
                      RESTful API.
                    </li>
                  </ul>
                </div>
                <div
                  className="item scroll-animation"
                  data-animation="fade_from_right"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <span className="date">2012 - 2016</span>
                  <h2>Bachelor Degree of Computer Science</h2>
                  <p>Cambridge of university</p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-area page-section scroll-to-page"
          id="services"
        >
          <div className="custom-container">
            <div className="services-content content-width">
              <div className="section-header">
                <h4
                  className="subtitle scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-stream"></i> Services
                </h4>
                <h1
                  className="scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  My <span>Specializations</span>
                </h1>
              </div>

              <div className="services-items">
                <div
                  className="service-item scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-bezier-curve"></i>
                  <h2>Blockchain development</h2>
                  <p>
                    I have blockchain development using &amp; Solidity and
                    Python.
                  </p>
                  <span className="projects">3 Projects</span>
                </div>
                <div
                  className="service-item scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-code"></i>
                  <h2>Full Stack</h2>
                  <p>I have Full Stack with React, Angular or Node.js</p>
                  <span className="projects">2 Projects</span>
                </div>
                <div
                  className="service-item scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-bezier-curve"></i>
                  <h2>Frontend development</h2>
                  <p>I have development using React, Angular, Vue.</p>
                  <span className="projects">2 Projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="skills-area page-section scroll-to-page"
          id="skills"
        >
          <div className="custom-container">
            <div className="skills-content content-width">
              <div className="section-header">
                <h4
                  className="subtitle scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-shapes"></i> my skills
                </h4>
                <h1
                  className="scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  My <span>Advantages</span>
                </h1>
              </div>

              <div className="row skills text-center">
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_left"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/Blockchain.png" alt="Blockchain" />
                      <h1 className="percent">92%</h1>
                    </div>
                    <p className="name">Blockchain</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/3333.png" alt="Ethereum" />
                      <h1 className="percent">85%</h1>
                    </div>
                    <p className="name">Ethereum</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_top"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/node.png" alt="Node.js" />
                      <h1 className="percent">80%</h1>
                    </div>
                    <p className="name">Node.js</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_right"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/react.png" alt="React" />
                      <h1 className="percent">90%</h1>
                    </div>
                    <p className="name">React</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_left"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/Angular.webp" alt="Angular" />
                      <h1 className="percent">86%</h1>
                    </div>
                    <p className="name">Angular</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/4375161_logo_vuejs_icon.ico" alt="Vue" style={{width: "71px"}}/>
                      <h1 className="percent">70%</h1>
                    </div>
                    <p className="name">Vue</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_left"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/Substrate1.png" alt="Substrate" />
                      <h1 className="percent">92%</h1>
                    </div>
                    <p className="name">Substrate</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/download.webp" alt="JavaScript" style={{width: "71px"}}/>
                      <h1 className="percent">85%</h1>
                    </div>
                    <p className="name">JavaScript</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_top"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/typescript.png" alt="Go" style={{width: "71px",height: "78px"}}/>
                      <h1 className="percent">80%</h1>
                    </div>
                    <p className="name">TypeScript</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_right"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/Mongodb.png" alt="MongoDB" style={{width: "71px"}}/>
                      <h1 className="percent">90%</h1>
                    </div>
                    <p className="name">MongoDB</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_left"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/Tailwind.png" alt="Tailwind CSS" />
                      <h1 className="percent">86%</h1>
                    </div>
                    <p className="name">Tailwind CSS</p>
                  </div>
                </div>
                <div
                  className="col-md-3 scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="skill">
                    <div className="skill-inner">
                      <img src="./image/Solidity.webp" alt="Solidity" />
                      <h1 className="percent">70%</h1>
                    </div>
                    <p className="name">Solidity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="portfolio-area page-section scroll-to-page"
          id="portfolio"
        >
          <div className="custom-container">
            <div className="portfolio-content content-width">
              <div className="section-header">
                <h4
                  className="subtitle scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-grip-vertical"></i> portfolio
                </h4>
                <h1
                  className="scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  Featured <span>Projects</span>
                </h1>
              </div>

              <div className="row portfolio-items">
                <div
                  className="col-md-12 scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="portfolio-item portfolio-full">
                    <div className="portfolio-item-inner">
                      <a
                        href="./image/Blockchain(NFT).jpg"
                        data-lightbox="example-1"
                      >
                        <img
                          src="./image/Blockchain(NFT).jpg"
                          alt="Portfolio"
                          data-xblocker="passed"
                          style={{ visibility: "visible" }}
                        />
                      </a>

                      <ul className="portfolio-categories">
                        <li>
                          <a href="https://www.synesis.one">Mern Stack</a>
                        </li>
                        <li>
                          <a href="https://www.kanon.exchange/">Solidity</a>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      <a href="#">
                        NFT
                      </a>
                    </h2>
                  </div>
                </div>

                <div
                  className="col-md-6 scroll-animation"
                  data-animation="fade_from_left"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="portfolio-item portfolio-half">
                    <div className="portfolio-item-inner">
                      <a
                        href="./image/Full Stack.jpg"
                        data-lightbox="example-1"
                      >
                        <img
                          src="./image/Full Stack.jpg"
                          alt="Portfolio"
                          data-xblocker="passed"
                          style={{ visibility: "visible" }}
                        />
                      </a>

                      <img
                        src="./image/Full Stack.jpg"
                        alt="Portfolio"
                        data-xblocker="passed"
                        style={{ visibility: "visible" }}
                      />

                      <ul className="portfolio-categories">
                        <li>
                          <a href="https://katalysttech.com/">React</a>
                        </li>
                        <li>
                          <a href="https://katalysttech.com/">Node.js</a>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      <a href="https://katalysttech.com/">
                        Full Stack development
                      </a>
                    </h2>
                  </div>
                </div>

                <div
                  className="col-md-6 scroll-animation"
                  data-animation="fade_from_right"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <div className="portfolio-item portfolio-half">
                    <div className="portfolio-item-inner">
                      <a
                        href="./image/Frontend(React).jpg"
                        data-lightbox="example-1"
                      >
                        <img
                          src="./image/Frontend(React).jpg"
                          alt="Portfolio"
                          data-xblocker="passed"
                          style={{ visibility: "visible" }}
                        />
                      </a>

                      <ul className="portfolio-categories">
                        <li>
                          <a href="https://seastore.com.bd/">React</a>
                        </li>
                        <li>
                          <a href="https://seastore.com.bd/">Node.js</a>
                        </li>
                      </ul>
                    </div>
                    <h2>
                      <a href="https://seastore.com.bd/">
                        Frontend development
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact-area page-section scroll-content"
          id="contact"
        >
          <div className="custom-container">
            <div className="contact-content content-width">
              <div className="section-header">
                <h4
                  className="subtitle scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  <i className="fa-solid fa-dollar-sign"></i> contact
                </h4>
                <h1
                  className="scroll-animation"
                  data-animation="fade_from_bottom"
                  style={{ opacity: 1, transform: "translate(0px, 0px)" }}
                >
                  Let's Work <span>Together!</span>
                </h1>
              </div>
              <h3
                className="scroll-animation"
                data-animation="fade_from_bottom"
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                hello@John Midali
              </h3>
              <p id="required-msg">* Marked fields are required to fill.</p>

              <form
                className="contact-form scroll-animation"
                data-animation="fade_from_bottom"
                onSubmit={handleSubmit}
                style={{ opacity: 1, transform: "translate(0px, 0px)" }}
              >
                <div
                  className="alert alert-success messenger-box-contact__msg"
                  style={{ display: "none" }}
                  role="alert"
                >
                  Your message was sent successfully.
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group">
                      <label htmlFor="full-name">
                        full Name <sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <label htmlFor="email">
                        Email <sup>*</sup>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => { setSendEmail(e.target.value) }}
                        placeholder="Your email adress"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <label htmlFor="phone-number">
                        phone <span>(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        onChange={(e)=>{setPhone(e.target.value)}}
                        placeholder="Your number phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-group">
                      <label htmlFor="message">message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Wrire your message here ..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-group submit-btn-wrap">
                      <button
                        className="theme-btn"
                        name="submit"
                        type="submit"
                        id="submit-form"
                      >
                        send message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Main;
