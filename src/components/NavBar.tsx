import React, { Component } from "react";
import logo from "../images/logo.png";
import "./NavBar.css";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar-1">
          <div className="nav-container">
            <a className="" href="#dev-hero">
              <img src={logo} alt="Web page logo" height="50" />
            </a>
            <ul className="nav-items">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#dev-hero"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#exp">
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
        </nav>
      </>
    );
  }
}

export default NavBar;
