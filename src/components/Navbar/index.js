import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const pages = props.pages;
  const setCurrentPage = props.setCurrentPage;
  const currentPage = props.currentPage;
  return (
    <nav className="row navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#nav-about">
              My Story
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#nav-examples">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#nav-resume">
              My Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
