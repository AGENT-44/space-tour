import { useState } from "react";
import { Logo, iconClose, iconOpen } from "../imports";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, isActive] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const handleChangeActive = (state) => {
    isActive(state);
  };
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-barlow">
      <nav className="h-20 flex justify-between w-full top-10 bg-transparent fixed z-10 text-white">
        <img src={Logo} alt="Logo" className="w-14 h-14 mt-3 ml-10" />
        <hr className="w-[20%] absolute border-gray-700 left-48 z-10 top-10 lg:block lg:w-[27%]  xl:w-[33%] hidden" />
        <ul className="hidden sm:flex items-center  gap-14 uppercase sm:pl-5 sm:pr-10 xl:w-[55%] lg:w-[58%] xl:pl-24 pr-36 backdrop-blur-xl bg-white/5">
          <Link to={"/"}>
            <li
              className="font-bold cursor-pointer"
              onClick={() => handleChangeActive("Home")}
            >
              <p
                className={
                  active == "Home"
                    ? "border-b-2 py-6 scale-105 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                    : "py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
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
                    ? "border-b-2 py-6 scale-105 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                    : "py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
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
                    ? "border-b-2 py-6 scale-105 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                    : "py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
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
                    ? "border-b-2 py-6 scale-105 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                    : "py-6 hover:scale-105 transition-all hover:border-b-2 hover:border-b-gray-400 tracking-widest"
                }
              >
                03 <span className="pl-2 font-thin">Technology</span>
              </p>
            </li>
          </Link>
        </ul>
        <img
          src={isOpen ? iconClose : iconOpen}
          alt="mobileMenu"
          className="sm:hidden z-20 inline-block w-7 h-7 mt-5 mr-5 "
          onClick={handleIsOpen}
        />
      </nav>
      <div
        className={
          isOpen
            ? "absolute sm:hidden h-full w-[60%] backdrop-blur-xl right-0 top-0 z-[2]"
            : "hidden"
        }
      ></div>
    </div>
  );
};

export default Navbar;
