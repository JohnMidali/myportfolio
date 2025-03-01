const Lightbox = () => {
  return (
    <div
      id="lightbox"
      tabIndex="-1"
      className="lightbox"
      style={{ display: "none" }}
    >
      <div className="lb-outerContainer">
        <div className="lb-container">
          <img
            className="lb-image"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt=""
          />
          <div className="lb-nav">
            <a
              className="lb-prev"
              aria-label="Previous image"
              href="#"
            ></a>
            <a
              className="lb-next"
              aria-label="Next image"
              href="#"
            ></a>
          </div>
          <div className="lb-loader">
            <a className="lb-cancel"></a>
          </div>
        </div>
      </div>
      <div className="lb-dataContainer">
        <div className="lb-data">
          <div className="lb-details">
            <span className="lb-caption"></span>
            <span className="lb-number"></span>
          </div>
          <div className="lb-closeContainer">
            <a className="lb-close"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
