"use client";
import { useState, useEffect, useRef } from 'react';

const Menuscroll = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const sectionRefs = useRef({
    '#home': null,
    '#about': null,
    '#resume': null,
    '#services': null,
    '#skills': null,
    '#portfolio': null,
    '#contact': null,
  });

  useEffect(() => {
    // Set the section refs
    sectionRefs.current = {
      '#home': document.getElementById('home'),
      '#about': document.getElementById('about'),
      '#resume': document.getElementById('resume'),
      '#services': document.getElementById('services'),
      '#skills': document.getElementById('skills'),
      '#portfolio': document.getElementById('portfolio'),
      '#contact': document.getElementById('contact'),
    };
  }, []);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);
    sectionRefs.current[link]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className="menu scroll-nav d-flex">
      <li>
        <a
          className={`scroll-to ${activeLink === '#home' ? 'active' : ''}`}
          href="#home"
          onClick={(event) => handleLinkClick(event, '#home')}
        >
          <span>Home</span> <i className="fa-solid fa-home"></i>
        </a>
      </li>
      <li>
        <a
          className={`scroll-to ${activeLink === '#about' ? 'active' : ''}`}
          href="#about"
          onClick={(event) => handleLinkClick(event, '#about')}
        >
          <span>About</span> <i className="fa-solid fa-user"></i>
        </a>
      </li>
      <li>
        <a
          className={`scroll-to ${activeLink === '#resume' ? 'active' : ''}`}
          href="#resume"
          onClick={(event) => handleLinkClick(event, '#resume')}
        >
          <span>Resume</span> <i className="fa-solid fa-book"></i>
        </a>
      </li>
      <li>
        <a
          className={`scroll-to ${activeLink === '#services' ? 'active' : ''}`}
          href="#services"
          onClick={(event) => handleLinkClick(event, '#services')}
        >
          <span>Services</span> <i className="fa-solid fa-servicestack"></i>
        </a>
      </li>
      <li>
        <a
          className={`scroll-to ${activeLink === '#skills' ? 'active' : ''}`}
          href="#skills"
          onClick={(event) => handleLinkClick(event, '#skills')}
        >
          <span>Skills</span> <i className="fa-solid fa-shapes"></i>
        </a>
      </li>
      <li>
        <a
          className={`scroll-to ${activeLink === '#portfolio' ? 'active' : ''}`}
          href="#portfolio"
          onClick={(event) => handleLinkClick(event, '#portfolio')}
        >
          <span>Portfolios</span> <i className="fa-solid fa-grip-vertical"></i>
        </a>
      </li>
      <li>
        <a
          className={`scroll-to ${activeLink === '#contact' ? 'active' : ''}`}
          href="#contact"
          onClick={(event) => handleLinkClick(event, '#contact')}
        >
          <span>Contact</span> <i className="fa-solid fa-envelope"></i>
        </a>
      </li>
    </ul>
  );
};

export default Menuscroll;