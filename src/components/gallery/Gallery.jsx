import React from "react";
import { BsInstagram } from "react-icons/bs";
import { gallery } from "../../data";

import "./gallery.css";

const Gallery = () => {
  return (
    <section className="gallery__section" id="gallery">
      <div className="section-title mb-5 container">
        <div className="sub-style">
          <h4 className="sub-title text_title mb-0">Gallery</h4>
        </div>
        <h2 className="text_subtitle mb-4" style={{ color: "#fff" }}>
          Explore Our State-of-the-Art Facilities
        </h2>
        <p className="mb-4" style={{ color: "#fff" }}>
          Our hospital is designed to provide the highest quality of care in a
          modern, comfortable setting. Explore our patient rooms, surgical
          suites, and specialized care units through the images below
        </p>
      </div>
      <div className="gallery__container container">
        {gallery.map(({ id, img }) => (
          <div className="gallery__img" key={id}>
            <img src={img} alt="Modern Comfortable setting" />
            {/* <p className = "gallery__image-icon">My name</p> */}
            <div className="">
              <a href="https://github.com/klessy">
                <BsInstagram className="gallery__image-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
