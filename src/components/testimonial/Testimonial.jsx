import React from "react";

import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonials } from "../../data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import TestimonialImg_1 from "../../assets/testimonial-1.jpg";
import TestimonialImg_2 from "../../assets/testimonial-2.jpg";
import TestimonialImg_3 from "../../assets/testimonial-3.jpg";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./testimonial.css";

const Testimonial = () => {
  var slidesNumber = 6;

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          // infinite: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial__section">
      <div className="container testimonial__container">
        <div className="section-title mb-5">
          <div className="sub-style">
            <h5
              className="sub-title text_title mb-0"
              style={{ lineHeight: "1" }}
            >
              Patient <br /> Testimonials
            </h5>
          </div>
          <h1 className="mb-4 text_subtitle">What our Patients says</h1>
        </div>

        <Slider {...settings}>
          {/* <div className="section__grid"> */}
          <div className="section__card">
            <span>
              <i className="fas fa-quote-left"></i>
            </span>
            <h4>Compassionate Care in a Time of Need</h4>
            <p>
              I was extremely nervous when I had to undergo surgery, but the
              doctors and nurses at AusMed Hospital made me feel completely at
              ease. The staff was so compassionate and attentive, and I felt
              like I was in great hands throughout the entire process. I'm so
              grateful for their care and professionalism!
            </p>
            <img src={TestimonialImg_1} alt="user" />
            <h5>Allan Collins</h5>
            <h6>Surgery Patient</h6>
          </div>
          <div className="section__card">
            <span>
              <i className="fas fa-quote-left"></i>
            </span>
            <h4>Excellent Designs</h4>
            <p>
              Our son was admitted to the pediatric unit for a week, and I
              cannot thank AusMed Hospital enough for their outstanding care.
              The pediatricians and nurses were kind, patient, and very
              supportive. They explained everything clearly and reassured us
              during a very stressful time. Our son is doing great now, thanks
              to the team
            </p>
            <img src={TestimonialImg_2} alt="user" />
            <h5>Tanya Grant</h5>
            <h6>Ceo & Founder</h6>
          </div>
          <div className="section__card">
            <span>
              <i className="fas fa-quote-left"></i>
            </span>
            <h4>Fast and Efficient Emergency Service</h4>
            <p>
              I came to the emergency room after a serious fall and was treated
              immediately. The emergency staff was incredibly responsive, and I
              received excellent care. I was back home the same day with clear
              instructions for my recovery. I truly appreciate the quick and
              efficient service at Ausmed Hospital
            </p>
            <img src={TestimonialImg_3} alt="user" />
            <h5>Clay Washington</h5>
            <h6>Emergency Care Patient</h6>
          </div>
          <div className="section__card">
            <span>
              <i className="fas fa-quote-left"></i>
            </span>
            <h4>Efficient and Reliable</h4>
            <p>
              I came to the emergency room after a serious fall and was treated
              immediately. The emergency staff was incredibly responsive, and I
              received excellent care. I was back home the same day with clear
              instructions for my recovery. I truly appreciate the quick and
              efficient service at Ausmed Hospital
            </p>
            <img src={TestimonialImg_3} alt="user" />
            <h5>Clay Washington</h5>
            <h6>Emergency Care Patient</h6>
          </div>
          {/* </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
