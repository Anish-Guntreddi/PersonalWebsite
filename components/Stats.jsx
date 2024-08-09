"use client"
import { INTERNAL_HEADERS } from 'next/dist/shared/lib/constants'
import React from 'react'
import CountUp from 'react-countup'

const stats = [
    {
        num: 6,
        text:"Years of Experience"
    },

    {
        num: 5,
        text:"Projects Completed"
    },

    {
        num: 20,
        text:"Skills Mastered"
    },
]

const interests = [
    {
        area: "Artificial Intelligence"
    },

    {
        area: "Quantitative Finance"
    },

    {
        area: "Software Engineering"
    }
]

function Stats() {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none'>
            {stats.map((item, index) => {
                return (
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className="mb-20 text-4xl xl:text-6xl font-extrabold"/>
                    
                    <p className={`${
                        item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/80 mb-20`}>
                        {item.text}
                    </p>
                    </div>
                )
             })}
        </div>
        <h1 className='flex items-center justify-center text-5xl xl:text-7xl font-extrabold'>Areas Of Interest</h1>
        <div className='flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none'>
            {interests.map((item, index) => {
                return (
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start mt-10" key={index}>
                        <h1 className={`${
                        item.area.length < 15 ? "max-w-[150px]" : "max-w-[200px]"
                    } mb-20 text-3xl xl:text-4xl font-extrabold text-accent`}>{item.area}</h1>
                    </div>
                )
             })}
        </div>
      </div>
    </section>
  )
}

export default Stats
