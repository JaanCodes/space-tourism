import React, { useState } from "react";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  function navigation(param) {
    navigate(param);
    setShowMenu(false);
  }

  return (
    <nav className="flex md:items-center lg:justify-between justify-between pl-4 py-8 md:py-0">
      <picture onClick={() => navigate("/")} className="w-12 h-12 md:ml-6 lg:mt-8 select-none cursor-pointer">
        <img src={Logo} alt="" className="w-full h-full" />
      </picture>
      {showMenu ? (
        <img
          onClick={() => setShowMenu(false)}
          src={Close}
          alt=""
          className="md:hidden absolute cursor-pointer right-8 top-10 w-8 z-10"
        />
      ) : (
        <img
          onClick={() => setShowMenu(true)}
          src={Hamburger}
          alt=""
          className="md:hidden absolute cursor-pointer right-8 top-10 w-8 z-10"
        />
      )}
      <div
        className={`md:hidden w-[75%] ${
          showMenu && "backdrop-blur-xl h-full min-h-screen fixed right-0 top-0 overflow-hidden"
        } p-6 transition`}
      >
        <ul
          className={`${
            showMenu
              ? "flex backdrop-blur-xl h-full left-0 top-0 min-h-screen absolute right-0 overflow-hidden"
              : "hidden"
          } flex-col gap-6 mt-20 text-2xl text-white font-barlowCondensed md:hidden w-[75%] p-6 transition`}
        >
          <li className="uppercase cursor-pointer" onClick={() => navigation("/")}>
            <span className="font-bold text-white">00&nbsp;&nbsp;&nbsp;</span>Home
          </li>
          <li className="uppercase cursor-pointer" onClick={() => navigation(`/destination/moon`)}>
            <span className="font-bold text-white">01&nbsp;&nbsp;&nbsp;</span>Destination
          </li>
          <li className="uppercase cursor-pointer" onClick={() => navigation("/crew/01")}>
            <span className="font-bold text-white">02&nbsp;&nbsp;&nbsp;</span>Crew
          </li>
          <li className="uppercase cursor-pointer" onClick={() => navigation("/technology/1")}>
            <span className="font-bold text-white">03&nbsp;&nbsp;&nbsp;</span>Technology
          </li>
        </ul>
      </div>
      <ul className="hidden relative md:flex h-28 lg:mt-8 lg:pl-24 items-center gap-12 px-12 text-white backdrop-blur-3xl uppercase font-barlowCondensed text-[20px] tracking-wider">
        <div className="line hidden lg:block absolute w-3/5 h-[1.5px] -left-[50%] bg-[#979797]"></div>
        <li
          className="py-10 transition duration-300 cursor-pointer active:border-b-[3px] hover:border-b-[3px] hover:border-white/50 active:border-white"
          onClick={() => navigate("/")}
        >
          <span className="hidden lg:inline font-bold">00&nbsp;&nbsp;</span>
          Home
        </li>
        <li
          className="py-10 transition duration-300 cursor-pointer active:border-b-[3px] hover:border-b-[3px] hover:border-white/50 active:border-white"
          onClick={() => navigate("/destination/moon")}
        >
          <span className="hidden lg:inline font-bold">01&nbsp;&nbsp;</span>
          Destination
        </li>
        <li
          className="py-10 transition duration-300 cursor-pointer active:border-b-[3px] hover:border-b-[3px] hover:border-white/50 active:border-white"
          onClick={() => navigate("/crew/01")}
        >
          <span className="hidden lg:inline font-bold">02&nbsp;&nbsp;</span>
          Crew
        </li>
        <li
          className="py-10 transition duration-300 cursor-pointer active:border-b-[3px] hover:border-b-[3px] hover:border-white/50 active:border-white"
          onClick={() => navigate("/technology/1")}
        >
          <span className="hidden lg:inline font-bold">03&nbsp;&nbsp;</span>
          Technology
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
