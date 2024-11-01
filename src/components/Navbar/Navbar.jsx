



import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiCampfire } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbBrandDaysCounter } from "react-icons/tb";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10 bg-[url('src/assets/navbar.jpg')] bg-no-repeat bg-cover">
      <div >
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer gap-2 ">
            <span>
              <GiCampfire  className ="text-orange-500"size={50} />
            </span>
            
            <h1 className=" text-5xl font-semibold text-secondary font-[poppins] ">
              JENZ</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor text-white font-[poppins] text-[22px]"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor text-white font-[poppins] text-[22px]"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor text-white font-[poppins] text-[22px]"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor text-white font-[poppins] text-[22px]"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>

          <div className=" hidden lg:flex">
          <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-3 rounded-full flex items-center gap-3 ">
                Book Now !!
                <TbBrandDaysCounter className="text-xl text-white drop-shadow-sm cursor-pointer" />
             </button>
          </div>

          <div className=" md:hidden  flex items-center text-white">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black  text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
         

          <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-3 rounded-full flex items-center gap-3 ">
                Book Now !!
             <TbBrandDaysCounter className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

