 import React from 'react'
import { DISHES } from '../constants/index'
import DishCard from './DishCard'
import {motion} from "framer-motion"
 
 const Dishes = () => {
   return (
    <section className='container mx-auto py-16' id='dishes'>
        <motion.h2 
        initial={{opacity:0 , y:50}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        transition={{duration:0.6,  delay:0.2 }} 
        className='mb-8 text-center  text-5xl tracking-tighter lg:text-4xl' 
        >Our Dishes</motion.h2>

  
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
          {DISHES.map((project, index)=> (
           <DishCard  key={index} project={project} />    
          ))}

    
          </div>
    </section> 
   )
 }
 
 export default Dishes