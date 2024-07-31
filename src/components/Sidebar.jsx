import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { BsFilterLeft } from "react-icons/bs";
import { logo, circle, symbol, homeIcon, homeGray } from '../utils/index.js'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const open = () => {
        document.querySelector('.sidebar').classList.toggle('left-[-280px]')
    }

    return (
        <div className='font-Roboto-Flex'>
            <span className='absolute text-white text-4xl top-5 left-4  cursor-pointer'>
                <div className='px-2 rounded-md'>
                    <BsFilterLeft onClick={open} color='white' />
                </div>
            </span>
            <div className='sidebar z-10  fixed top-0 bottom-0 lg:left-0 left-[-280px] py-2 w-[280px] overflow-y-hidden text-center  overflow-x-hidden bg-primary_grey flex flex-col h-full '>
                <div className='text-gray-100 text-xl'>
                    <div className='p-2.5 mt-1 flex items-center'>
                        <img src={logo} alt="" />
                        <div className=' ml-20 cursor-pointer lg:hidden'>
                            <RxCross2 onClick={open} />
                        </div>
                    </div>
                </div>

                <div className='my-3'>
                </div>
                <div className=' mt-3 flex pr-6 items-center rounded-md  duration-300 cursor-pointer text-white'>
                    <Link to={`/`} className={`flex items-center  py-2.5   rounded-r-full ${activeTab === 1 ? 'bg-primary_gold' : ''
                        }  w-full h-full`
                    }
                        onClick={() => handleTabClick(1)}
                    >
                        <div className=' ml-8' >
                            <img className='object-cover' src={activeTab === 1 ? homeIcon : homeGray} alt="" /></div>
                        <span className={`text-[15px] ml-3 font-semibold ${activeTab === 1 ? 'text-black' : 'text-[#6B7280]'} `}>Dashboard</span>
                    </Link>
                </div>
                <div className=' mt-3 flex pr-6 items-center rounded-md  duration-300 cursor-pointer text-white'>
                    <div className={`flex items-center  py-2.5   rounded-r-full ${activeTab === 2 ? 'bg-primary_gold' : ''
                        }  w-full h-full`
                    }
                        onClick={() => handleTabClick(2)}>

                        <div className=' ml-8' >
                            <img className='object-cover' src={activeTab === 2 ? homeIcon : homeGray} alt="" /></div>
                        <span className={`text-[15px] ml-3 ${activeTab === 2 ? 'text-black' : 'text-[#6B7280]'}  font-semibold `}>Courses</span>
                    </div>
                </div>
                <div className=' mt-3 flex pr-6 items-center rounded-md  duration-300 cursor-pointer text-white'>
                    <div className={`flex items-center  py-2.5   rounded-r-full ${activeTab === 3 ? 'bg-primary_gold' : ''
                        }  w-full h-full`
                    }
                        onClick={() => handleTabClick(3)}>
                        <div className=' ml-8' >
                            <img className='object-cover' src={activeTab === 3 ? homeIcon : homeGray} alt="" /></div>
                        <span className={`text-[15px] ml-3 ${activeTab === 3 ? 'text-black' : 'text-[#6B7280]'}  font-semibold `}>Courses</span>
                    </div>
                </div>
                <div className='w-full relative mt-auto text-white'>
                    <img src={circle} alt="" />
                    <div className='mb-2 flex items-center justify-center'>
                        <img src={symbol} alt="" />
                    </div>
                </div>
                <style jsx>{`
    .sidebar::after {
      content: '';
      position: absolute;
      top: 0;
      right: -2px; /* Adjust according to border thickness */
      height: 100%;
      width: 3px; /* Adjust width of the divider */
      background: linear-gradient(to bottom, black 10%,black 30%, gold 50%, gold 80%, gold 100%);
    }
  `}</style>
            </div>
        </div>
    )
}

export default Sidebar