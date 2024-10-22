import React from "react";
import Button from "../Button";
import AboutImg from "../../assets/about.jpg";

import "./about.css";

const About = () => {
  return (
    <section className="about__section">
      <div className="about__container container">
        <div className="about__img-con">
          <div className="about__img">
            <img
              src={AboutImg}
              className="first__img rounded w-100"
              alt="Image"
            />
          </div>
          <div className="about-experience">15 years experience</div>
        </div>
        <div className="section-title text-start mb-5">
          <h5 className="sub-title text_title mb-0">About Us</h5>
          <h1 className="text_subtitle mb-4">A Legacy of Care & Excellence</h1>
          <p className="mb-4">
            Founded in [Year], Ausmed Hospital has been dedicated to offering
            exceptional healthcare services for the community. With a team of
            experienced healthcare professionals, state-of-the-art facilities,
            and a patient-centered approach, we strive to meet the highest
            standards of care. Our mission is simple: to provide comprehensive
            healthcare solutions that enhance the quality of life for our
            patients
          </p>
          {/* <div className="mb-4">
            <p className="text-secondary">
              <i className="fa fa-check text-primary me-2"></i> Refresing to get
              such a personal touch.
            </p>
            <p className="text-secondary">
              <i className="fa fa-check text-primary me-2"></i> Duis aute irure
              dolor in reprehenderit in voluptate.
            </p>
            <p className="text-secondary">
              <i className="fa fa-check text-primary me-2"></i> Velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div> */}
          <a href="#" className="discover__more text-white py-3 px-5">
            <Button title={"Discover more"} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
