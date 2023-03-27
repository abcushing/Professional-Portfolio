import React from "react";
import Portfolio from "../Portfolio";
import Resume from "../Resume/index.js";
import About from "../About";
import Contact from "../Contact";
import PageContent from "../PageContent";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
    }
  };
  // const handlePageChange = (page) => setCurrentPage(page);
  return (
    <PageContent>
      page test
      <h2>{renderPage()}</h2>
    </PageContent>
  );
}

export default Page;
