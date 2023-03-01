import { useState } from "react";
import MainDest from "../components/MainDest";
const Destination = () => {
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
        <MainDest
          planetActive={planetActive}
          setPlanetActive={setPlanetActive}
        />
      </div>
    </>
  );
};

export default Destination;
