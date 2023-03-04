import { React, useState } from "react";
import {
  spacePortLandscape,
  spaceShipLandscape,
  spaceportPortrait,
  spaceShipPortrait,
  capsuleLandscape,
  capsulePortrait,
} from "../imports";
import data from "../../data.json";
const Technology = () => {
  const [activeNav, setActiveNav] = useState(0);
  const navItems = [1, 2, 3];
  const ImageNavClass =
    "h-12 w-12 py-[0.6rem] sm:h-14 sm:w-14 sm:py-[0.7rem] sm:px-5 lg:w-20 lg:h-20  transition-all px-4 border-gray-600 rounded-full text-white border lg:py-[1.3rem]";
  const ImageNavClassActive =
    "h-12 w-12 py-[0.6rem] sm:h-14 sm:w-14 sm:py-[0.7rem] sm:px-5 lg:w-20 lg:h-20  transition-all bg-white px-4 border-gray-600 rounded-full text-black border lg:py-[1.3rem]";
  return (
    <div className="h-screen  bg-no-repeat relative top-0 bg-cover  bg-right lg:bg-bg-technology-desktop sm:bg-bg-tech-tablet bg-bg-tech-mobile">
      <div className=" lg:h-30 lg:w-[26rem] sm:absolute sm:translate-x-0 sm:translate-y-0 sm:top-32 sm:left-12 lg:static lg:translate-x-16 xl:translate-x-40 lg:translate-y-56 absolute top-28 left-[33%]">
        <p className="text-gray-500 text-lg lg:text-3xl sm:text-2xl font-barlow tracking-[0.2em] sm:tracking-[0.3rem] font-extrabold  ">
          03
          <span className="text-white  uppercase pl-5 sm:pl-7 font-normal">
            Space lauch 101
          </span>
        </p>
      </div>
      {/* IMAGE */}
      <div className="translate-y-44 sm:translate-y-48">
        <img
          className="lg:hidden tall:h-auto tall:w-auto h-[11rem]  w-full sm:w-full sm:h-[18rem]"
          src={
            activeNav == 0
              ? spaceShipLandscape
              : activeNav == 1
              ? spacePortLandscape
              : capsuleLandscape
          }
        />
        <img
          className="hidden lg:block h-auto  w-auto absolute right-0"
          src={
            activeNav == 0
              ? spaceShipPortrait
              : activeNav == 1
              ? spaceportPortrait
              : capsulePortrait
          }
        />
      </div>
      {/* IMAGE NAVIGATION */}
      <div className="mt-52 sm:mt-60 flex flex-row lg:flex-col gap-5 text-center font-bellefair text-lg sm:text-2xl justify-center xl:ml-44 lg:mt-80 lg:text-4xl lg:gap-y-10 lg:ml-12  ">
        {navItems.map((item, index) => {
          return (
            <div
              onClick={() => setActiveNav(index)}
              key={item}
              className={
                activeNav == index ? ImageNavClassActive : ImageNavClass
              }
            >
              {item}
            </div>
          );
        })}
      </div>
      {/* Main */}
      <main>
        {/* Terminology */}
        <div className="tall:mt-4 mt-5 sm:mt-10 ml-5 lg:ml-0 text-center lg:absolute lg:top-80 xl:left-[19rem] lg:left-40">
          <h2 className="text-[#D0D6F9] uppercase font-barlow tracking-widest text-xl sm:text-2xl lg:text-xl">
            The Terminology ...
          </h2>
        </div>
        {/* Tech Name */}
        <div className="text-white  mt-2 lg:absolute lg:top-96 xl:left-[19rem] lg:left-40 ">
          <h1 className="text-center font-bellefair uppercase text-3xl sm:text-4xl lg:mt-5 xl:text-5xl lg:text-5xl">
            {data.technology.at(activeNav).name}
          </h1>
        </div>
        {/* Description */}
        <div className="text-[#D0D6F9] w-[95%] mx-auto text-center tall:mt-0 mt-0 tall:leading-6 text-lg tall:text-sm leading-8 p-5 tall:p-2 sm:pt-2 sm:text-xl  sm:w-[70%] tall2:text-sm lg:absolute lg:top-[30rem] xl:left-[19rem] lg:left-[10rem]  lg:w-[30%] xl:text-lg lg:pl-0 lg:text-left lg:leading-8 lg:pr-0 xl:leading-8">
          <p>{data.technology.at(activeNav).description}</p>
        </div>
      </main>
    </div>
  );
};

export default Technology;
