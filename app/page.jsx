"use client"
import React from "react"
import {Button} from '@/components/ui/button'
import {FiDownload} from 'react-icons/fi'
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import Link from "next/link"




export default function Home() {



  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Quant, Software, AI Developer</span>
          <h1 className="h1 mt-6">
            Hello I'm <br/> <span className="text-accent">Anish Guntreddi</span>
          </h1>
          <br/>
            <p className="max-w-[500px] mb-9 text-white/80">Hello! I am Anish Guntreddi. As a first-generation student at the University of Miami, I have a strong passion for education and exploring the dynamic intersection of different disciplines. <br/> <br/> My academic focus is on Comprehensive Computer Science, Data Science, Artificial Intelligence, and also a Major in Math with Applied Statistics.</p>
            {/*Socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="./AnishResume3.pdf" target="_blank" alt="resume" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV/Resume</span>
                <FiDownload className="text-xl"/>
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
        </div>
        {/*Photo Section*/}
        <div className="order-1 xl:order-none  mb-12 xl:mb-0">
          <Photo/>
          </div>
      </div>
    </div>
    <Stats/> 
  </section>
}
