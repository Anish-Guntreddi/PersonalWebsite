import React from 'react'
import {motion} from 'framer-motion'

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: { 
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index fat staggered delay

const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1
}

function Stairs() {
  return( 
  <>

  {
    /* we will render each singular div in this section
    each div will have the same animation style from the stair animation obkject mentioned above
    the delay will be calculated based on the reveresed index and creates a staggering stair effect
    */
}
{[...Array(6)].map((_, index) => {
    return(
    <motion.div 
    key={index} 
    variants={stairAnimation} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{
        duration: 0.4,
        ease: "easeInOut",
        delay: reverseIndex(index) * 0.1,
    }}
    className="h-full w-full bg-blue-800 relative"
    />
    )
})}
  </>

)}

export default Stairs
