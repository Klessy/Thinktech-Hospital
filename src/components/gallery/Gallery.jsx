import React from "react";
import { BsInstagram } from "react-icons/bs";
import { gallery } from "../../data";

import "./gallery.css";

const Gallery = () => {
  return (
    <section className="gallery__section" id="gallery">
      <div className="section-title mb-5 container">
        <div className="sub-style">
          <h5 className="sub-title text_title mb-0">Gallery</h5>
        </div>
        <h1 className="text_subtitle mb-4" style={{ color: "#fff" }}>
          Explore Our State-of-the-Art Facilities
        </h1>
        <p className="mb-4" style={{ color: "#fff" }}>
          Our hospital is designed to provide the highest quality of care in a
          modern, comfortable setting. Explore our patient rooms, surgical
          suites, and specialized care units through the images below
        </p>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,96L80,85.3C160,75,320,53,480,74.7C640,96,800,160,960,181.3C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}
      <div className="gallery__container container">
        {gallery.map(({ id, img }) => (
          <div className="gallery__img" key={id}>
            <img src={img} alt="Welcome to our Gallery" />
            {/* <p className = "gallery__image-icon">My name</p> */}
            <div className="">
              <a href="https://github.com/klessy">
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,192L80,202.7C160,213,320,235,480,218.7C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
};

export default Gallery;
