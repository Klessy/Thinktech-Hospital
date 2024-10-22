import { RiDoubleQuotesR } from "react-icons/ri";
import Carousel_1 from "./assets/carousel-1.jpg";
import Carousel_2 from "./assets/carousel-2.jpg";
import Carousel_3 from "./assets/carousel-3.jpg";

import Gallery_1 from "./assets/hospital-room.jpeg";
import Gallery_2 from "./assets/HR-2.jpeg";
import Gallery_3 from "./assets/HR-3.jpeg";
import Gallery_4 from "./assets/HR-4.jpeg";
import Gallery_5 from "./assets/HE-1.jpeg";
import Gallery_6 from "./assets/HE-2.jpeg";

//Testinonial images
import Testimonial_1 from "./assets/testimonial-1.jpg";
import Testimonial_2 from "./assets/testimonial-2.jpg";
import Testimonial_3 from "./assets/testimonial-3.jpg";
import Testimonial_4 from "./assets/testimonial-3.jpg";
import Testimonial_5 from "./assets/testimonial-3.jpg";
import Testimonial_6 from "./assets/testimonial-3.jpg";

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

const gallery = [
  {
    id: 1,
    img: Gallery_1,
  },
  {
    id: 2,
    img: Gallery_2,
  },
  {
    id: 3,
    img: Gallery_3,
  },
  {
    id: 4,
    img: Gallery_4,
  },
  {
    id: 5,
    img: Gallery_5,
  },
  {
    id: 6,
    img: Gallery_6,
  },
];

const Testimonials = [
  {
    quote: <RiDoubleQuotesR />,
    title: "Compassionate Care in a Time of Need",
    desc: "I was extremely nervous when I had to undergo surgery, but the doctors and nurses at [Hospital Name] made me feel completely at ease. The staff was so compassionate and attentive, and I felt like I was in great hands throughout the entire process. I'm so grateful for their care and professionalism!",
    testImg: Testimonial_1,
    name: "Parry Hotter",
    category: "Surgery Patient",
  },
  {
    quote: <RiDoubleQuotesR />,
    title: "Excellent Pediatric Care",
    desc: "Our son was admitted to the pediatric unit for a week, and I cannot thank [Hospital Name] enough for their outstanding care. The pediatricians and nurses were kind, patient, and very supportive. They explained everything clearly and reassured us during a very stressful time. Our son is doing great now, thanks to the team",
    testImg: Testimonial_2,
    name: "Mark & Lisa R",
    category: "Lagos",
  },
  {
    quote: <RiDoubleQuotesR />,
    desc: "As a busy professional, I don't have the time or energy to clean my apartment regularly. That's why I'm so grateful for Sparkle Cleaners. They take care of everything, and I always come home to a sparkling clean space. Thank you for making my life easier!",
    testImg: Testimonial_3,
    name: "Mark & Lisa R",
    category: "Parents of a Pediatric Patient",
  },
  {
    quote: <RiDoubleQuotesR />,
    title: "Fast and Efficient Emergency Service",
    desc: "I came to the emergency room after a serious fall and was treated immediately. The emergency staff was incredibly responsive, and I received excellent care. I was back home the same day with clear instructions for my recovery. I truly appreciate the quick and efficient service at Ausmed Hospital",
    testImg: Testimonial_4,
    name: "John D",
    category: "Lagos",
  },
  {
    quote: <RiDoubleQuotesR />,
    desc: "I was hesitant to hire a cleaning service at first, but Sparkle Cleaners exceeded all my expectations. They were thorough, efficient, and respectful of my home. I'll definitely be using their services again in the future.",
    testImg: Testimonial_5,
    name: "",
    category: "Emergency Care Patient",
  },
  {
    quote: <RiDoubleQuotesR />,
    desc: "I hired Sparkle Cleaners for a deep clean before hosting a party at my house, and I'm so glad I did. They transformed my home into a showroom-worthy space in just a few hours. My guests were impressed, and I couldn't have pulled it off without them. Thank you, Sparkle Cleaners",
    testImg: Testimonial_6,
    name: "Parry Hotter",
    category: "Lagos",
  },
];

const faqs = [
  {
    id: 1,
    question: "What services does AusMed Hospital provide?",
    answer:
      "AusMed Hospital offers a wide range of medical services, including primary care, emergency services, specialty care (cardiology, oncology, orthopedics), surgical procedures, maternity and pediatric care, and diagnostic imaging. We are committed to providing comprehensive care for all your health needs.",
  },
  {
    id: 2,
    question: "How do I schedule an appointment?",
    answer:
      "Scheduling an appointment at [Hospital Name] is easy! You can call us at [Phone Number] or use our online appointment booking system [Link to booking page]. Our team will work with you to find a convenient time for your visit.",
  },
  {
    id: 5,
    question: "What should I bring to my appointment?",
    answer:
      "Please bring your photo ID, insurance card, a list of any medications you are currently taking, and any relevant medical records. If it's your first visit, arrive 15 minutes early to complete the necessary paperwork.",
  },
  {
    id: 4,
    question: "Do you offer telemedicine services?",
    answer:
      "Yes, AusMed Hospital offers telemedicine services for non-emergency consultations. You can schedule a virtual appointment with one of our healthcare providers through our online portal. It's a convenient way to get medical advice from the comfort of your home",
  },
  {
    id: 5,
    question: "Where is AusMed Hospital located, and how can I get there?",
    answer:
      "[Hospital Name] is located at [Full Address]. You can find us easily using Google Maps [Link to Map], and we offer ample parking space for visitors. If you're using public transportation, check the local bus or train schedules for routes that stop near our facility.",
  },
  {
    id: 6,
    question: "What if I am not satisfied with your service?",
    answer:
      "You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best.",
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including major credit cards, debit cards, cash, and checks. We also offer payment plans for certain services to help make medical care more accessible.",
  },
  {
    id: 8,
    question: "How do I get in touch with a specific department?",
    answer:
      "You can contact any of our departments by calling our main line at [Main Phone Number] or visiting our [Contact Page] for a list of direct numbers for each department.",
  },
  {
    id: 9,
    question: "Are your facilities wheelchair accessible?",
    answer:
      "Yes, all of our facilities at Ausmed Hospital are fully wheelchair accessible. We also offer wheelchair assistance and transportation services for patients in need.",
  },
  {
    id: 10,
    question: "How can I get my medical records?",
    answer:
      "To request your medical records, please fill out the [Medical Records Request Form] on our website or contact our Medical Records department at [Phone Number]. We ensure your privacy and confidentiality while processing your request.",
  },
];

export { dataSlider, servicesData, gallery, Testimonials, faqs };
