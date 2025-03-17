import React from "react";
import { Link } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  {
    ref: "/",
    name: "Home",
  },
  {
    ref: "/",
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
  return (
    <nav className="navbar bg-[#0000004e] flex items-center justify-between text-white py-7 md:px-5 px-9 absolute top-0 w-full ">
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
      <button className="md:hidden bg-[#eaa636] p-2 text-[1.6rem] rounded-sm">
        <IoMenu />
      </button>
    </nav>
  );
};

export default Navbar;
