"use client"
import React, { useState } from 'react'

import {motion} from 'framer-motion'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import {BsArrowUpRight, BsGit, BsGithub} from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';


const projects = [
  {
    num:"01",
    category: "Full Stack Application",
    title: "project 1",
    description: "Created a mock real esate application that allows you to search houses,list houses, and also view listings. Still working on adding additional authentication and more features",
    stack: [
      {
        name: "NextJs"
      },
      {
        name: "HTML"
      },
      {
        name: "TailwindCSS"
      },
      {
        name: "Supabase"
      },
      {
        name: "Clerk"
      },
      {
        name: "ReactJS"
      }
    ],
    image: "/assets/work/edp.svg",
    live: "https://edps-realestate.vercel.app/",
    liveStatus: "Live Status Exists",
    github: "https://github.com/Anish-Guntreddi/edps-final",
  },

  {
    num:"02",
    category: "Unsupervised Trading Algorithm",
    title: "Working on creating a trading algorithm using a K-means clustering machine learning algorithm to figure out what stocks to add to portfolio based off historical data. Using technical intdicators such as the ATR, RSI, MACD (Moving Average Convergence Divergence) and other indicators to train model and determine what stocks to add.",
    description: "Project Description",
    stack: [
      {
        name: "Python",
      },

      {
        name: "Jupyter Notebook"
      }
    ],
    image: "/assets/work/unsupervised.png",
    live: "",
    liveStatus: "Live Project Does Not Exist",
    github: "https://github.com/Anish-Guntreddi/AlgoBot",
  },

  {
    num:"03",
    category: "Machine Learning Algorithm Testing",
    title: "project 3",
    description: "Used Scikit-learn ML Algorithms to train test data sets",
    stack: [
      {
        name: "Python",
      },

      {
        name: "Jupyer Notebook"
      },
    ],
    image: "/assets/work/mlproject.png",
    live: "No Live Project for this",
    liveStatus: "No Live project exists",
    github: "https://github.com/Anish-Guntreddi/MachineLearningAlgorithms",
  },
]

function Work() {
  const[project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
        <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
          <div className='flex flex-col gap-[30px] h-[50%]'>
          <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
            {project.num}
          </div>
          <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
          <p className='text-white/60'>{project.description}</p>
          <ul className='flex gap-4'>
            {project.stack.map((item, index)=> {
              return (
                <li className='text-accent' key={index}>
                  {item.name}
                </li>
              )
            })}
          </ul>
          <div className='border border-white/20'></div>
          <div className='flex items-center gap-4'>
            {/*Live project button*/}
            <Link href={project.live} target="_blank">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                  <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{project.liveStatus}</p>
                  </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </Link>
            {/*Github Project Button*/}
            <Link href={project.github} target="_blank">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                  <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github Repository</p>
                  </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </Link>
          </div>
          </div>
        </div>
        <div className='w-full xl:w-[50%]'>
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((project, index)=> {
              return(
                <SwiperSlide key={index}>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                    {/*Image*/}
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-fit' alt=''/>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            {/* buttons */}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%)] xl:bottom-[calc(50%_-_250px)] xl: bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
            </Swiper> 
        </div>
      </div>
      </div>
    </motion.section>
  )
}

export default Work