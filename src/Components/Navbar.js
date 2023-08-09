import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import {Link} from "react-router-dom";

export default function Navbar(props) {


  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.changeMode}
          />
          <label className="form-check-label " style={{color :'black'}} htmlFor="flexSwitchCheckDefault">
           {`Enable ${props.mode} Mode`}
          </label>
        </div>
      </div>
    </nav>
  );
}

// Defining PropTypes and isRequired
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

// Setting default value to props in case we dont pass the value
Navbar.defaultProps = {
  title: "Default Title",
};
