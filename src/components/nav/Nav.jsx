import { useState } from "react";
import Logo from "../../assets/logo-bg.png";

import { navlinks } from "../../data";

import "./nav.css";

const Nav = () => {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("");

  // sticky navbar
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav>
      <div>
        {/*================== Topbar Start ====================== */}
        <div className="topbar">
          <div className="topbar__address">
            <a href="#" className="text-light mr-4">
              <i className="fas fa-map-marker-alt text-primary mr-2"></i>Find A
              Location
            </a>
            <a href="tel: +2348103783162" className="text-light mr-4">
              <i className="fas fa-phone-alt text-primary mr-2"></i>
              +2349035917372
            </a>
            <a
              href="mailto: info@ausmedhospital.com"
              className="text-light mr-4"
            >
              <i className="fas fa-envelope text-primary mr-2"></i>
              info@ausmedhospital.com
            </a>
          </div>
          <div className="topbar__social">
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-0"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/*=================== Topbar End ========================*/}
      </div>

      <div className={`nav__container ${sticky ? "sticky-top_remove" : ""}`}>
        <div className="navbar__img">
          <a href="index.html" className="nav__logo">
            <img
              src={Logo}
              alt="Building_and_planing-logo"
              className="company_logo"
            />
            <span className="company_name">
              AusMed <span className="">Hospital</span>
            </span>
          </a>
        </div>
        <ul className="navbar__links">
          {navlinks.map((links) => {
            const { id, title, Link } = links;
            return (
              <li
                key={id}
                className={`${
                  active === title
                    ? "txt_active-primary"
                    : "txt_active-secondary"
                }`}
                onClick={() => setActive(title)}
              >
                <a href={Link} className="font__main">
                  {title}
                </a>
              </li>
            );
          })}
          <div className="mobile-socials">
            <a href="tel: +2348103783162" className="btn-sm-square mr-2">
              <i className="fas fa-phone-alt mobile_icon text-primary mr-2"></i>
            </a>
            <a
              href="mailto: info@ausmedhospital.com"
              className="btn-sm-square mr-2"
            >
              <i className="fas fa-envelope mobile_icon text-primary mr-2"></i>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
