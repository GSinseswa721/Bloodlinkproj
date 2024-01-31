import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/style.css'
import "../assets/assets_1/vendor/bootstrap-icons/bootstrap-icons.css"  
import "../assets/assets_1/vendor/boxicons/css/boxicons.min.css" 
import "../assets/assets_1/vendor/glightbox/css/glightbox.min.css"
import "../assets/assets_1/vendor/swiper/swiper-bundle.min.css"

const Footer = () => {
  return (
    <>
        <div>
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 footer-contact">
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

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Documentation</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Pre-Book Blood Appointment</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Request Blood Blank</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Blood Donation Documentaion</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Raising Awareness</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Our Social Networks</h4>
                  <p>Connect with Us.</p>
                  <div class="social-links mt-3">
                    <a href="#" class="twitter">
                      <i class="bx bxl-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                      <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="#" class="linkedin">
                      <i class="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container py-3">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>BloodLink</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>

        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
        </div>
    </>
  )
}

export default Footer