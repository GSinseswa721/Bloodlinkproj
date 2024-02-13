import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import logo from "../assets/Group 2410logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="container-fluid fixed-top bg-white border w-100">
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="img-fluid" />
          </Link>
        </div>

        <nav id="navbar" className="navbar container-fluid flex-grow-1">
          <ul className="d-flex">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/documentation" className="nav-link">
                Q&A
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>

          <Link
            to="/login"
            className=" text-center "
            color="#f82424"
            style={{ color: "#f82424" }}
          >
            Login/Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
