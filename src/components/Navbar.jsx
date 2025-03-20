import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  {
    ref: "/",
    name: "Home",
  },
  {
    ref: "/about-us",
    name: "About",
  },
  {
    ref: "/",
    name: "Contact",
  },
  {
    ref: "/",
    name: "Testmonials",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        className={`navbar bg-[#0000004e] flex items-center justify-between text-white py-7 md:px-5 px-9 absolute top-0 w-full ${
          menuOpen ? "z-[3]" : ""
        }`}
      >
        <Link to={"/"} className="logo">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1742163694/falf/logo-light_lvxecn.png"
            alt="logo"
          />
        </Link>
        <menu className=" items-center gap-3 hidden md:flex">
          {navLinks.map((link) => (
            <Link to={link.ref}>{link.name}</Link>
          ))}
        </menu>
        <div className="hidden md:flex flex-col ">
          <p className="capitalize text-[.8rem]">need help?</p>
          <Link to={"#"} className="flex items-center gap-1">
            <FaPhoneAlt /> 1 200 300 900
          </Link>
        </div>
        <button
          className={`md:hidden bg-[#eaa636] p-2 text-[1.6rem] rounded-sm ${
            menuOpen ? "" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMenu />
        </button>
      </nav>
      <aside
        className={`menuWindow bg-[#fff] absolute md:hidden  w-full pb-8 min-h-[50vh] ease-in-out duration-700 pt-[70px] flex items-center justify-center ${
          menuOpen ? "top-0" : "top-[-100%]"
        }`}
      >
        <div className=" h-full w-full">
          <ul className="flex flex-col items-center justify-center ">
            {navLinks.map((navLink) => (
              <NavLink
                onClick={() => setMenuOpen(false)}
                to={navLink.ref}
                className=" border-b border-[#bababa] hover:bg-[#eaa636] ease-in-out duration-300 hover:text-[white] w-full text-center p-3 py-4 text-[#eaa636]"
              >
                {navLink.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
