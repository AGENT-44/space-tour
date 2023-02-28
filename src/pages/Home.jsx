import React from "react";
import backgroudn from "../../assets/home/background-home-desktop.jpg";
const Home = () => {
  return (
    <div className="h-screen relative bg-no-repeat  w-screen top-0 bg-cover  bg-right bg-[url('../../assets/home/background-home-desktop.jpg')]">
      <div className="absolute bottom-[15rem] left-[10rem] w-[35%]">
        <h5 className=" font-barlow text-3xl text-[#D0D6F9] tracking-[4.75px]">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="font-bellefair text-[9rem] text-white pt-2 tracking-wide">
          SPACE
        </h1>
        <p className="text-[#D0D6F9] text-justify  leading-8">
          Let's Face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
    </div>
  );
};

export default Home;
