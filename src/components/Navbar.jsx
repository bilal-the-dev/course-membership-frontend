import React from 'react'
import { bell, cart } from '../utils/index.js'
const Navbar = () => {
  return (
    <div className='font-Roboto-Flex'>
      <nav className=' gap-16 flex justify-end items-center p-4 '>
        <div className='flex gap-8'>
          <div><img src={bell} alt="" /></div>
          <div><img src={cart} alt="" /></div>
        </div>
        <div className=''><button className='px-5  hover:bg-primary_gold/80 transition-all duration-300 rounded-md text-black py-2 bg-primary_gold text-base'>Sign Up</button></div>

      </nav>
      <hr className=' border-0 h-[0.5px] bg-gradient-to-l from-primary_gold  to-black' />
      {/* <hr className='' /> */}
    </div>
  )
}

export default Navbar