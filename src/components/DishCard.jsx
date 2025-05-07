import React from 'react'
import { AiFillStar } from "react-icons/ai"; 
const DishCard = ({project}) => {
  return (
    <div>
        <img src={project.image}
         alt={project.title} 
         className='rouded-3xl p-2' />
    <div className='p-4'>
        <h3 className='mb-2 text-2xl font-bold tracking-tighter'>
            {project.title}
            </h3>
          <p className='text-sm'>{project.description}</p> 
              </div>
              <div className='flex justify-between flex-wrap p-4'>  
               
                  <h3 className=' mb-4 text-2xl font-bold tracking-tighter text-green-600 '> $ {project.price}</h3>
           <button className='bg-transparent w-full hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded  '>Add to cart</button>

              </div> 
     </div>
  )
}

export default DishCard 