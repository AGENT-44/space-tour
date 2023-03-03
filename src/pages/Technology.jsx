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
    "h-12 w-12 py-[0.6rem] transition-all px-4 border-gray-600 rounded-full text-white border";
  const ImageNavClassActive =
    "h-12 w-12 py-[0.6rem]  transition-all bg-white px-4 border-gray-600 rounded-full text-black border";
  return (
    <div className="h-screen  bg-no-repeat relative top-0 bg-cover  bg-right lg:bg-bg-technology-desktop sm:bg-bg-tech-tablet bg-bg-tech-mobile">
      <div className=" lg:h-30 lg:w-[26rem] sm:absolute sm:translate-x-0 sm:translate-y-0 sm:top-32 sm:left-12 lg:static lg:translate-x-24 xl:translate-x-48 lg:translate-y-56 absolute top-28 left-[33%]">
        <p className="text-gray-500 text-lg lg:text-3xl sm:text-xl font-barlow tracking-[0.2em] sm:tracking-[0.3rem] font-extrabold  ">
          03
          <span className="text-white  uppercase pl-5 sm:pl-7 font-normal">
            Space lauch 101
          </span>
        </p>
      </div>
      {/* IMAGE */}
      <div className="translate-y-44 ">
        <img
          className="tall:h-auto tall:w-auto h-[11rem] object-fill w-full"
          src={
            activeNav == 0
              ? spaceShipLandscape
              : activeNav == 1
              ? spacePortLandscape
              : capsuleLandscape
          }
        />
      </div>
      {/* IMAGE NAVIGATION */}
      <div className="mt-52  flex gap-5 text-center font-bellefair text-lg justify-center">
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
        <div className="tall:mt-4 mt-10 text-center">
          <h2 className="text-[#D0D6F9] uppercase font-barlow tracking-widest text-xl">
            The Terminology ...
          </h2>
        </div>
        {/* Tech Name */}
        <div className="text-white  mt-2">
          <h1 className="text-center font-bellefair uppercase text-3xl">
            {data.technology.at(activeNav).name}
          </h1>
        </div>
        {/* Description */}
        <div className="text-[#D0D6F9] w-[95%] mx-auto text-center tall:mt-0 mt-0 tall:leading-6 text-lg tall:text-sm leading-8 p-5 tall:p-2">
          <p>{data.technology.at(activeNav).description}</p>
        </div>
      </main>
    </div>
  );
};

export default Technology;
