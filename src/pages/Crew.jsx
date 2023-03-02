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

      <main className="xl:translate-y-[23rem] sm:translate-y-[8rem]  lg:translate-y-[20rem] lg:ml-20 xl:ml-52 ">
        {/* Role DIV */}
        <div className=" font-bellefair sm:text-center lg:text-left uppercase pt-16 ">
          <h2 className="xl:text-4xl sm:text-3xl lg:text-3xl text-gray-400 tracking-wider ">
            {data.crew[crewActive].role}
          </h2>
        </div>
        {/* NAME DIV */}
        <div className="text-white sm:text-center lg:text-left  lg:mt-10 sm:mt-5   uppercase">
          <h1 className="lg:text-5xl font-bellefair xl:text-6xl sm:text-4xl">
            {data.crew[crewActive].name}
          </h1>
        </div>
        {/* BIO DIV */}
        <div className="text-[#D0D6F9] sm:mt-2 lg:mt-10 lg:w-[28rem] sm:w-[38rem] sm:mx-auto  sm:text-center lg:text-left sm:text-xl lg:mx-0 ">
          <p className="font-barlow tracking-wider leading-8 lg:text-xl ">
            {data.crew[crewActive].bio}
          </p>
        </div>
        {/* Dots */}
        <div className="xl:mt-20 lg:mt-10 sm:mt-5  sm:justify-center lg:justify-start  sm:gap-5 flex lg:gap-10">
          <div
            className={
              crewActive == 0
                ? "bg-white sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer "
                : "bg-gray-700 sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(0)}
          ></div>
          <div
            className={
              crewActive == 1
                ? "bg-white sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer"
                : "bg-gray-700 sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(1)}
          ></div>
          <div
            className={
              crewActive == 2
                ? "bg-white sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer"
                : "bg-gray-700 sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(2)}
          ></div>
          <div
            className={
              crewActive == 3
                ? "bg-white sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer"
                : "bg-gray-700 sm:h-3 sm:w-3 lg:h-5 lg:w-5 rounded-full cursor-pointer hover:bg-gray-500"
            }
            onClick={() => changeActive(3)}
          ></div>
        </div>

        {/* IMAGE */}
      </main>
      <img
        className={
          "absolute bottom-0 lg:right-0 sm:mx-auto sm:right-0 sm:left-0 lg:left-auto  lg:mx-0    xl:right-10 lg:h-[35rem] xl:h-auto xl:w-auto lg:w-[35rem] sm:h-[20rem] sm:w-[20rem]"
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
