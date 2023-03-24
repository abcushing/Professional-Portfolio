import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/index";
import Navbar from "../Navbar/index";
import Portfolio from "../Portfolio/index";
import Page from "../Page";

const NavBar = ({ Contact, Portfolio }) => {
  const search = () => {
    setCurrent("Page");
  };
  return (
    <div>
      <Link onClick={() => setCurrent("About")}>
        About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link onClick={() => setCurrent("Portfolio")}>
        Portfolio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <Link onClick={() => setCurrent("Contact")}>
        Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Link>
      <br></br>
      <br></br>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>My routes are not working properly</p>
    </div>
  );
};

export default About;
