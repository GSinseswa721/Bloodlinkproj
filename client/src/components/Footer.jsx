import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/style.css';
import "../assets/assets_1/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/assets_1/vendor/boxicons/css/boxicons.min.css";
import "../assets/assets_1/vendor/glightbox/css/glightbox.min.css";
import "../assets/assets_1/vendor/swiper/swiper-bundle.min.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>BloodLink</h3>
              <p>
                KG 549 st Kacyiru
                <br />
                Gasabo, Kigali City
                <br />
                Rwanda <br />
                <br />
                <strong>Phone:</strong> +250788409189
                <br />
                <strong>Email:</strong> bloodlink18@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Documentation</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Pre-Book Appointment</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Request Blood Bank</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Blood Donation Documentation</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Raising Awareness</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Connect with Us.</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>BloodLink</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
}

export default Footer;
