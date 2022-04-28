import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./../../App.css";
import "./NavigateBar.css";

export const NavigateBar = () => {
  return (
    <div className="NavigateBar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MUPP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/WhoIAm">
                Who I Am
              </NavLink>
              <NavLink className="nav-item nav-link" to="/ProExp">
                Pro Experience
              </NavLink>
              <NavLink className="nav-item nav-link" to="/Contact">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
