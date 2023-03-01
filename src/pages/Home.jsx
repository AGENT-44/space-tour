import React from "react";
// import backgroudn from "../../assets/home/background-home-desktop.jpg";
const Home = () => {
  return (
    <div className="bg-bg-home-mobile h-screen relative bg-no-repeat  w-screen top-0 bg-cover  bg-right xl:bg-bg-home-desktop  sm:bg-bg-home-tablet xl:h-screen xl:w-screen sm:h-screen sm:w-screen">
      <div className="absolute xl:bottom-[10rem] lg:flex lg:justify-between xl:left-[10rem] top-[15rem] left-0 sm:left-[5rem] md:left-52">
        <div className="xl:w-[32rem] lg:w-[30rem] md:w-[35rem] w-auto block">
          <h5 className=" font-barlow text-xl sm:text-3xl pl-5 text-center text-[#D0D6F9] tracking-[4.75px] sm:pl-16 xl:p-0">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="font-bellefair text-[6rem] text-center sm:text-[10rem] sm:pl-3 xl:pl-0 text-white pt-1 xl:pt-2 tracking-wide pl-5">
            SPACE
          </h1>
          <p className="text-[#D0D6F9] xl:text-justify pl-0  pt-0 sm:pl-10 text-center  leading-8">
            Let's Face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="bg-white xl:mt-40 mt-0 mx-auto rounded-full xl:ml-48 sm:w-32 sm:h-32 w-28 h-28 pt-12 pl-3 sm:mt-2 sm:pt-12 sm:pl-2 sm:mx-auto sm:hover:border-white/20 bg-clip-padding xl:hover:border-[40px] xl:hover:w-64 xl:hover:h-64 transition-all xl:hover:pl-8  xl:hover:mt-24 xl:hover:mr-28 cursor-pointer md:w-40 md:h-40 md:mt-2 md:pl-6 md:pt-16 md:mx-auto lg:mt-40 lg:ml-24 lg:hover:border-[40px] lg:hover:w-64 lg:hover:h-64 lg:hover:pl-8 lg:hover:pt-20 lg:hover:mt-24 lg:hover:mr-28">
          <h2 className="sm:text-2xl text-xl font-bellefair tracking-wider">
            EXPLORE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
