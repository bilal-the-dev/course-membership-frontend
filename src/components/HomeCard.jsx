import React from 'react'
import CardPic from '../assets/card/Image.png'
import likeIcon from '../assets/card/Like.svg'
import { Link } from 'react-router-dom'
import { eye } from '../utils/index'
const HomeCard = ({instructor,heading,description,duration,id}) => {
  return (
    <Link to={`/course/${id}`} className='cursor-pointer  mx-auto sm:mx-0 bg-shaded-gray rounded-3xl '>
    <div className='flex flex-col w-full'>
    <div className='w-full h-full
    relative'>
        <img className='w-full h-full object-contain' src={CardPic} alt="" />
        <div className='absolute right-4 top-4 cursor-pointer'><img className='hover:scale-105 transition-all duration-200' src={likeIcon} alt="" /></div>
        </div>
    <div className='flex  px-2 py-2  flex-col '>
    <div className='p-1'>
      <p className='text-secondary-gray text-[13px]'>{instructor}</p>
    <h1 className='text-base text-primary_gold'>{heading}</h1>
    </div>
    <div className='px-1 py-4  pb-4' >
      <p className='text-secondary-gray text-base leading-tight'>{description}</p>
    </div>
    
<div className=' flex items-center '>
<div className='p-1 flex-1 leading-tight '>
    <p className='text-[13px] text-secondary-gray'>Duration</p>
    <div className='font-semibold '>{duration}</div>
    </div>
    <div  className=''>
      <img src={eye} alt="" />
</div>
<div>
  
</div>
</div>

   
    
    {/* <div className='p-1'>
    <button className='px-4 py-2 font-semibold cursor-pointer hover:bg-primary_gold/80 transition-all duration-300 bg-primary_gold rounded-sm text-black'>Watch now</button>
    </div> */}
    </div>
    
    </div>
    
    
    
    
    
    </Link>
  )
}

export default HomeCard