const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      
      <img
        className="me"
        src="./image/me.jpg"
        alt="Me"
        data-xblocker="passed"
        style={{visibility: "visible"}}
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
        <i className="fa-solid fa--envelope"></i> Hire Me!
      </a>
    </div>
  );
};

export default LeftSidebar;
