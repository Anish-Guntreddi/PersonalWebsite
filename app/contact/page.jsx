"use client"
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/components/ui/select'

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa'

import {motion} from "framer-motion"


const info = [
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"479-402-4854"
  },
  {
    icon:<FaEnvelope/>,
    title:"Gmail",
    description:"anishguntreddi@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:"Address",
    description:"Cumming, Georiga 30040"
  },

]

function Contact() {

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="py-6">

      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/*Form*/}
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Lets work together</h3>
              <p className='text-white/60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa repudiandae perferendis ratione rem, asperiores tempore quaerat enim sunt. Mollitia ipsa reprehenderit velit error dignissimos excepturi recusandae. Asperiores libero molestiae ex.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="Firstname"/>
                <Input type="firstname" placeholder="Lastname"/>
                <Input type="firstname" placeholder="Email"/>
                <Input type="firstname" placeholder="Phone Number"/>
              </div>
              {/*Select*/}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select a Service
                      </SelectLabel>
                      <SelectItem value="est">Web Application Development</SelectItem>
                      <SelectItem value="mst">Mobile Application Development </SelectItem>
                      <SelectItem value="ast">AI Developemnt</SelectItem>
                      <SelectItem value="qst">Software Development</SelectItem>
                      <SelectItem value="dst">Data Analytics</SelectItem>
                      <SelectItem value="pst">Quantitative Finance/Algorithmic Trading</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>info</div>
        </div>
      </div>


    </motion.section>
  )
}

export default Contact