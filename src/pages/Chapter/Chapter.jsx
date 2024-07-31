import React,{useState} from 'react'
import { icon, image, heart, share,plus,rowImg,up,edit,down,del,video } from '../../utils/index.js'
import { Navbar, Sidebar, OpenClose,Modal } from '../../index.js'
import background from '../../../src/assets/bg.svg'




const Chapter = () => {
 const [showModal,setShowModal]=useState(false)
const chapters=[
{
    chapter:'Chapter 1',
    description:'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    vid_quantity:'3',
    videos:[
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
    ]
},
{
    chapter:'Chapter 1',
    description:'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    vid_quantity:'3',
    videos:[
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
    ]
},
{
    chapter:'Chapter 1',
    description:'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    vid_quantity:'3',
    videos:[
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
        {
            videoname:'video name',
            duration:'01:02 hr'
        },
    ]
},
]


  return (
    <>
    <div className="bg-[url('../../../src/assets/bg.svg')] bg-center font-Roboto-Flex bg-cover min-h-screen w-screen overflow-x-hidden  h-screen relative">
    <Sidebar />

    <div className='ml-2 lg:ml-[280px]  text-white    '> {/* Adjust ml value to match sidebar width */}
      {/* Navbar starts here */}
      <Navbar />
      {/* main content goes here */}
      <div className=' pt-12 pb-3 lg:px-4 '>
        <div className=" text-xl font-semibold flex items-center"><img src={icon} alt="" /><span className='ml-2'>Courses</span></div>

      </div>
      <div className='text-white text-base lg:px-5 flex gap-x-1 lg:gap-x-2'>
        <span>Home</span>
        <span>&#10095;</span>
        <span>UX Design course</span>
        <span>&#10095;</span>
        <span>Welcome to course</span>
      </div>

      <div className='text-white font-semibold  lg:px-5 pt-8 pb-12 xl:pb-16 text-2xl xl:text-4xl'>
        Welcome to UX Design course
      </div>
      {/* picture and text layout */}
      <div className='w-full  pb-4 pl-0 sm:pl-6 2xl:pl-12'>
        <div className="w-full flex flex-col lg:p-2 h-full ">
          <div className='w-full lg:w-[55%] pr-2 '><img className='w-full object-cover ' src={image} alt="" /></div>
          <div className='mx-auto  mt-2 lg:mx-0 lg:w-[55%] items-center    w-full px-1.5 py-4 lg:px-0   flex flex-row gap-x-8   lg:py-4 '>
            <div className='flex flex-col gap-y-1'>
              <h2>Instuctor name</h2>
              <p className='text-white/60 text-sm leading-tight'>John alver</p>
            </div>
            <div className='border-l-2 border-white w-0.5 h-12'></div>
            <div className='flex flex-col gap-y-1'>
              <h2>Duration</h2>
              <p className='text-white/70 leading-tight text-sm '>3 hrs | 58 mins</p>
            </div>
            <div className='border-l-2 border-white w-0.5 h-12'></div>

            <div className=' flex  gap-x-1 lg:gap-4'>
              <div><img className='cursor-pointer hover:scale-105 transition-all duration-300' src={heart} alt="" /></div>
              <div><img className='cursor-pointer hover:scale-105 transition-all duration-300' src={share} alt="" /></div>
            </div>
          
          </div>

        </div>


      </div>
      <div className='flex py-4  justify-end w-full'>
       <button className='px-5 mr-8 flex justify-center gap-x-2 items-center py-2 font-Roboto-Flex text-black text-sm bg-primary_gold hover:bg-primary_gold/80 transition-all duration-300'> <span><img src={plus} alt="" srcset="" /></span>Add new Chapter</button>
      </div>


{chapters.map((item,index)=>(
  <OpenClose
  id={index}
   chapter={item.chapter}
   description={item.description}
    vid_quantity={item.vid_quantity}
    videos={item.videos}
    setShowModal={setShowModal}
    showModal={showModal}
/>

))}
    






    </div>



  </div>
{
    showModal && (
        <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        />
    )
}
  </>
  )
}

export default Chapter