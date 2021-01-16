import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  // default must be false
  const [clicked, setClick] = useState(false);

  return (
    <>
      <nav className={clicked ? " clicked" : ""}>
        <Link to="/">
          <h1 className="NavBrand">Nirjal P.</h1>
        </Link>
        <section className={clicked ? "NavLinks clicked" : "NavLinks"}>
          <NavLink
            exact
            onClick={() => {
              setClick(false);
            }}
            className="NavLink"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            onClick={() => {
              setClick(false);
            }}
            className="NavLink"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            exact
            onClick={() => {
              setClick(false);
            }}
            className="NavLink"
            to="/aboutme"
          >
            About Me
          </NavLink>
          <NavLink
            exact
            onClick={() => {
              setClick(false);
            }}
            className="NavLink"
            to="/contact"
          >
            Contact
          </NavLink>
        </section>
        <div className="burgerContainer" onClick={() => setClick(!clicked)}>
          <div className={clicked ? "burger clicked" : "burger"}></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
