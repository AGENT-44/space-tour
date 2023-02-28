import { useState } from "react";
import { Logo } from "../imports";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, isActive] = useState("");

  const handleChangeActive = (state) => {
    isActive(state);
  };

  return (
    <div className="font-barlow">
      <nav className="h-20 flex justify-between w-full top-10 bg-transparent fixed z-10 text-white">
        <img src={Logo} alt="Logo" className="w-14 h-14 mt-3 ml-10" />
        <hr className="w-[20%] absolute border-gray-700 left-48 z-10 top-10 lg:block lg:w-[27%]  xl:w-[33%] hidden" />
        <ul className="flex items-center  gap-14 uppercase sm:pl-5 sm:pr-10 xl:w-[55%] lg:w-[58%] xl:pl-24 pr-36 backdrop-blur-xl bg-white/5">
          <Link to={"/"}>
            <li
              className="font-bold cursor-pointer"
              onClick={() => handleChangeActive("Home")}
            >
              <p
                className={
                  active == "Home"
                    ? "border-b-2 py-6 scale-105"
                    : "" +
                      " py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                }
              >
                00 <span className="pl-2 font-thin">Home</span>
              </p>
            </li>
          </Link>
          <Link to={"/destination"}>
            <li
              className="font-bold cursor-pointer"
              onClick={() => handleChangeActive("Destination")}
            >
              <p
                className={
                  active == "Destination"
                    ? "border-b-2 py-6 scale-105"
                    : "" +
                      "py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                }
              >
                01 <span className="pl-2 font-thin">Destination</span>
              </p>
            </li>
          </Link>
          <Link to={"/crew"}>
            <li
              className="font-bold cursor-pointer"
              onClick={() => handleChangeActive("Crew")}
            >
              <p
                className={
                  active == "Crew"
                    ? "border-b-2 py-6 scale-105"
                    : "" +
                      " py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                }
              >
                02 <span className="pl-2 font-thin">Crew</span>
              </p>
            </li>
          </Link>
          <Link to={"/technology"}>
            <li
              className="font-bold cursor-pointer"
              onClick={() => handleChangeActive("Technology")}
            >
              <p
                className={
                  active == "Technology"
                    ? "border-b-2 py-6 scale-105"
                    : "" +
                      " py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                }
              >
                03 <span className="pl-2 font-thin">Technology</span>
              </p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
