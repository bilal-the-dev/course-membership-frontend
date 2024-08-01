import React from "react";
import { icon, image, quiz, play } from "../../utils/index.js";
import background from "../../../src/assets/bg.svg";

import { Navbar, Sidebar } from "../../index.js";
const nic3 = 1;
const Video = () => {
  return (
    <div
      className="bg-[url('../../../src/assets/bg.svg')]  bg-center font-Roboto-Flex bg-cover min-h-screen w-screen overflow-x-hidden  h-screen relative
    "
    >
      <Sidebar />

      <div className="ml-2 lg:ml-[280px]  text-white    ">
        {" "}
        {/* Adjust ml value to match sidebar width */}
        {/* Navbar starts here */}
        <Navbar />
        {/* main content goes here */}
        <div className=" pt-12 pb-3 lg:px-4 ">
          <div className=" text-xl font-semibold flex items-center">
            <img src={icon} alt="" />
            <span className="ml-2">Courses</span>
          </div>
        </div>
        <div className="text-white text-base lg:px-5 flex gap-x-1 lg:gap-x-2">
          <span>Home</span>
          <span>&#10095;</span>
          <span>UX Design course</span>
          <span>&#10095;</span>
          <span>Welcome to course</span>
        </div>
        {/* picture and text layout */}
        <div className="w-full  px-8">
          <div className="w-full flex flex-col lg:flex-row lg:p-2 h-full ">
            <div className="w-full cursor-pointer relative ">
              <img
                className="w-full opacity-50 object-cover "
                src={image}
                alt=""
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <img className="" src={play} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-1  lg:py-4">
          <div className="p-2 flex w-full justify-end">
            <button className="px-6 py-2 mr-8 flex items-center gap-x-3 bg-primary_gold text-black hover:bg-primary_gold/80 transition-all duration-200 cursor-pointer rounded-sm ">
              <span>
                <img src={quiz} alt="" />
              </span>
              Lets start quiz
            </button>
          </div>
        </div>
        <div className="w-full p-8  py-2 lg:py-16">
          <div className="p-1 lg:p-4">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-primary_gold ">
              Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
              <br className=" hidden lg:block" />
              sed do eiusmod tempos
            </h1>
          </div>
          <div className="flex flex-col text-secondary-gray gap-y-4">
            <h1 className="text-white font-semibold text-lg">Description</h1>
            <p className="leading-tight">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et <br />
              dolore magna aliqua
            </p>
            <p className="leading-tight">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua
            </p>
            <h1 className="text-white font-semibold text-lg">
              Duration:{" "}
              <span className="text-secondary-gray  font-normal">
                3hrs | 23 mins
              </span>
            </h1>
            <h1 className="text-white font-semibold text-lg">
              Instructor:{" "}
              <span className="text-secondary-gray font-normal ">
                John alver
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
