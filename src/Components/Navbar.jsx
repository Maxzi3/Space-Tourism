import React, { useState } from "react";
import Logo from "/shared/logo.svg";
import Menu from "/shared/icon-hamburger.svg";
import Close from "/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const linkclass = ({ isActive }) =>
    isActive
      ? "underline underline-offset-[36px] decoration-white/80 cursor-pointer"
      : "hover:underline hover:underline-offset-[36px] hover:decoration-white/80 cursor-pointer";
  const linkclass2 = ({ isActive }) =>
    isActive
      ? "my-4 cursor-pointer border-r-2"
      : "my-4 cursor-pointer hover:border-r-2";

  return (
    <div>
      {/* Destop Navbar */}
      <nav className="hidden md:flex flex-row justify-between items-center py-10 mx-auto w-10/12 ">
        <img src={Logo} alt="icon" className="" />
        <hr className="w-4/12 ml-36 border-white/50" />
        <ul className="bg-white/10 backdrop-blur-sm flex flex-row item-center py-8 w-full justify-evenly text-white mr-">
          <NavLink to="/" className={linkclass}>
            <span className="font-bold ">00</span> Home
          </NavLink>
          <NavLink to="/destination" className={linkclass}>
            <span className="font-bold">01</span> Destination
          </NavLink>
          <NavLink to="crew" className={linkclass}>
            <span className="font-bold">02</span> Crew
          </NavLink>
          <NavLink to="technology" className={linkclass}>
            <span className="font-bold">03</span> Technology
          </NavLink>
        </ul>
      </nav>
      {/* Mobile Navbar */}
      <nav className="md:hidden flex flex-row py-10 px-5 justify-between items-center">
        <img src={Logo} alt="icon" className="w-10" />
        <button onClick={ToggleMenu} className="md:hidden z-50">
          {!isOpen ? (
            <img src={Menu} alt="" className=" cursor-pointer" />
          ) : (
            <img src={Close} alt="" className="cursor-pointer" />
          )}
        </button>
        <div
          className={`bg-inherit backdrop-blur-2xl shadow-md text-white overflow-hidden w-8/12 absolute top-0  right-0 h-full ${
            isOpen ? "transform translate-x-0" : "hidden"
          }`}
        >
          <ul className="flex flex-col my-28 pl-4 pr-1">
            <NavLink to="/" onClick={ToggleMenu} className={linkclass2}>
              <span className="font-bold ">00</span> Home
            </NavLink>
            <NavLink
              to="/destination"
              onClick={ToggleMenu}
              className={linkclass2}
            >
              <span className="font-bold">01</span> Destination
            </NavLink>
            <NavLink to="crew" onClick={ToggleMenu} className={linkclass2}>
              <span className="font-bold">02</span> Crew
            </NavLink>
            <NavLink
              to="technology"
              onClick={ToggleMenu}
              className={linkclass2}
            >
              <span className="font-bold">03</span> Technology
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
