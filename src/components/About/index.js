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
      <br></br>
      <div class="container text-center" id="nav-about">
        <div class="row">
          {/* <div className="col"></div> */}
          <div className="card -self-center">
            <div className="card-body">
              {/* <div className="col-6"> */}
              <h1>My Portfolio</h1>
              <img
                src="./photos/Alex_CollegeGradPhoto_2015_005.jpg"
                alt="Alex Cushing"
                width={300}
              ></img>
              <br></br>
              <br></br>
              <p>
                Welcome to my site! My name is Alex Cushing. I recently
                graduated a Fullstack Coding Bootcamp program through The
                University of Denver. The program had a focus on Javascript,
                HTML, CSS, MySQL, MongoDB, React.js, as well as general Computer
                Science concepts. Before this program, I had been working as an
                IT Help Desk Technician.
                <br></br>
                <a href="./pdf/Resume3-24-23-1pg.pdf" target="_blank">
                  My Resume
                </a>
              </p>
              {/* link to pdf bootcamp badges */}
            </div>
            <div class="col"></div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
