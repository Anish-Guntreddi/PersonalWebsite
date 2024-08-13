import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/Anish-Guntreddi"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/anish-guntreddi-409450204/"},
]

function Socials({containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return(
                <Link target="_blank" key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials
