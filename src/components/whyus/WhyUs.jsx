import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Button";
import WhyUsImg from "../../assets/price-4.jpg";

import "./whyus.css";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section className="why__section">
      <div className="container" data-aos="fade-up">
        <div className="why__container">
          <div className="why__text ">
            <div className="section-title mb-5">
              <h5 className="sub-title text_title mb-0">Why Us</h5>
              <h1 className="text_subtitle mb-4">
                We are Ready to Help Improve Your Treatment.
              </h1>
            </div>
            <p className="mb-4">
              At Ausmed Hospital, we offer personalized care with cutting-edge
              medical technology and a dedicated team of professionals committed
              to your well-being. From primary care to specialized treatments,
              we are here for you.
            </p>
            <div className="mb-4">
              <p className="text-secondary">
                <i className="fa fa-check text-primary me-2"></i>Over 15 years
                of experience in healthcare.
              </p>
              <p className="text-secondary">
                <i className="fa fa-check text-primary me-2"></i> A dedicated
                team of over 20 medical professionals and specialists.
              </p>
              <p className="text-secondary">
                <i className="fa fa-check text-primary me-2"></i> Accredited by
                Global Healthcare.
              </p>
            </div>
            <a href="#" className="discover__more text-white py-3 px-5">
              <Button title={"Discover more"} />
            </a>
          </div>

          <div className="why__img-con">
            <div className="why__img">
              <img
                src={WhyUsImg}
                className="first__img rounded w-100"
                alt="Cutting edge Medical Technology"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#faf9fb"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg> */}
    </section>
  );
};

export default WhyUs;
