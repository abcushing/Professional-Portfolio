import { useState } from "react";
import React from "react";
import Navbar from "../Navbar";
import Page from "../Page";

export default function PortfolioContainer() {
  const [pages] = useState([
    {
      name: "about",
    },
    {
      name: "contact",
    },
    {
      name: "portfolio",
    },
    {
      name: "resume",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Navbar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        // handlePageChange={handlePageChange}
      ></Navbar>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      {/* <About /> */}
    </div>
  );
}
