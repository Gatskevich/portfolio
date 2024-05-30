import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className="pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading">
            Education & <span className="text-yellow-400">Skills</span>
        </h1>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
            <div>
                <SkillsItem title="React Developer" year="2014 - 2018" />
                <SkillsItem title="React Native Developer" year="2016- 2020" />
                <SkillsLanguage 
                    skillsLanguageList={
                        [
                            {skill: "HTML", level: "w-[91%]"}, 
                            {skill: "CSS", level: "w-[88%]"}, 
                            {skill: "Javascript", level: "w-[90%]"}
                        ]
                    }
                />
            </div>
            <div>
                <SkillsItem title=".Net Developer" year="2018 - 2021" />
                <SkillsItem title="React Developer" year="2021 - 2023" />
                <SkillsLanguage 
                    skillsLanguageList={
                        [
                            { skill: "React", level: "w-[90%]"}, 
                            { skill: "Next js", level: "w-[78%]"}, 
                            { skill: "typescript", level: "w-[60%]" }
                        ]
                    }
                />
            </div>
        </div>
    </div>
  )
}

export default Skills