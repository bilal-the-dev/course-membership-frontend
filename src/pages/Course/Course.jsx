import React from 'react'
import { useParams } from 'react-router-dom';
import { icon, image, heart, share } from '../../utils/index.js'
import { Navbar, Sidebar, CourseCard } from '../../index.js'
const chapters = [
  { chapter: 'Chapter 01', duration: '60 hrs', },
  { chapter: 'Chapter 02', duration: '60 hrs' },
  { chapter: 'Chapter 03', duration: '60 hrs' },
  { chapter: 'Chapter 04', duration: '60 hrs', isLocked: true },
  { chapter: 'Chapter 05', duration: '60 hrs', isLocked: true },

 
 
 



];



const Course = () => {
  const { id } = useParams();
  console.log(id);
  // const totalItems = chapters.length;
  // const itemsPerRow = 3;
  // const placeholdersNeeded = (itemsPerRow - (totalItems % itemsPerRow)) % itemsPerRow;
  
  // const updatedChapters = [...chapters];
  // for (let i = 0; i < placeholdersNeeded; i++) {
  //   updatedChapters.push({ placeholder: true });
  // }
  
  return (
    <div className=" bg-[url('../../../src/assets/bg.svg')] bg-center font-Roboto-Flex bg-cover min-h-screen w-screen overflow-x-hidden  relative">
      <Sidebar />

      <div className='ml-2 lg:ml-[280px]  text-white    '> {/* Adjust ml value to match sidebar width */}
        {/* Navbar starts here */}
        <Navbar />
        {/* main content goes here */}
        <div className='px-2 lg:px-1'>
        <div className=' pt-12 pb-3 lg:px-4  '>
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
          <div className="w-full flex flex-col lg:flex-row lg:p-2 h-full ">
            <div className='w-full lg:w-[55%] pr-2 '><img className='w-full object-cover ' src={image} alt="" /></div>
            <div className='mx-auto items-center lg:items-start  w-full px-1.5 py-4 lg:px-0  lg:w-[45%] flex flex-row lg:flex-col  justify-between lg:py-2 lg:pl-24 '>
              <div>
                <h2>Instuctor name</h2>
                <p className='text-white/60 text-sm leading-tight'>John alver</p>
              </div>
              <div>
                <h2>Duration</h2>
                <p className='text-white/70 leading-tight text-sm '>3 hrs | 58 mins</p>
              </div>
              <div className=' flex gap-x-1 lg:gap-4'>
                <div><img className='cursor-pointer hover:scale-105 transition-all duration-300' src={heart} alt="" /></div>
                <div><img className='cursor-pointer hover:scale-105 transition-all duration-300' src={share} alt="" /></div>
              </div>
              <div className=''>
                <button className='lg:px-4 lg:py-2 py-2 px-1  font-semibold cursor-pointer text-sm hover:bg-primary_gold/80 transition-all duration-300 bg-primary_gold rounded-sm text-black'>Watch now</button>
              </div>
            </div>

          </div>


        </div>

        <div className="w-full p-8 py-16">

          <div className={`grid    grid-cols-1  lg:grid-cols-3  gap-5`}>
  
            {chapters.map((item, index) => {
              const rowNumber = Math.floor(index / 3);
              const isLastRow = Math.ceil(chapters.length / 3) === rowNumber + 1;
                 const isRTLRow = Math.floor(index / 3) % 2 === 0;
              // const alignment = (Math.floor(index / 3) % 2 === 0) ? 'justify-start mr-28' : 'justify-end ml-28';
              const alignment = isRTLRow ? 'justify-end mr-28' : 'justify-start ml-28';              
              return (

                <React.Fragment key={index}>
                  <div className={`flex  flex-col lg:flex-row   w-full lg:ml-4 gap-x-4     justify-between items-center `}>
             

                    <CourseCard
                    id={index}
                      chapter={item.chapter}
                      duration={item.duration}
                      isLocked={item.isLocked}
                    />
                    {(index + 1) % 3 !== 0 && index !== chapters.length - 1 && <div className='lg:w-12  w-0.5 mt-4 lg:mt-0 lg:h-0.5 h-12 text-primary_gold text-lg text-center  lg:mx-auto bg-primary_gold' >
                      <div className='hidden lg:block'>{isLastRow?index:index+1}</div>
                      </div>}
                    {(index + 1) % 3 === 0 && index < chapters.length - 1 && (
  <div className='block lg:hidden lg:w-12 w-0.5 mt-4 lg:mt-0 xl:h-0.5 h-12 lg:mx-auto bg-primary_gold' />
)}             </div>
                  {(index + 1) % 3 === 0 && index !== chapters.length - 1 && (
                    <div className={`hidden  lg:block col-span-3`}>
                      <div className={`flex ${alignment} p-3 max-w-[900px]  2xl:max-w-[1050px] 3xl:max-w-[1180px]
        4xl:max-w-[1280px] 5xl:max-w-[1400px] `}>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
     {/* <div className="flex   flex-wrap -mx-4">
      {chapters.map((item, index) => 
      
      {
        const rowNumber = Math.floor(index / 3);
        const isLastRow = Math.ceil(chapters.length / 3) === rowNumber + 1;
        const alignment = (Math.floor(index / 3) % 2 === 0) ? 'justify-end mr-28' : 'justify-start ml-28';       
        const isEndOfRow = (index + 1) % 3 === 0;
         // Determine the current row number (0-based index for rows)

    
    // Alternate margin classes based on the row number
    const marginClass = rowNumber % 2 === 0 ? 'mr-auto' : 'ml-auto';
      return(
        <React.Fragment key={index}>
        <div key={index}  className={`w-full   sm:w-1/2  lg:w-1/3 px-4  mb-4 `}
>
           <div className={` lg:gap-x-3 3xl:gap-x-12  flex lg:flex-row flex-col items-center   `} key={index}>
          <CourseCard
            chapter={item.chapter}
            duration={item.duration}
            isLocked={item.isLocked}
          />
           {(index + 1) % 3 !== 0 && index !== chapters.length - 1 && <div className='lg:w-12 text-center  w-0.5 mt-4 lg:mt-0 lg:h-0.5 h-12 text-primary_gold text-lg lg:-mr-32 bg-primary_gold' >
           <div className='hidden lg:block'> {isLastRow?index:index + 1}</div>
            
            </div>}
           {(index + 1) % 3 === 0 && index < chapters.length - 1 && (
  <div className='block lg:hidden lg:w-12 w-0.5 mt-4 lg:mt-0 xl:h-0.5 h-12 lg:mx-auto bg-primary_gold' />
)}   


          </div>
       
        </div>
        {isEndOfRow && index !== chapters.length - 1 && !item.placeholder && (
          <div
            className={`w-full flex ${alignment} max-w-[900px] 2xl:max-w-[1050px] 3xl:max-w-[1180px] 4xl:max-w-[1280px] 5xl:max-w-[1400px]`}
            key={`empty-${index}`}
          >
            <div className="h-12 w-0.5 "></div>
          </div>
        )}
        </React.Fragment>
      )})}
    </div> */}




 {/* <div>
      {chunkedChapters.map((chunk, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;
        const alignment = isEvenRow ? 'justify-start' : 'justify-end';

        return (
          <React.Fragment key={rowIndex}>
            <div className={`flex flex-wrap -mx-4 ${alignment}`}>
              {chunk.map((item, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
                  <div className='border-2 flex items-center gap-x-3 border-red-600'>
                    <CourseCard
                      chapter={item.chapter}
                      duration={item.duration}
                      isLocked={item.isLocked}
                    />
                    {(index + 1) % 3 !== 0 && index !== chapters.length - 1 && (
                      <div className='lg:w-12 w-0.5 mt-4 lg:mt-0 lg:h-0.5 h-12 lg:mx-auto bg-primary_gold' />
                    )}
                    {(index + 1) % 3 === 0 && index < chapters.length - 1 && (
                      <div className='block lg:hidden lg:w-12 w-0.5 mt-4 lg:mt-0 xl:h-0.5 h-12 lg:mx-auto bg-primary_gold' />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {chunk.length < 3 && (
              <div className="flex flex-wrap -mx-4">
                {Array.from({ length: 3 - chunk.length }).map((_, emptyIndex) => (
                  <div key={`empty-${emptyIndex}`} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
                    <div className="border-2 flex items-center gap-x-3 border-transparent h-24"></div>
                  </div>
                ))}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div> */}
    
        </div>

      </div>



    </div>
    </div>
    
  )
}

export default Course