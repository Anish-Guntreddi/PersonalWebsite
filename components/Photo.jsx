"use client"

import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'


function Photo() {
  return (
    <div className='w-full h-full relative'>
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1, 
            transition:{delay: 2, duration: 0.4, ease:"easeIn"},
    }}>
        {/*Image*/}
            <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1, 
                transition:{delay: 2.4, duration: 0.4, ease:"easeInOut"},
        }}
            className='w-[325px] h-[300px] xl:w-[560px] xl:h-[350px] mix-blend-lighten mb-8'>
                <Image src="/assets/Professional_processed.jpeg" fill alt='' className='object-contain'/>

        <motion.svg className="w-[350px] xl:w-[600px] h-[350px] xl:h-[400px]" fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"        
        >
            <motion.circle
            cx="240"
            cy="245"
            r="260"
            stroke="#00b5ff"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{strokeDasharray:"24 15 0 0"}}
            animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            />
        </motion.svg>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo
