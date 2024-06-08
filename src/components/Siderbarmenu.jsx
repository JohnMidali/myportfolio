"use client";
import { useState, useEffect, useRef } from "react";

const Siderbarmenu = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const sectionRefs = useRef({
    "#home": null,
    "#about": null,
    "#resume": null,
    "#services": null,
    "#skills": null,
    "#portfolio": null,
    "#contact": null,
  });

  useEffect(() => {
    // Set the section refs
    sectionRefs.current = {
      "#home": document.getElementById("home"),
      "#about": document.getElementById("about"),
      "#resume": document.getElementById("resume"),
      "#services": document.getElementById("services"),
      "#skills": document.getElementById("skills"),
      "#portfolio": document.getElementById("portfolio"),
      "#contact": document.getElementById("contact"),
    };
  }, []);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);
    sectionRefs.current[link]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="responsive-sidebar-menu">
      <div className="overlay"></div>
      <div className="sidebar-menu-inner">
        <div className="menu-wrap">
          <p>Menu</p>
          <ul className="menu scroll-nav-responsive d-flex">
            <li>
              <a
                className={`scroll-to ${
                  activeLink === "#home" ? "active" : ""
                }`}
                href="#home"
                onClick={(event) => handleLinkClick(event, "#home")}
              >
                <i className="fa-solid fa-house"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a
                className={`scroll-to ${
                  activeLink === "#about" ? "active" : ""
                }`}
                href="#about"
                onClick={(event) => handleLinkClick(event, "#about")}
              >
                <i className="fa-solid fa-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a
                className={`scroll-to ${
                  activeLink === "#resume" ? "active" : ""
                }`}
                href="#resume"
                onClick={(event) => handleLinkClick(event, "#resume")}
              >
                <i className="fa-solid fa-book"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a
                className={`scroll-to ${
                  activeLink === "#services" ? "active" : ""
                }`}
                href="#services"
                onClick={(event) => handleLinkClick(event, "#services")}
              >
                <i className="fa-brands fa-servicestack"></i>{" "}
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                className={`scroll-to ${
                  activeLink === "#skills" ? "active" : ""
                }`}
                href="#skills"
                onClick={(event) => handleLinkClick(event, "#skills")}
              >
                <i className="fa-solid fa-shapes"></i> <span>Skills</span>
              </a>
            </li>
            <li>
              <a
                className={`scroll-to ${
                  activeLink === "#portfolio" ? "active" : ""
                }`}
                href="#portfolio"
                onClick={(event) => handleLinkClick(event, "#portfolio")}
              >
                <i className="fa-solid fa-grip-vertical"></i>{" "}
                <span>Portfolios</span>
              </a>
            </li>
            <li>
              <a
                className={`scroll-to ${
                  activeLink === "#contact" ? "active" : ""
                }`}
                href="#contact"
                onClick={(event) => handleLinkClick(event, "#contact")}
              >
                <i className="fa-solid fa-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="sidebar-social">
          <p>Social</p>
          <ul className="social-links d-flex align-items-center">
            <li>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Siderbarmenu;
