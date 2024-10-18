import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { dataSlider } from "../../data";
import Button from "../Button";

import "./hero.css";

const Hero = () => {
  return (
    <section id="header">
      <div className="slide-container">
        <Fade>
          {dataSlider.map((carousels, index) => {
            const { id, title, desc, img, btn } = carousels;
            return (
              <div className="slide" key={id}>
                <img src={img} alt={title} />
                <div className="inner-carousel">
                  <div className="hero-con container">
                    <h3 className="hero-p">Health service</h3>
                    <h1 className="">{title}</h1>
                    <p>{desc}</p>
                    <a href="#contact">
                      {/* <button className="btn_main font__main">{btn}</button> */}
                      <Button
                        title={"Book Appointment"}
                        className={"btn-primary"}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
