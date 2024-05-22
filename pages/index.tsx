import Hero from "@/Components/Hero";
import MobileNavigation from "@/Components/MobileNavigation";
import Navigation from "@/Components/Navigation";
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
      </div>
    </div>
  );
}

export default HomePage;