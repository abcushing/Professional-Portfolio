import React from "react";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

const PageContent = (props) => {
  return (
    <div>
      {" "}
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
};

export default PageContent;
