import React from "react";
import BlooAbout from "../assets/about-blood.png";
import { RiIndentIncrease } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import '../styles/about.css'

const About = () => {
  return (
   <>
       <div>
        < Navigation/>
    </div>
        
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6 col-xl-5">
              <img src={BlooAbout} alt="" />
            </div>
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-11">
                  <h2 class="h1 mb-3">Who Are We?</h2>
                  <p class="lead fs-4 text-secondary mb-3">
                    We are committed to fostering a culture of giving, where
                    individuals from all walks of life come together to
                    contribute to the well-being of our communities through the
                    simple act of donating blood."
                  </p>
                  <p class="mb-5">
                    Our vision is a world where no one suffers due to a shortage
                    of blood. We envision a society where voluntary blood
                    donation is a norm, and every eligible person feels
                    empowered to contribute to this life-saving cause
                  </p>
                  <div class="row gy-4 gy-md-0 gx-xxl-5X">
                    <div class="col-12 col-md-6">
                      <div class="d-flex">
                        <div class="me-4 text-primary">
                          <MdSecurity color="red" />
                        </div>
                        <div>
                          <p class="text-secondary mb-0">
                            Encourage and facilitate more people to donate blood
                            regularly through awareness campaigns, community
                            events, and partnerships.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="d-flex">
                        <div class="me-4 text-primary">
                          <RiIndentIncrease color="red" />
                        </div>
                        <div>
                          <p class="text-secondary mb-0">
                            {" "}
                            Work towards building a robust and reliable blood
                            supply network to meet the demands of hospitals and
                            medical facilities, ensuring that no patient goes
                            without the necessary blood.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ft">
        < Footer/>
    </div>
   </>
  );
};

export default About;
