import React from "react";

const Portfolio = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          <h2>Examples of my Work</h2>
          <p>
            (in chronological order)
            {/* screenshots in public/screenshots */}
          </p>
          <h4>Project: Porfolio Demo</h4>
          <p>
            This was my second project I created, a demo portfolio. this simple,
            sample site was good practice to get the basics of CSS and HTML
          </p>
          {/* https://github.com/abcushing/challange-002 project 2*/}
          <br></br>
          <h4>Project: Weather App</h4>
          <p>
            This was the sixth project I created. It is a simple weather app
            that uses a server-side API to find the weather for any given area.
            Includes 5 day forcast and weather icons{" "}
          </p>
          {/* https://github.com/abcushing/Challange006-WeatherApp project 6*/}
          <br></br>
          <h4>Project: Readme Generator</h4>
          <p>
            This was the ninth project I created. It is a Readme Generator;it
            dynamically creates a ReadMe based on the input provided using
            Node.js (I have a link to a demo video below){" "}
          </p>
          {/* https://github.com/abcushing/Challange09-ReadMe project 9, demo video is an unlisted yt link in the readme*/}
          <br></br>
          <h4>Project: Employee Tracker</h4>
          <p>
            This was the twetlth project I worked on. It is a command line
            application that can be used as an employee database. This control
            managment system was built using Node.js, Inquirer, and MySQL (I
            have a link to a demo video below){" "}
          </p>
          {/* https://github.com/abcushing/Employee-Tracker project 12*/}
          <br></br>
          <h4>Project: E-Commerce-Back</h4>
          <p>
            This was the thirteenth project I worked on. It is the backend of an
            e-commerce site. I had to use an Express.js API and configure it to
            work with a MySQL database. Sequelize can be used with to interact
            with the database.(I have a link to a demo video below)
          </p>
          {/* https://github.com/abcushing/E-commerce-Back-End project 13*/}
          <br></br>
          <h4>Project: Social Network API</h4>
          <p>
            This was the eighteenth project I worked on (and one of the most
            complicated so far!) It is an API for a social network app. I used
            Express.js for routing and MongoDB Database with Mongoose ODM (I
            have a link to a demo video below)
          </p>
          {/* https://github.com/abcushing/socialnetworkapi-nosql project 18 -turned off heroku so I would not have to pay for this app*/}
          <br></br>
          <h4>Group Project: Mordle</h4>
          <p>
            out of the 3 group projects, this was the most original project I
            worked on. We decided to make a wordle app (word guessing game) but
            give it a movie theme. This was a collaboration between myself and 2
            other classmates
          </p>
          {/* https://github.com/abcushing/copy_mordle group project 1*/}
          <br></br>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default Portfolio;
