"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import React from 'react'

const services = [
  {
    num: "01",
    title: "Software Engineering Development",
    description: "Worked with various frameworks such as React JS, Next JS, and also worked with frameworks like Laravel, which is a framework based off PHP. Incorporated the use of Database services such as MongoDB, Supabase DB and Springboot.",
    href:""
  },

  {
    num: "02",
    title: "Artificial Intelligence Development",
    description: "Worked on implementing machine learning algorithms on sample training sets. Also am currenlty working on deep learning concepts such as training Convolutional Neural Networks. Worked with libraries in python such as TensorFlow and Pytorch to help train models.",
    href:""
  },

  {
    num: "03",
    title: "Algorithmic Trading/Quantitative Finance Analysis",
    description: "I began with simple trading algorithms on the market but am currently working on understanding more about Quantitative Finance and further implementing machine learning Quantitative Financial models.",
    href:""
  },

  {
    num: "04",
    title: "Data Science and Visualization",
    description: "Worked with both Python and R to create Statistical models for my current research labs. Created models such as volcano plots with differential gene expression. Also created violin plots and am currently implementing PCA for dimensionality reduction of large datasets from my research labs for more effective generation while preserving the quality of data.",
    href:""
  },
]

import {motion} from 'framer-motion'
import Link from 'next/link'

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity: 1, transition: {
          delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link> 
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className='border-b border-white/20'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
