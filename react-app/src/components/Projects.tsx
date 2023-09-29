import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <section className="projects section-odd" id="exp">
        <h3 className="title">PROYECTS</h3>
        <div className="container text-center">
          <div className="row proj-content">
            <div className="column col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="projects-title">Web Development</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pulvinar lectus eget quam ultricies consectetur. Nullam sit amet
                pretium orci, ac viverra ante.
              </p>
              <div className="badges-container">
                <span className="badge text-bg-primary">HTML</span>
                <span className="badge text-bg-primary">CSS</span>
                <span className="badge text-bg-primary">JS</span>
                <span className="badge text-bg-primary">REACT</span>
              </div>
            </div>
            <div className="column col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="projects-title">Articles</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pulvinar lectus eget quam ultricies consectetur. Nullam sit amet
                pretium orci, ac viverra ante.
              </p>
              <div className="badges-container">
                <span className="badge text-bg-primary">HTML</span>
                <span className="badge text-bg-primary">CSS</span>
                <span className="badge text-bg-primary">JS</span>
                <span className="badge text-bg-primary">REACT</span>
              </div>
            </div>
            <div className="column col-12 col-md-4">
              <i className="bi bi-laptop"></i>
              <p className="projects-title">Studies</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pulvinar lectus eget quam ultricies consectetur. Nullam sit amet
                pretium orci, ac viverra ante.
              </p>
              <div className="badges-container">
                <span className="badge text-bg-primary">HTML</span>
                <span className="badge text-bg-primary">CSS</span>
                <span className="badge text-bg-primary">JS</span>
                <span className="badge text-bg-primary">REACT</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
