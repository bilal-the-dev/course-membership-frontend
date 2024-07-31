import React from 'react'
import { warning } from '../utils/index.js'

const Modal = ({showModal,setShowModal}) => {
  return (
    <div className='text-black p-8 font-Roboto-Flex bg-black bg-opacity-25 backdrop-blur-sm z-50 fixed inset-0 flex justify-center items-center'>

<div className='w-full sm:w-[90%] mx-auto lg:w-[600px] '>
<div className='py-8 px-4  rounded-sm shadow-lg shadow-blue-950 bg-blackish-gray'>
<div className='py-4 px-2'>
<img src={warning} alt="" />
</div >
<div className='flex px-2    flex-col gap-y-2 py-1 text-white'>
    <h1>Warning</h1>
    <p className='text-secondary-gray text-sm'>Do you want to delete it?</p>
</div>

<div className='p-4'>
    <div className='flex gap-x-2'>
        <button onClick={()=>setShowModal(!showModal)} className='flex-1 text-black bg-white hover:bg-white/70 transition-all duration-200  rounded-md px-6 py-2'>Cancel</button>
        <button  className='flex-1 text-white hover:bg-[#EE0606]/80 bg-[#EE0606]  transition-all duration-200 rounded-md bg px-6 py-2'>Delete</button>
    </div>
</div>

</div>


</div>

    </div>
  )
}

export default Modal