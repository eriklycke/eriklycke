import React, { useState } from 'react';


import { NavLink } from "react-router-dom";

import './Navbar.css';
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons.js";

function NavBar() {

  
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Erik Lycke</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              <CodeIcon />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="./sign-up"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
        
      </nav>
    </>
  );
}

export default NavBar;