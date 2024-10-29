import { useState, useEffect } from "react";
import { servicesData } from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Button";

import "./services.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [arrow, setArrow] = useState("");
  const [moreService, setMoreService] = useState(6);
  const [showLess, setShowLess] = useState("Show Less");

  const contactUs = () => {
    setArrow(<i className="bi bi-arrow-right"></i>);
  };

  const slice = servicesData.slice(0, moreService);

  const loadMore = () => {
    setMoreService(moreService + 3);
  };

  const loadLess = () => {
    setMoreService(6);
  };

  return (
    <section className="service__section" id="services">
      <div className="service__container container">
        <div className="section-title">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0 text_title">What We Do</h4>
          </div>
          <h2 className="mb-4 text_subtitle">Explore Our Services.</h2>
          <p className="mb-0">
            At Ausmed Hospital, we offer a full spectrum of medical services
            designed to meet the healthcare needs of individuals and families.
            Our services include:
          </p>
        </div>
        <div className="service_con" onMouseOver={contactUs} data-aos="fade-in">
          {slice.map((service) => {
            const { id, icon, title, desc } = service;
            return (
              <article key={id}>
                <div className="service-card">
                  <div className="service_icon">
                    <i>{icon}</i>
                  </div>
                  <h5 className="mb-3">{title}</h5>
                  <p>{desc}</p>
                </div>
              </article>
            );
          })}
          ;
        </div>
        <div className="service-btn">
          {moreService <= 10 ? (
            <Button onClick={() => loadMore()} title={"More of our service"} />
          ) : (
            <Button onClick={() => loadLess()} title={"Show Less"} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
