import { Bars3Icon } from "@heroicons/react/20/solid"

interface NavigationProps {
  openNavigation: () => void;
}

const Navigation = ({ openNavigation }: NavigationProps) => {

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
                WEB
                <span className="text-yellow-300">DEV</span>
            </h1>
            <a href="#home" className="nav-link">HOME</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#projects" className="nav-link">PROJECTS</a>
            <a href="#blog" className="nav-link">BLOG</a>
            <a href="#contact" className="nav-link">CONTACT</a>
            <div onClick={openNavigation}>
                <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
            </div>
        </div>
    </div>
  )
}

export default Navigation;