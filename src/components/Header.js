import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header () {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        Noteful
      </Link>{" "}
    </header>
  );
};

export default Header;
