"use client"

import {FaJs, FaReact, FaPython, FaJava ,FaNodeJs} from 'react-icons/fa'

import {SiTailwindcss, SiNextdotjs, SiMongodb, SiMongoose, SiTensorflow, SiPytorch, SiClerk, SiSupabase, SiSwift, SiXcode, SiMysql, SiCplusplus, SiC, SiCsharp, SiLaravel, SiFirebase, SiExpress, SiPhp, SiMariadb,SiSwagger, SiDocker,SiSap, SiSpringboot, SiScikitlearn, SiJupyter, SiR, SiRstudio, SiVisualbasic} from 'react-icons/si'

import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@radix-ui/react-tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import {motion} from "framer-motion"
import { Slot } from '@radix-ui/react-slot'

const about = {
  title: "About Me",
  description:"About me Description",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Anish Guntreddi"
    },

    {
      fieldName: "Experience",
      fieldValue: "6 Years"
    },

    {
      fieldName: "Email",
      fieldValue: "anishguntreddi@gmail.com"
    },

    {
      fieldName: "Phone",
      fieldValue: "(+1) 479-402-4854"
    },

    {
      fieldName: "Languages",
      fieldValue: "English, Spanish"
    },

    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },

  ]
}


const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: "Work Description",
  items: [

    {
      company: "Headstarter",
      position: "Software Engineering Fellow",
      duration: "Jun 2024 - Present",
    },

    {
      company: "Ducab Cable Company",
      position: "Quant Finance/Data Science Intern",
      duration: "Jun 2024 - August 2024"
    },

    {
      company: "University of Miami Cancer Research Labratory",
      position: "Student Researcher",
      duration: "Nov. 2023 - Present"
    },

    {
      company: "AVAS Technoloy",
      position: "Software Engineering Intern",
      duration: "Aug. 2023 - Dec. 2023"
    },

    {
      company: "Earlinton Heights Elementary School",
      position: "Weekend STEM Instructor",
      duration: "Sep. 2022 - Apr. 2023"
    },

    {
      company: "Walmart Global Technology",
      position: "Supply Chain Intern",
      duration: "Oct. 2021 - May 2022"
    },

    {
      company: "AEOP UNITE",
      position: "Summer Research Intern",
      duration: "May 2021 - Jul. 2021"
    },

    {
      company: "Walmart Global Technology",
      position: "Mobile App Dev Intern",
      duration: "Oct. 2020 - May 2021"
    },
    

  ]
}


