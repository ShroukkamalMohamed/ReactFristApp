import React from "react";
import "../../Css/Navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbra() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4 fixed-top z-3">
        <div className="container">
          <Link className="navbar-brand text-uppercase fw-bold fs-4" to="/">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto   ">
              <li className="nav-item  ">
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="nav-link "
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink
                  to="/portfolio"
                  activeClassName="active"
                  className="nav-link "
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="nav-link "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
