import React from "react";
import { moon, mars, europa, titan } from "../imports";
import data from "../../data.json";

const MainDest = ({ planetActive, setPlanetActive }) => {
  return (
    <div>
      <div className="xl:w-[64rem]   h-auto  lg:flex lg:justify-between xl:mx-auto xl:translate-y-[20rem] lg:w-[58rem] translate-y-40 lg:mx-auto sm:translate-y-52 border border-transparent lg:translate-y-[20rem] ">
        <div
          id="img"
          className="sm:absolute sm:top-10 lg:static sm:left-0 sm:-translate-y-10 sm:right-0 sm:mx-auto h-[10rem]  w-[10rem] mx-auto lg:-translate-y-0 sm:h-[17rem] sm:w-[17rem] lg:w-auto lg:h-auto"
        >
          <img
            src={
              planetActive == 0
                ? moon
                : planetActive == 1
                ? mars
                : planetActive == 2
                ? europa
                : titan
            }
            alt="moon"
          />
        </div>
        <div id="text" className="text-white">
          <ul className="uppercase flex text-[#D0D6F9] font-thin gap-10 lg:text-lg tracking-widest lg:mr-14 lg:-translate-y-10 mt-5 sm:mt-[20rem] justify-center font-barlow sm:justify-center lg:mt-0 ">
            {data.destinations.map((item, index) => {
              if (planetActive == index) {
                return (
                  <li
                    className={"border-b-4 pb-2 text-white cursor-pointer"}
                    onClick={() => setPlanetActive(index)}
                    key={index}
                  >
                    {item.name}
                  </li>
                );
              } else {
                return (
                  <li
                    className={
                      "hover:pb-2 hover:border-b-4 border-gray-600 cursor-pointer"
                    }
                    onClick={() => setPlanetActive(index)}
                    key={index}
                  >
                    {item.name}
                  </li>
                );
              }
            })}
          </ul>
          <div className="h-auto lg:w-[29rem] sm:w-[28rem] w-auto  sm:mx-auto  ">
            <h1 className="sm:text-[6.5rem]  text-6xl text-center mt-5 font-bellefair uppercase sm:text-center ">
              {data.destinations.at(planetActive).name}
            </h1>
            <p className="lg:text-left tall:p-2 tall:w-[22rem] text-center p-5 sm:p-0 lg:w-[27rem] sm:mt-0 sm:text-center tracking-[0.06em] leading-0 sm:leading-8 text-[#D0D6f9] text-base sm:text-xl font-thin">
              {data.destinations.at(planetActive).description}
            </p>
            {/* MOBILE ABOVE FOOTER */}
            <hr className="sm:w-[30rem] w-auto  mx-5 mt-5 sm:mt-10 border-1 sm:border-1 border-gray-600" />
            <div className="hidden font-barlow tracking-[0.2em] text-base sm:text-xl text-[#D0D6f9] sm:flex sm:justify-center lg:justify-between sm:gap-x-20  sm:w-[30rem] lg:w-auto  lg:gap-0 ">
              <h2 className="mt-2 sm:ml-8">AVG. DISTANCE</h2>
              <h2 className="mt-2 sm:pr-0 pr-14">EST. TRAVEL TIME</h2>
            </div>
            <div className="hidden sm:flex  sm:justify-center lg:gap-x-20 lg:justify-between text-3xl font-bellefair uppercase">
              <p className="mt-2 lg:pl-0 ml-7 w-56  lg:mr-0">
                {data.destinations.at(planetActive).distance}
              </p>
              <p className="lg:w-[14rem]  pl-5  mt-2  ">
                {data.destinations.at(planetActive).travel}
              </p>
            </div>
            {/* MOBILE FOOTER */}
            <div className="sm:hidden text-center font-barlow tracking-[0.2em] text-base text-[#D0D6f9] flex flex-col ">
              <h2 className="pt-2">AVG. DISTANCE</h2>
              <h2 className="pt-2  text-white text-3xl font-bellefair uppercase">
                {data.destinations.at(planetActive).distance}
              </h2>
            </div>
            <div className="sm:hidden mt-0 flex flex-col text-center  uppercase tracking-[0.2em] text-base text-[#D0D6f9]">
              <p className="pt-2 font-barlow">EST. TRAVEL TIME</p>
              <p className=" pt-2  text-white text-3xl font-bellefair uppercase">
                {data.destinations.at(planetActive).travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDest;
