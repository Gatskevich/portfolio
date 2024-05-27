import React from 'react'
import Image from 'next/image'

const PROJECTS = [
    {
        imageSrc: "/images/p1.jpg",
    }, 
    {
        imageSrc: "/images/p1.jpg",
    }, 
    {
        imageSrc: "/images/p1.jpg",
    }
]

const Projects = () => {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
            Pro<span className="text-yellow-400">ject</span>
            </h1>
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[4rem] text-white">
            {
                PROJECTS.map((item, index) => {
                    return (
                        <div key={index} className="transform cursor-pointer hover:-translate-y-6 transition-all 
                        duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                            <Image
                                src={item.imageSrc}
                                alt="portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                    )
                })
            }
        </div>
      </div>
    );
  };
  

export default Projects