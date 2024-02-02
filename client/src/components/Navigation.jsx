import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/style.css'
import logo from '../assets/Group 2410logo.svg'
import {Link} from "react-router-dom"
import "../assets/assets_1/vendor/bootstrap-icons/bootstrap-icons.css"  
import "../assets/assets_1/vendor/boxicons/css/boxicons.min.css" 
import "../assets/assets_1/vendor/glightbox/css/glightbox.min.css"
import "../assets/assets_1/vendor/swiper/swiper-bundle.min.css"


const Navigation = () => {
  return (
    <>
        <div>
        <header id="Headers" class="fixed-top d-flex align-items-center">
          <div class="container-fluid d-flex align-items-center justify-content-between">
            <div className="logo">

              <a href="#">
                <img src={logo} alt="" class="img-fluid" />
              </a>
            </div>

            <nav id="navbar" class="navbar">
              <ul>
                <li class="nav-link scrollto active">
                  <Link to="/home" className="link">
                    Home
                  </Link>
                </li>
                <li class="nav-link scrollto">
                  <Link to="/about" className="link">
                    About Us
                  </Link>
                </li>
                <li class="nav-link scrollto">
                  <Link to="/services" className="link">
                    Services
                  </Link>
                </li>
                <li class="nav-link scrollto">
                  <Link to="/documentation" className="link">
                    Documentation
                  </Link>
                </li>
                <li class="nav-link scrollto">
                  <Link to="/contact" className="link">
                    Contact Us
                  </Link>
                </li>

                <button class="getstartedd scrollto">
                  <Link to="/login" className="login_b">
                  Login/Register
                  </Link>
                </button>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
        </div>
    </>
  )
}

export default Navigation