import React from "react";
import { moon, mars, europa, titan } from "../imports";
import data from "../../data.json";

const MainDest = ({ planetActive, setPlanetActive }) => {
  return (
    <div>
      <div className="xl:w-[64rem] border  h-auto  lg:flex lg:justify-between xl:mx-auto xl:translate-y-[22rem] lg:w-[58rem] lg:mx-auto sm:translate-y-52 lg:translate-y-[20rem] ">
        <div
          id="img"
          className="sm:absolute sm:top-0 lg:static sm:left-0 sm:-translate-y-10 sm:right-0 sm:mx-auto lg:-translate-y-0 sm:h-[17rem] sm:w-[17rem] lg:w-auto lg:h-auto"
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
          <ul className="uppercase flex text-[#D0D6F9] font-thin gap-10 lg:text-lg tracking-widest lg:mr-14 lg:-translate-y-10 font-barlow sm:mt-64 sm:justify-center lg:mt-0">
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
          <div className="h-auto lg:w-[29rem] sm:w-[28rem] sm:mx-auto border">
            <h1 className="text-[6.5rem] font-bellefair uppercase mt-0 sm:text-center">
              {data.destinations.at(planetActive).name}
            </h1>
            <p className="lg:text-left lg:w-[27rem] sm:mt-0 sm:text-center tracking-[0.06em] leading-8 text-[#D0D6f9] text-base font-thin">
              {data.destinations.at(planetActive).description}
            </p>
            <hr className="w-[30rem] mt-10  border-1 border-gray-600" />
            <div className="font-barlow tracking-[0.2em] text-base text-[#D0D6f9] flex sm:justify-center lg:justify-between sm:gap-x-20 lg:gap-0">
              <h2 className="mt-2">AVG. DISTANCE</h2>
              <h2 className="mt-2 mr-14">EST. TRAVEL TIME</h2>
            </div>
            <div className="flex sm:justify-center sm:gap-x-10 border lg:justify-between text-3xl font-bellefair uppercase">
              <p className="mt-2 border">
                {data.destinations.at(planetActive).distance}
              </p>
              <p className="w-[12.5rem] border mt-2  ">
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
