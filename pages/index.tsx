import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNavigation from "@/Components/MobileNavigation";
import Navigation from "@/Components/Navigation";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Testimonial from "@/Components/Testimonial";
import { useState } from "react";

const HomePage = () => {
  const [isNavigationOpened, setIsNavigationOpened ] = useState(false);

  const openNavigation = () => {
    setIsNavigationOpened(true);
  };

  const closeNavigation = () => {
    setIsNavigationOpened(false);
  };
  
  return (
    <div className="owerflow-x-hidden">
      <div>
        <MobileNavigation isNavigationOpened={isNavigationOpened} closeNavigation={closeNavigation}/>
        <Navigation openNavigation={openNavigation}/>
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default HomePage;