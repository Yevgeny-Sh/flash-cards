import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <Link className="nav-link" to="/">
        flash cards{" "}
      </Link>
      <Link to="/CreateCard">manage cards </Link>
    </nav>
  );
};

export default NavBar;
