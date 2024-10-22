import { useState } from "react";
import { servicesData } from "../../data";

import "./services.css";

const Services = () => {
  const [arrow, setArrow] = useState("");

  const contactUs = () => {
    setArrow(<i className="bi bi-arrow-right"></i>);
  };

  return (
    <section className="service__section">
      <div className="service__container container">
        <div className="section-title">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0 text_title">What We Do</h4>
          </div>
          <h1 className="mb-4 text_subtitle">Explore Our Services.</h1>
          <p className="mb-0">
            At Ausmed Hospital, we offer a full spectrum of medical services
            designed to meet the healthcare needs of individuals and families.
            Our services include:
          </p>
        </div>
        <div className="service_con" onMouseOver={contactUs}>
          {servicesData.map((service) => {
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
      </div>
    </section>
  );
};

export default Services;
