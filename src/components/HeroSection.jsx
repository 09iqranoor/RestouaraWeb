import React from 'react'

import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpeg"
 import {motion} from "framer-motion"
 const HeroSection = () => {
  return (
    <section className='relative flex h-screen itmes-center justify-center'>
          
          <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
            <video src={video} className='h-full object-cover w-full' muted autoPlay loop playsInline poster='hero'>

            </video>
          </div>
   <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>

           <div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
 <motion.img  
    initial={{opacity:0 , x:-1000 }}
    animate={{opacity:1 , x:0}}
    transition={{duration:0.5, delay:0.2}} 
 src={logo} alt="resturent"  className='w-full p-4'/>
    {/* <p className='p-4 text-lg text-white tracking-tighter'>Paris</p> */}
           </div>
            </section>
  )
} 

export default HeroSection