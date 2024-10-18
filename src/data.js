import Carousel_1 from "./assets/carousel-1.jpg";
import Carousel_2 from "./assets/carousel-2.jpg";
import Carousel_3 from "./assets/carousel-3.jpg";

export const navlinks = [
  {
    id: 1,
    title: "Home",
    Link: "#",
  },
  {
    id: 2,
    title: "About",
    Link: "#about",
  },
  {
    id: 3,
    title: "Services",
    Link: "#services",
    // path: '/about',
  },
  {
    id: 4,
    title: "Gallery",
    Link: "#gallery",
  },
  {
    id: 5,
    title: "Contact",
    Link: "#contact",
  },
];

const dataSlider = [
  {
    id: 1,
    title: "Trusted hospital",
    desc: "Your Health is Our Priority. Advanced Medical Services for Every Stage of Life",
    img: Carousel_1,
    btn: "Get a Quote",
  },
  {
    id: 2,
    title: "Best Solution for Painful life ",
    desc: "Comprehensive Medical Services for Every Need",
    img: Carousel_2,
    btn: "Get a Quote",
  },
  {
    id: 3,
    title: "Care You Can Trust",
    desc: "24/7 care for critical health emergencies, with fast response times and expert care.",
    img: Carousel_3,
    btn: "Get a Quote",
  },
];

const servicesData = [
  {
    id: 1,
    icon: <i class="fa fa-2x fa-user-md"></i>,
    title: "Emergency Services",
    desc: "24/7 care for critical health emergencies, with fast response times and expert care.",
    // img: Window_1,
  },
  {
    id: 2,
    icon: <i class="fa fa-2x fa-procedures"></i>,
    title: "Surgical Services",
    desc: "Minimally invasive and advanced surgical procedures with a focus on patient safety and recovery.",
    // img: Blog_2,
  },
  {
    id: 3,
    icon: <i class="fa fa-2x fa-stethoscope text-white"></i>,
    title: "Outdoor Checkup",
    desc: "24/7 care for critical health emergencies, with fast response times and expert care.",
    // img: Furnace_1,
  },
  {
    id: 4,
    icon: <i class="fa fa-2x fa-ambulance text-white"></i>,
    title: "Primary Care",
    desc: "Comprehensive care for all ages to keep you and your family healthy.",
    // img: Confirned_1,
  },
  {
    id: 5,
    icon: <i class="fa fa-2x fa-pills text-white"></i>,
    title: "Maternity & Pediatrics",
    desc: "Compassionate care for mothers and children with expert obstetrics and pediatrics teams.",
    // img: Confirned_1,
  },
  {
    id: 6,
    icon: <i class="fa fa-2x fa-microscope text-white"></i>,
    title: "Diagnostic Imaging",
    desc: "Advanced imaging technologies for accurate diagnoses, including MRI, CT, and ultrasound.",
    // img: Confirned_1,
  },
];

export { dataSlider, servicesData };
