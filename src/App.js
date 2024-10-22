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
      {/* <About /> */}
    </div>
  );
}

export default App;
