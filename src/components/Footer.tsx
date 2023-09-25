import React from "react";
import MediaIcons from "./MediaIcons";

const Footer = () => {
  return (
    <>
      <section className="section-pair">
        <div className="container">
          <footer className="d-flex flex-wrap align-items-center py-3 my-4 flex-column">
            <MediaIcons></MediaIcons>
            <div className="d-flex flex-wrap w-100 justify-content-between align-items-center py-3 my-4 border-top">
              <p className="col-md-4 mb-0 text-body-secondary">
                © 2023 Company, Inc
              </p>

              <a
                href="/"
                className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              >
                <svg className="bi me-2" width="40" height="32"></svg>
              </a>

              <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-body-secondary">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-body-secondary">
                    Proyects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 text-body-secondary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;
