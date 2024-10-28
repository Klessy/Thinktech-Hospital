import "./App.css";
import {
  Nav,
  Hero,
  About,
  Services,
  WhyUs,
  Gallery,
  Testimonial,
  FAQs,
  Contact,
  Footer,
  FloatingNav,
} from "./components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Gallery />
      <Testimonial />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
      {/* <About /> */}
    </div>
  );
}

export default App;
