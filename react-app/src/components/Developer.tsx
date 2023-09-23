import React from "react";
import myPhoto from "../images/MyPhoto.jpg";
import "./Developer.css";

const Developer = () => {
  return (
    <>
      <section className="hero">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-8 txtDev">
            <h1>FrontEnd Web Developer</h1>
            <h2>Hi, I'm Damian Sevilla</h2>
          </div>
          <div className="col-lg-4 imgDev d-flex">
            <img
              src={myPhoto}
              alt="Damian Sevilla's photo"
              className="imgDeveloper"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Developer;
