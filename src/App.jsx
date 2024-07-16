import About from "./Containers/About";
import Campaign from "./Containers/Campaign";
import Chapters from "./Containers/Chapters";
import CTA from "./Containers/CTA";
import Hero from "./Containers/Hero";
import Pricing from "./Containers/Pricing";
import Testimonials from "./Containers/Testimonials";

function App() {
  return (
    <div>
      <Hero />
      <Campaign />
      <Chapters />
      <About />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
}

export default App;
