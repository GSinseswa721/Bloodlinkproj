import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import bloodgroup from "../assets/Group 16blood-donation.svg";
import "../assets/assets_1/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/assets_1/vendor/boxicons/css/boxicons.min.css";
import "../assets/assets_1/vendor/glightbox/css/glightbox.min.css";
import "../assets/assets_1/vendor/swiper/swiper-bundle.min.css";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml11 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /([^\x00-\x80]|\w)/g,
      "<span className='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml11 .line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: ".ml11 .line",
        translateX: [
          0,
          document.querySelector(".ml11 .letters").getBoundingClientRect()
            .width + 10
        ],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: ".ml11 .letter",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1)
      })
      .add({
        targets: ".ml11",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  });

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div className="body">
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h5 className="ml11">
                  <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span className="letters">Welcome to Blood Link</span>
                  </span>
                </h5>
                <br />
                <h1>Filling The Gap ...</h1>
                <h2>Net Blood Safe Lives</h2>
                <p>
                  Our mission is to fill the gap between blood donors and
                  recipients, providing a seamless and efficient encounter for
                  both parties. A reliable source, providing you the best
                  experience....
                </p>

                <div>
                  <a href="#about" className="btn-find-donor scrollto">
                    Find a Donor
                  </a>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-4 hero-img">
                <img src={bloodgroup} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
