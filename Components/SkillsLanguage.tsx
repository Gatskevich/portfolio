import React from 'react'
import { ISkillsLanguage } from "@/interfaces/ISkillsLanguage";

interface SkillsLanguageProps {
  skillsLanguageList: ISkillsLanguage[];
}

const SkillsLanguage = ({ skillsLanguageList }: SkillsLanguageProps) => {
  return (
    <div>
      {
        skillsLanguageList.map((item, index) => {
          const { skill, level } = item;

          return (
            <div className="relative mb-[3rem]" key={index}>
              <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
                {skill}
              </h1>
              <span className={`${level} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
          )
        })
      }
    </div>
  )
}

export default SkillsLanguage