import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="mobile-nav">
        <i className="bi bi-x-lg"></i>
        <div className="sidebar">
          <ul>
            <li>
              <a className="" aria-current="page" href="#dev-hero">
                Home
              </a>
            </li>
            <li className="">
              <a className="" href="#about">
                About
              </a>
            </li>
            <li className="">
              <a className="" href="#exp">
                Projects
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
