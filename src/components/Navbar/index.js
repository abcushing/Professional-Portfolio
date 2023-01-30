import React from "react";

function Navbar(props) {
  const { pages = [], currentPage, setCurrentPage } = props;
  return (
    <nav>
      <ul className="nav nav-tabs">
        {pages.map((page) => (
          <li
            className={`
      ${currentPage.name === page.name && "nav active"}`}
            key={page.name}
          >
            <span onClick={() => setCurrentPage(page)}></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
