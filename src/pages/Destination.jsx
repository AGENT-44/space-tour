import { useState } from "react";
import MainDest from "../components/MainDest";

const Destination = () => {
  const [planetActive, setPlanetActive] = useState(0);
  return (
    <>
      <div className="h-screen sm:bg-bg-destination-tablet  bg-no-repeat  w-screen top-0 bg-cover bg-right bg-bg-destination-mobile lg:bg-bg-destination-desktop">
        <div className="lg:h-30 lg:w-[26rem]    lg:translate-x-48 lg:translate-y-64">
          <p className="text-gray-500 text-3xl font-barlow tracking-[0.3rem] font-extrabold">
            01
            <span className="text-white uppercase pl-7 font-normal">
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
