import React from "react";

const Portfolio = () => {
  return (
    <div class="container text-center" id="nav-examples">
      <br></br>
      <div class="row g-0">
        <div class="col"></div>
        <div class="col-8">
          <h2>Examples of my Work</h2>
          <p>
            (in chronological order)
            {/* screenshots in public/screenshots */}
          </p>
          <div className="card -self-center">
            <div className="card-body">
              {" "}
              <h4>Project: Porfolio Demo</h4>
              <p>
                This was my second project I created, a demo portfolio. this
                simple, sample site was good practice to get the basics of CSS
                and HTML
              </p>
              <a
                href="https://github.com/abcushing/challange-002"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio Demo on Github
              </a>{" "}
              <br></br>
              <a
                href="https://abcushing.github.io/challange-002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out my Portfolio Demo here
              </a>
              {/* <p>screenshot01 here</p> */}
              {/* https://github.com/abcushing/challange-002 project 2*/}
              <img
                src="./screenshots/project2.jpg"
                alt="demo profile"
                width="100%"
              ></img>
            </div>{" "}
          </div>
          <br></br>
          <br></br>
          <div className="card -self-center">
            <div className="card-body">
              <h4>Project: Weather App</h4>
              <p>
                This was the sixth project I created. It is a simple weather app
                that uses a server-side API to find the weather for any given
                area. Includes 5 day forcast and weather icons{" "}
              </p>
              <a
                href="https://github.com/abcushing/Challange006-WeatherApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weather App on Github
              </a>
              <br></br>
              <a
                href="https://abcushing.github.io/Challange006-WeatherApp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out my Weather App here
              </a>
              {/* weather app screenshot here */}
              {/* https://github.com/abcushing/Challange006-WeatherApp project 6*/}
              <img
                src="./screenshots/project6.jpg"
                alt="weather app"
                width="100%"
              ></img>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="card -self-center">
            <div className="card-body">
              <h4>Project: Readme Generator</h4>
              <p>
                This was the ninth project I created. It is a Readme
                Generator;it dynamically creates a ReadMe based on the input
                provided using Node.js (I have a link to a demo video below){" "}
              </p>
              <a
                href="https://github.com/abcushing/Challange09-ReadMe"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReadMe Generator on Github
              </a>
              <br></br>
              <a
                href="https://drive.google.com/file/d/1tlrGFTrhIsRHE9VFiQDyuXY3aIPwbdhQ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReadMe Generator Demo
              </a>
              {/* https://github.com/abcushing/Challange09-ReadMe project 9, demo video is an unlisted yt link in the readme*/}
              <img
                src="./screenshots/project9.jpg"
                alt="readme generator"
                width="100%"
              ></img>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="card -self-center">
            <div className="card-body">
              <h4>Project: Employee Tracker</h4>
              <p>
                This was the twelfth project I worked on. It is a command line
                application that can be used as an employee database. This
                control managment system was built using Node.js, Inquirer, and
                MySQL (I have a link to a demo video below){" "}
              </p>
              <a
                href="https://github.com/abcushing/Employee-Tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Employee Tracker on Github
              </a>
              <br></br>
              <a
                href="https://drive.google.com/file/d/1H_yXltCKPAEQ9Npvmb7TC-r8C_1agmMR/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Employee Tracker Demo
              </a>
              {/* https://github.com/abcushing/Employee-Tracker project 12*/}
              <img
                src="./screenshots/project12.jpg"
                alt="employee tracker"
                width="100%"
              ></img>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="card -self-center">
            <div className="card-body">
              <h4>Project: E-Commerce-Back-End</h4>
              <p>
                This was the thirteenth project I worked on. It is the backend
                of an e-commerce site. I had to use an Express.js API and
                configure it to work with a MySQL database. Sequelize can be
                used with to interact with the database.(I have a link to a demo
                video below)
              </p>
              <a
                href="https://github.com/abcushing/E-commerce-Back-End"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-Commerce-Back-End on Github
              </a>
              <br></br>
              <a
                href="https://drive.google.com/file/d/1ZE5cWbae9I85anBmkoRT0F1mk0SHcp39/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-Commerce-Back-End Demo
              </a>
              {/* https://github.com/abcushing/E-commerce-Back-End project 13*/}
              <img
                src="./screenshots/project13.jpg"
                alt="E-commerce-back-end"
                width="100%"
              ></img>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="card -self-center">
            <div className="card-body">
              <h4>Project: Social Network API</h4>
              <p>
                This was the eighteenth project I worked on (and one of the most
                complicated so far!) It is an API for a social network app. I
                used Express.js for routing and MongoDB Database with Mongoose
                ODM (I have a link to a demo video below)
              </p>
              <a
                href="https://github.com/abcushing/socialnetworkapi-nosql"
                target="_blank"
                rel="noopener noreferrer"
              >
                Social Network API on Github
              </a>
              <br></br>
              <a
                href="https://drive.google.com/file/d/1oC-SvBbxtDHI0VsJ6m5S-91SZfkCLV1T/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Social Network API Demo
              </a>
              {/* https://github.com/abcushing/socialnetworkapi-nosql project 18 -turned off heroku so I would not have to pay for this app*/}
              <img
                src="./screenshots/project18.jpg"
                alt="demo profile"
                width="100%"
              ></img>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="card -self-center">
            <div className="card-body">
              <h4>Group Project: Mordle</h4>
              <p>
                out of the 3 group projects, this was the most original project
                I worked on. We decided to make a wordle app (word guessing
                game) but give it a movie theme. This was a collaboration
                between myself and 2 other classmates
              </p>
              <a
                href="https://github.com/abcushing/copy_mordle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mordle on Github
              </a>
              <br></br>
              <a
                href="https://abcushing.github.io/copy_mordle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out our Mordle app here
              </a>
              {/* https://github.com/abcushing/copy_mordle group project 1*/}
              <img
                src="./screenshots/projectG.jpg"
                alt="Mordle"
                width="100%"
              ></img>
              <br></br>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
      <br></br>
    </div>
  );
};

export default Portfolio;
