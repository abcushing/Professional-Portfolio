import React from "react";
// import { Link } from "react-router-dom";
// import Contact from "../Contact/index";
// import Navbar from "../Navbar/index";
// import Portfolio from "../Portfolio/index";
// import Page from "../Page";
// // import Alex_CollegeGradPhoto_2015_005 from "./public/photos/Alex_CollegeGradPhoto_2015_005.jpg";

const About = () => {
  return (
    <div>
      <div class="container text-center" id="nav-about">
        <div class="row">
          <div className="col"></div>
          <div className="col-6">
            <h1>My Portfolio</h1>
            Alex Cushing
            <p>headshot here</p>
            <img
              src="./photos/Alex_CollegeGradPhoto_2015_005.jpg"
              alt="Alex Cushing"
              width={250}
            ></img>
            <p>
              blurb hi im a human who recently finished a coding bootcamp
              through Denver University's online program. Definatly not two kids
              in a chatbot GPT trenchcoat
              <a href="./pdf/Resume3-24-23.pdf" target="_blank">
                my resume here here
              </a>
            </p>
            {/* link to pdf bootcamp badges */}
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
