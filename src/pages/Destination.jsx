import { useState } from "react";
import MainDest from "../components/MainDest";

const Destination = () => {
  const [planetActive, setPlanetActive] = useState(0);
  return (
    <>
      <div className="h-[125vh] sm:h-screen sm:bg-bg-destination-tablet  bg-no-repeat  w-screen top-0 bg-cover bg-right bg-bg-destination-mobile lg:bg-bg-destination-desktop">
        <div className=" lg:h-30 lg:w-[26rem] sm:absolute sm:translate-x-0 sm:translate-y-0 sm:top-32 sm:left-12 lg:static   lg:translate-x-48 lg:translate-y-64 absolute top-28 left-1/4">
          <p className="text-gray-500 lg:text-3xl sm:text-xl font-barlow tracking-[0.2em] sm:tracking-[0.3rem] font-extrabold ">
            01
            <span className="text-white uppercase pl-5 sm:pl-7 font-normal">
              Pick Your Destination
            </span>
          </p>
        </div>
        <MainDest
          planetActive={planetActive}
          setPlanetActive={setPlanetActive}
        />
      </div>
    </>
  );
};

export default Destination;
