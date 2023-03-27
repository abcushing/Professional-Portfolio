import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const pages = props.pages;
  const setCurrentPage = props.setCurrentPage;
  const currentPage = props.currentPage;
  return (
    <nav>
      <Link to="../About/index.js"></Link>
    </nav>
  );
}

export default Navbar;
