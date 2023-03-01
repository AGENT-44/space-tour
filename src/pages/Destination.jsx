import { moon, mars, europa, titan } from "../imports";
import { useState } from "react";
import data from "../../data.json";
const Destination = () => {
  console.log(data);
  const [planetActive, setPlanetActive] = useState(0);
  return (
    <>
      <div className="h-screen  bg-no-repeat  w-screen top-0 bg-cover bg-right bg-bg-destination-desktop">
        <div className="h-30 w-[26rem]  translate-x-48 translate-y-64">
          <p className="text-gray-500 text-3xl font-barlow tracking-[0.3rem] font-extrabold">
            01
            <span className="text-white uppercase pl-7 font-normal">
              Pick Your Destination
            </span>
          </p>
        </div>
        <div className="w-[64rem]  h-auto  flex justify-between translate-x-64 translate-y-[22rem]">
          <div id="img">
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
          <div id="text" className="text-white ">
            <ul className="uppercase flex text-[#D0D6F9] font-thin gap-10 text-lg tracking-widest mr-14 -translate-y-10 font-barlow">
              {data.destinations.map((item, index) => {
                if (planetActive == index) {
                  return (
                    <li
                      className={"border-b-4 pb-2 text-white"}
                      onClick={() => setPlanetActive(index)}
                      key={index}
                    >
                      {item.name}
                    </li>
                  );
                } else {
                  return (
                    <li
                      className={""}
                      onClick={() => setPlanetActive(index)}
                      key={index}
                    >
                      {item.name}
                    </li>
                  );
                }
              })}
            </ul>
            <div className="h-auto w-[29rem] ">
              <h1 className="text-[6.5rem] font-bellefair uppercase mt-0  ">
                {data.destinations.at(planetActive).name}
              </h1>
              <p className="text-left w-[27rem] tracking-[0.06em] leading-8 text-[#D0D6f9] text-base font-thin">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr className="w-auto mt-10  border-1 border-gray-600" />
              <div className="font-barlow tracking-[0.2em] text-base text-[#D0D6f9] flex justify-between">
                <h2 className="mt-2">AVG. DISTANCE</h2>
                <h2 className="mt-2 mr-14">EST. TRAVEL TIME</h2>
              </div>
              <div className="flex justify-between text-3xl font-bellefair uppercase">
                <p className="mt-2 ">
                  {data.destinations.at(planetActive).distance}
                </p>
                <p className="w-[12.5rem] mt-2  ">
                  {data.destinations.at(planetActive).travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
