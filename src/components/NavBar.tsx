import React, { Component } from "react";
import logo from "../images/logo.png";
import "./NavBar.css";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Web page logo" height="50" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-toggler"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse flex-grow-0"
              id="navbar-toggler"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
