import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/index";
import Navbar from "../Navbar/index";
import Portfolio from "../Portfolio/index";
import Page from "../Page";
// import Alex_CollegeGradPhoto_2015_005 from "./public/photos/Alex_CollegeGradPhoto_2015_005.jpg";

const About = () => {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
            <h1>About</h1>
            Alex Cushing
            <p>headshot here</p>
            {/* <img src={Alex_CollegeGradPhoto_2015_005.jpg}>
              Alex_CollegeGradPhoto_2015_005
            </img> */}
            <p>
              blurb hi im a human who recently finished a coding bootcamp
              through denver university's online program. Definatly not two kids
              in a chatbot GPT suit
            </p>
            {/* link to pdf bootcamp badges */}
          </div>
          <div class="col"></div>
        </div>
      </div>

      <button type="button" class="btn btn-primary"></button>
    </div>
  );
};

export default About;
