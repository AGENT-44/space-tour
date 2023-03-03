import { useState } from "react";
import data from "../../data.json";
import { douglas, anoushesh, victor, mark } from "../imports";

const Crew = () => {
  const [crewActive, changeActive] = useState(0);

  return (
    <div className="h-screen relative bg-no-repeat  w-screen top-0 bg-cover  bg-right bg-bg-crew-desktop">
      <div className=" lg:h-30 lg:w-[26rem] sm:absolute sm:translate-x-0 sm:translate-y-0 sm:top-32 sm:left-12 lg:static lg:translate-x-24 xl:translate-x-48 lg:translate-y-56 absolute top-28 left-1/4">
        <p className="text-gray-500 lg:text-3xl sm:text-xl font-barlow tracking-[0.2em] sm:tracking-[0.3rem] font-extrabold ">
          02
          <span className="text-white uppercase pl-5 sm:pl-7 font-normal">
            MEET Your Crew
          </span>
        </p>
      </div>
      <hr className="absolute top-[27rem] left-0 w-[80%] sm:hidden mx-auto right-0 border-1 border-gray-600" />
      <main className="xl:translate-y-[23rem] sm:translate-y-[9rem] tall:translate-y-[26rem] lg:translate-y-[20rem]  lg:ml-20 xl:ml-52 translate-y-[30rem]">
        {/* Role DIV */}
        <div className=" font-bellefair sm:text-center lg:text-left uppercase pt-16 ">
          <h2 className="xl:text-4xl tall:text-xl text-2xl sm:text-3xl text-center lg:text-left lg:text-3xl text-gray-400 tracking-wider ">
            {data.crew[crewActive].role}
          </h2>
        </div>
        {/* NAME DIV */}
        <div className="text-white text-center sm:text-center lg:text-left  lg:mt-10 sm:mt-5   uppercase">
          <h1 className="lg:text-5xl tall:text-2xl text-3xl font-bellefair xl:text-6xl sm:text-4xl">
            {data.crew[crewActive].name}
          </h1>
        </div>
        {/* BIO DIV */}
        <div className="text-[#D0D6F9] text-center sm:mt-2 lg:mt-10 lg:w-[28rem] sm:w-[38rem] sm:mx-auto  sm:text-center lg:text-left sm:text-xl lg:mx-0 mt-1 p-2 tall:p-0 ">
          <p className="font-barlow tall:leading-6 text-xl tall:text-base  tracking-wider leading-8 lg:text-xl ">
            {data.crew[crewActive].bio}
          </p>
        </div>
        {/* Dots */}
        <div className="xl:mt-20 absolute -top-5 tall:top-7 mx-[33%] sm:mx-0   sm:static lg:mt-10 sm:mt-5  sm:justify-center lg:justify-start  gap-5 flex lg:gap-10">
          <div
            className={
              crewActive == 0
                ? "bg-white  h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer "
                : "bg-gray-700 h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(0)}
          ></div>
          <div
            className={
              crewActive == 1
                ? "bg-white h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer"
                : "bg-gray-700 h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(1)}
          ></div>
          <div
            className={
              crewActive == 2
                ? "bg-white h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer"
                : "bg-gray-700 h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(2)}
          ></div>
          <div
            className={
              crewActive == 3
                ? "bg-white h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer"
                : "bg-gray-700 h-3 w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(3)}
          ></div>
        </div>

        {/* IMAGE */}
      </main>
      <img
        className={
          "absolute  top-48 left-0 right-0 mx-auto sm:bottom-0 sm:top-auto lg:right-0 sm:mx-auto sm:right-0 sm:left-0 lg:left-auto  lg:mx-0    xl:right-10 lg:h-[35rem] xl:h-auto xl:w-auto lg:w-[35rem] sm:h-[30rem] sm:w-[25rem] h-[15rem] w-[12rem]"
        }
        src={
          crewActive == 0
            ? douglas
            : crewActive == 1
            ? mark
            : crewActive == 2
            ? victor
            : anoushesh
        }
        alt="crew"
      />
    </div>
  );
};

export default Crew;
