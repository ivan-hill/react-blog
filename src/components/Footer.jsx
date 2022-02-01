import React from 'react';

const Footer = () => {

    return (
      <footer>
        <div id="footer-credits">
          <p>Copyright &copy; 2020 by Sheild & Co</p>
        </div>
        <div id="footer-logo">
          <nav className="navbar navbar-expand-lg" id="nav-start">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="media"
            >
              <a className="start-media" href="..">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="start-media" href="..">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="start-media" href="..">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="start-media" href="..">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div style={{ clear: "both" }}></div>
          </nav>
        </div>
      </footer>
    );
}

export default Footer