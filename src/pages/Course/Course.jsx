import React from "react";
import { icon, image, heart, share } from "../../utils/index.js";
import { Navbar, Sidebar, CourseCard } from "../../index.js";

const chapters = [
  { chapter: "Chapter 01", duration: "60 hrs" },
  { chapter: "Chapter 02", duration: "60 hrs" },
  { chapter: "Chapter 03", duration: "60 hrs" },
  { chapter: "Chapter 04", duration: "60 hrs", isLocked: true },
  { chapter: "Chapter 05", duration: "60 hrs", isLocked: true },
  { chapter: "Chapter 06", duration: "60 hrs", isLocked: true },
  { chapter: "Chapter 07", duration: "60 hrs", isLocked: true },
];

const Course = () => {
  return (
    <div className="bg-[url('../../../src/assets/bg2.svg')] bg-center font-Roboto-Flex bg-cover min-h-screen w-screen overflow-x-hidden  h-screen relative">
      <Sidebar />

      <div className="ml-2 lg:ml-[280px]  text-white    ">
        <Navbar />
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
        <div className="text-white font-semibold  lg:px-5 pt-8 pb-12 xl:pb-16 text-2xl xl:text-4xl">
          Welcome to UX Design course
        </div>
        <div className="w-full  pb-4 pl-0 sm:pl-6 2xl:pl-12">
          <div className="w-full flex flex-col lg:flex-row lg:p-2 h-full ">
            <div className="w-full lg:w-[55%] pr-2 ">
              <img className="w-full object-cover " src={image} alt="" />
            </div>
            <div className="mx-auto items-center lg:items-start  w-full px-1.5 py-4 lg:px-0  lg:w-[45%] flex flex-row lg:flex-col  justify-between lg:py-2 lg:pl-24 ">
              <div>
                <h2>Instuctor name</h2>
                <p className="text-white/60 text-sm leading-tight">
                  John alver
                </p>
              </div>
              <div>
                <h2>Duration</h2>
                <p className="text-white/70 leading-tight text-sm ">
                  3 hrs | 58 mins
                </p>
              </div>
              <div className=" flex gap-x-1 lg:gap-4">
                <div>
                  <img
                    className="cursor-pointer hover:scale-105 transition-all duration-300"
                    src={heart}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="cursor-pointer hover:scale-105 transition-all duration-300"
                    src={share}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <button className="lg:px-4 lg:py-2 py-2 px-1  font-semibold cursor-pointer text-sm hover:bg-primary_gold/80 transition-all duration-300 bg-primary_gold rounded-sm text-black">
                  Watch now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {chapters.reduce((acc, item, index) => {
              const groupIndex = Math.floor(index / 3);
              const isReversed = groupIndex % 2 !== 0;
              const groupStart = groupIndex * 3;
              const groupEnd = Math.min(groupStart + 3, chapters.length);
              const groupItems = chapters.slice(groupStart, groupEnd);

              if (index % 3 === 0) {
                const groupCards = isReversed
                  ? groupItems.reverse()
                  : groupItems;

                groupCards.forEach((groupItem, groupItemIndex) => {
                  acc.push(
                    <React.Fragment key={groupStart + groupItemIndex}>
                      <div
                        className={`flex flex-col lg:flex-row w-full lg:ml-4 gap-x-4 justify-between items-center`}
                      >
                        <CourseCard
                          id={groupStart + groupItemIndex}
                          chapter={groupItem.chapter}
                          duration={groupItem.duration}
                          isLocked={groupItem.isLocked}
                        />
                        {groupItemIndex < groupItems.length - 1 && (
                          <div className="lg:w-12 w-0.5 mt-4 lg:mt-0 lg:h-0.5 h-12 lg:mx-auto bg-primary_gold" />
                        )}
                      </div>
                    </React.Fragment>
                  );
                });

                // Add vertical separator only if there's a next group
                if (groupEnd < chapters.length) {
                  acc.push(
                    <div
                      key={`separator-${groupIndex}`}
                      className="hidden lg:block col-span-3"
                    >
                      <div
                        className={`flex ${
                          isReversed
                            ? "justify-start ml-28"
                            : "justify-end mr-28"
                        } p-3 max-w-[900px] 2xl:max-w-[1050px] 3xl:max-w-[1180px] 4xl:max-w-[1280px] 5xl:max-w-[1400px]`}
                      >
                        <div className="h-12 w-0.5 bg-primary_gold"></div>
                      </div>
                    </div>
                  );
                }
              }
              return acc;
            }, [])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
