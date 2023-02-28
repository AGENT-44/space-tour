import React from "react";
// import backgroudn from "../../assets/home/background-home-desktop.jpg";
const Home = () => {
  return (
    <div className="h-screen relative bg-no-repeat  w-screen top-0 bg-cover  bg-right bg-[url('../../assets/home/background-home-desktop.jpg')]">
      <div className="absolute bottom-[10rem] flex justify-between left-[10rem]">
        <div className="w-[40%]">
          <h5 className=" font-barlow text-3xl text-[#D0D6F9] tracking-[4.75px]">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="font-bellefair text-[9rem] text-white pt-2 tracking-wide">
            SPACE
          </h1>
          <p className="text-[#D0D6F9] text-justify  leading-8">
            Let's Face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-white mt-32 mr-36 rounded-full w-48 h-48 pt-20 pl-10 hover:border-[#24262F] hover:border-[50px] hover:w-64 hover:h-64 transition-all hover:pl-6 hover:pt-16 hover:mt-24 hover:mr-28 cursor-pointer">
          <h2 className="text-2xl font-bellefair tracking-wider">EXPLORE</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
