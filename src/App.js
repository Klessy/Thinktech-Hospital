import "./App.css";
import { Nav, Hero, About, Services } from "./components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <About />
      {/* <About /> */}
    </div>
  );
}

export default App;
