import { XMarkIcon } from "@heroicons/react/20/solid"
import React from 'react'


interface MobileNavigationProps {
  isNavigationOpened: boolean;
  closeNavigation: () => void;
}

const MobileNavigation = ({ isNavigationOpened, closeNavigation }: MobileNavigationProps) => {
  const navigationAnimation = isNavigationOpened ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div className={`fixed ${navigationAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <a href="#home" className="nav-link-mobile" onClick={closeNavigation}>HOME</a>
            <a href="#services" className="nav-link-mobile" onClick={closeNavigation}>SERVICES</a>
            <a href="#about" className="nav-link-mobile" onClick={closeNavigation}>ABOUT</a>
            <a href="#projects" className="nav-link-mobile" onClick={closeNavigation}>PROJECTS</a>
            <a href="#blog" className="nav-link-mobile" onClick={closeNavigation}>BLOG</a>
            <a href="#contact" className="nav-link-mobile" onClick={closeNavigation}>CONTACT</a>    
        </div>
        <div onClick={closeNavigation} className="absolute z-[100000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400">
            <XMarkIcon />
        </div>
    </div>
  )
}

export default MobileNavigation