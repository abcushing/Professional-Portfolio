import React from "react";
import { ReactDOM } from "react-dom/client";
// import "App.css";

const Contact = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col"></div>
        <div class="col-6">
          {/* <p> idk if I want to put my email here or not </p> */}
          <p>
            <a
              href="https://www.linkedin.com/in/alex-cushing-1353b6149/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            {/* https://www.linkedin.com/in/alex-cushing-1353b6149/ */}
          </p>
          <p>
            <a
              href="https://github.com/abcushing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            {/* https://github.com/abcushing */}
          </p>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default Contact;
