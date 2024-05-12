import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import webLogo from "../assets/food_logo.png";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(""); // Added activeMenu state

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", route: "/" },
    { id: 2, text: "About", route: "/about" },
    { id: 3, text: "Sign In", route: "/signin" },
    { id: 4, text: "Cart", route: "/cart", icon: <FaCartPlus /> },
  ];

  return (
    <div
      className="bg-[#ffffff] flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto px-10 text-black"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <img className="w-20" src={webLogo} alt="Web-logo" />{" "}
      <NavLink to="/search">
        <div className="flex items-center justify-center font-semibold hover:text-[#FC811B] cursor-pointer text-lg gap-3">
          <IoSearch />
          <p>Search</p>
        </div>
      </NavLink>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 rounded-xl font-semibold m-2 cursor-pointer duration-300  hover:text-[#FC811B] ${
              activeMenu === item.text ? "active" : ""
            }`}
            onMouseEnter={() => setActiveMenu(item.text)} // Added onMouseEnter event
            onMouseLeave={() => setActiveMenu("")} // Added onMouseLeave event
          >
            <NavLink to={item.route} className="flex items-center">
              {item.text}
              {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Mobile Navigation Menu */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={`${
          nav ? "fixed" : "hidden"
        } md:hidden left-0 top-20 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}
      >
        <img className="w-20" src={webLogo} alt="Web-logo" />
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black text-white cursor-pointer border-gray-600"
          >
            <NavLink to={item.route} onClick={() => setNav(false)}>
              {" "}
              {/* Close nav on mobile item click */}
              {item.text}
              {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
