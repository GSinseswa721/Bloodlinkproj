import React from "react";
import { useEffect } from "react";
import "../styles/doc.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


const Documentation = () => {
  useEffect(() => {
    const OnClick = document.getElementById("OnClick");
    if (OnClick) {
      OnClick.addEventListener("click", handleClick);
    }
  }, []);

  const handleClick = () => {
    window.location.href =
      "https://www.blood.co.uk/the-donation-process/#:~:text=We%20will%20insert%20a%20needle,or%20just%20under%20a%20pint).";
  };
  useEffect(() => {
    const MyButton = document.getElementById("MyButton");
    if (MyButton) {
      MyButton.addEventListener("click", CoolClick);
    }
  }, []);

  const CoolClick = () => {
    window.location.href =
      "https://www.blood.co.uk/the-donation-process/#:~:text=We%20will%20insert%20a%20needle,or%20just%20under%20a%20pint).";
  };
  useEffect(() => {
    const Button = document.getElementById("Button");
    if (Button) {
      Button.addEventListener("click", LikeClick);
    }
  }, []);

  const LikeClick = () => {
    window.location.href = "https://www.ncbi.nlm.nih.gov/books/NBK310569/";
  };
  useEffect(() => {
    const MyButton = document.getElementById("MyButton");
    if (MyButton) {
      MyButton.addEventListener("click", ToClick);
    }
  }, []);

  const ToClick = () => {
    window.location.href =
      "https://static.mygov.in/indiancc/2022/03/mygov-9999999991153800279.pdf";
  };

  return (
    <>
    <div>
      <Navigation/>
    </div>
    
      <section className="sectionss">
        <h1>Documentation</h1>
        <div className="box11">
          <h2>Who Can Donate Blood.</h2>
          <p>
            Healthy adults aged 17-65, weighing over 110 pounds, without certain
            medical conditions, are eligible to donate blood and save lives..
          </p>
          <button id="OnClick" className="docbtn">Read More</button>
        </div>
        <div className="box12">
          <h2>Process of Blood Donation.</h2>
          <p>
            Blood donation involves registration, health screening, and the
            actual donation. A sterile needle is used to collect a unit of
            blood, which takes about 10-15 minutes. Afterwards, refreshments are
            provided.
          </p>
          <button id="MyButton" className="docbtn">Read More</button>
        </div>
        <div className="box13">
          <h2>Pre & Post process of Blood Donation</h2>
          <p>
            Pre-donation involves registration and health screening. During
            donation, a sterile needle collects blood in 10-15 minutes.
            Post-donation, refreshments are provided, and donors are advised to
            rest briefly for recovery.
          </p>
          <button id="Button" className="docbtn">Read More</button>
        </div>
        <div className="box14">
          <h2>Importance of Blood donation</h2>
          <p>
            Blood donation saves lives by providing vital components for medical
            treatments, surgeries, and emergencies. It's a selfless act that
            ensures a stable blood supply for those in need, promoting community
            health.
          </p>
          <button id="OnButton" className="docbtn">Read More</button>
        </div>
      </section>
      
      <div>
      <Footer/>
    </div>
    </>
  );
};

export default Documentation;