const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  description: "Currently at the University of Miami as a triple major pursuing a Bachelor of Science in Computer Science, Data Science and Artificial Intelligence, and Applied Statistics in Math",
  items: [

    {
      institution: "University of Miami",
      degree: "Computer Science",
      duration: "August 2022 - May 2026"
    },

    {
      institution: "University of Miami",
      degree: "Data Science/Artificial Intelligence",
      duration: "August 2022 - May 2026"
    },

    {
      institution: "University of Miami",
      degree: "Math in Applied Statistics",
      duration: "August 2022 - May 2026"
    },

    {
      institution: "Bentonville High School",
      degree: "High School Diploma",
      duration: "August 2018 - May 2022"
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "As a dedicated and versatile developer, I bring a robust skill set that spans across Software Development, Data Analysis, Artififical Intelligence, and Algorithmic Trading for Quantitative Finance. My expertise lies in leveraging modern technologies to deliver efficient, scalable, and user-centric solutions.",
  skillList: [
    {
      icon: <FaJava/>,
      name: "Java"
    },

    {
      icon: <FaPython/>,
      name: "Python"
    },


    {
      icon: <SiTensorflow/>,
      name: "TensorFlow"
    },


    {
      icon: <SiPytorch/>,
      name: "Pytorch"
    },



    {
      icon: <FaJs/>,
      name: "JavaScript"
    },

    {
      icon: <FaReact/>,
      name: "React JS"
    },


    {
      icon: <FaNodeJs/>,
      name: "Node JS"
    },


    {
      icon: <SiNextdotjs/>,
      name: "Next JS"
    },


    {
      icon: <SiTailwindcss/>,
      name: "Tailwind CSS"
    },

    {
      icon: <SiMongodb/>,
      name: "MongoDB"
    },

    {
      icon: <SiClerk/>,
      name: "Clerk"
    },


    {
      icon: <SiSupabase/>,
      name: "Supabase"
    },


    {
      icon: <SiMysql/>,
      name: "SQL/MySQL"
    },



    {
      icon: <SiMongoose/>,
      name: "Mongoose"
    },


    {
      icon: <SiSwift/>,
      name: "Swift"
    },


    {
      icon: <SiXcode/>,
      name: "Xcode"
    },

    {
      icon: <SiCplusplus/>,
      name: "C++"
    },
    
    {
      icon: <SiC/>,
      name: "C"
    },

    {
      icon: <SiCsharp/>,
      name: "C#"
    },

    {
      icon: <SiLaravel/>,
      name: "Laravel"
    },

    {
      icon: <SiFirebase/>,
      name: "Firebase"
    },

    {
      icon: <SiExpress/>,
      name: "Express"
    },

    {
      icon: <SiPhp/>,
      name: "PHP"
    },

    {
      icon: <SiMariadb/>,
      name: "MariaDB"
    },

    {
      icon: <SiSwagger/>,
      name: "Swagger"
    },

    {
      icon: <SiDocker/>,
      name: "Docker"
    },

    {
      icon: <SiSap/>,
      name: "SAP"
    },

    {
      icon: <SiSpringboot/>,
      name: "Springboot"
    },


    {
      icon: <SiScikitlearn/>,
      name: "Sci-kit Learn"
    },

    {
      icon: <SiR/>,
      name: "R"
    },

    {
      icon: <SiJupyter/>,
      name: "JupyterLab/Jupyter Notebook"
    },

    {
      icon: <SiRstudio/>,
      name: "Rstudio"
    },

    {
      icon: <SiVisualbasic/>,
      name: "Excel Visual Basic"
    },

  ]
}


const certifications = {

  icon: '/assets/resume/badge.svg',
  title: "Certifications",
  description: "I have sucessfully achieved the following certifications",
  items: [
    {
      name: "Introduction to Programming using JavaScript",
      type: "Microsoft Technial Associate",
      institution: "Microsoft"
    },

    {
      name: "Introduction to Programming using Python",
      type: "Microsoft Technial Associate",
      institution: "Microsoft"
    },

    {
      name: "Introduction to Programming using HTML and CSS",
      type: "Microsoft Technial Associate",
      institution: "Microsoft"
    },

    {
      name: "Introduction to Programming using Java",
      type: "Microsoft Technial Associate",
      institution: "Microsoft"
    },

    {
      name: "Machine Learning A-Z",
      type: "Udemy Certification",
      institution: "Udemy"
    },

  ]
}


function Resume() {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1, transition: {delay: 2.4, duration:0.4, ease:"easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py"
    > 
    <div className="container mx-auto">
      <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
        <TabsList className="flex flex-col w-full mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="certification">Certifications</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        {/*Content*/}
        <div className='min-h-[70vh] w-full'>
          {/*Experience Section*/}
          <TabsContent value="experience" className="w-[700px]">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
              <ScrollArea className="h-[400px] xl:w-[700px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience.items.map((item, index)=> {
                    return(
                      <li key={index} className="bg-[#232329] h-[184] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1">
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[300px] min-h-[30px] text-center xl:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          {/* Dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60 xl:w-[300px]'>{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/*Education Section*/}
          <TabsContent value="education">
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
              <ScrollArea className="h-[400px] xl:w-[800px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education.items.map((item, index)=> {
                    return(
                      <li key={index} className="bg-[#232329] h-[184] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1">
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[300px] min-h-[30px] text-center xl:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          {/* Dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span><p className='text-white/60 xl:max-w-[250px]'>{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/*Skills Section*/}
          <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className=' justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 xl:gap-[50px] xl:grid-cols-4 mt-5' >
                {skills.skillList.map((skill, index)=> {
                  return(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip className>
                          <TooltipTrigger className='w-[200px] h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group xl:h-[110px] xl:w-[110px]'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                            {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                            </TooltipContent> 
                        </Tooltip>
                        </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
          {/*About Section*/}
          <TabsContent value="about" className="w-full text-center xl:text-left xl:w-[1000px]">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{about.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item, index)=> {
                  return(
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className=''>{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="certification">
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{certifications.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{certifications.description}</p>
              <ScrollArea className="h-[400px] xl:w-[700px]">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {certifications.items.map((item, index)=> {
                    return(
                      <li key={index} className="bg-[#232329] h-[184] py-6 px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1">
                        <span className='text-accent xl:w-[300px]'>{item.type}</span>
                        <h3 className='text-xl max-w-[300px] min-h-[30px] text-center xl:text-left'>{item.name}</h3>
                        <div className='flex items-center gap-3'>
                          {/* Dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60 xl:w-[300px]'>{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
        </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume