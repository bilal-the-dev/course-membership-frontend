import React from 'react'
import { useParams } from 'react-router-dom';
import cardPic from '../../assets/card/Image.png'
import { Sidebar, Navbar, HomeCard } from '../../index.js'
const Home = () => {

  const homeData = [
    {
      instructor: "Instructor name",
      heading: "UX Design",
      description: "UX design, or User Experience design, focuses on creating intuitive, efficient, and enjoyable interactions between users and products",
      duration: "60 hrs"
    },
    {
      instructor: "Instructor name",
      heading: "UX Design",
      description: "UX design, or User Experience design, focuses on creating intuitive, efficient, and enjoyable interactions between users and products",
      duration: "60 hrs"
    },
    {
      instructor: "Instructor name",
      heading: "UX Design",
      description: "UX design, or User Experience design, focuses on creating intuitive, efficient, and enjoyable interactions between users and products",
      duration: "60 hrs"
    }

  ]


  return (
    <div className="bg-[url('../../../src/assets/bg.svg')] bg-center font-Roboto-Flex bg-cover min-h-screen w-screen overflow-x-hidden  h-screen relative">
      <Sidebar />

      <div className='ml-2 lg:ml-[280px]  text-white    '> {/* Adjust ml value to match sidebar width */}
        {/* Navbar starts here */}
        <Navbar />
        {/* main content goes here */}
        <div className=' pt-12 pb-3 px-4 '>
          <div className="border-l-2 border-primary_gold  text-xl font-semibold"><span className='ml-2'>Courses</span></div>
          <div className=" text-lg  text-secondary-gray "><span className='ml-3'>Top 10 advanced courses of 2024</span></div>

        </div>


        <div className=' grid grid-cols-1 gap-y-8 md:gap-y-0 justify-center items-center sm:grid-cols-2 md:grid-cols-3 p-4 lg:p-8 gap-3 xl:gap-5'>

          {/* //card here */}

          {
            homeData.map((item, index) => (
              <HomeCard
                key={index}
                id={index}
                instructor={item.instructor}
                heading={item.heading}
                description={item.description}
                duration={item.duration}
              />
            ))
          }














        </div>




      </div>



    </div>
  )
}

export default Home