import React from 'react'
import Image from 'next/image'
import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid';

const BLOGS = [
    {
        data: "August 29, 2022",
        imageSrc: "/images/blog1.jpg",
        title: "How to build a website with Next.js and Tailwind CSS",
        numberOfComments: 10
    },
    {
        data: "December 12, 2021",
        imageSrc: "/images/blog2.jpg",
        title: "React vs. Angular vs. Vue?",
        numberOfComments: 10
    },
    {
        data: "May 15, 2021",
        imageSrc: "/images/blog3.jpg",
        title: "React Native vs. Expo",
        numberOfComments: 10
    }
]

const Blog = () => {
    return (
      <div id="blog" className="pt-[8rem] pb-[4rem] bg-[#02050a]">
        <h1 className="heading">
          MY <span className="text-yellow-400">BLOG</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
            {
                BLOGS.map((item, index) => (
                    <div>
                        <div className="w-[100%] relative h-[400px]">
                        <Image src={item.imageSrc} alt="blog" layout="fill" className="object-cover" />
                        </div>
                        <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                                {item.data}
                            </div>
                            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                                <div className="flex items-center space-x-3">
                                    <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                                    <p className="text-white">By Sajal</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                                    <p className="text-white">{item.numberOfComments}</p>
                                </div>
                            </div>
                            <p className="mt-[1rem] text-white text-[18px] font-semibold">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    );
  };
  

export default Blog