import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import { mobileNav } from "../../data";

import "./floating-nav.css";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-500}
        className="scrollspy"
        currentClassName="active"
        items={["header", "about", "services", "gallery", "contact"]}
      >
        {mobileNav.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
