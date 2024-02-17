import { NavLink } from "react-router-dom";
import Logo from "../assets/nav-logo.png";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Corporate Profile",
    url: "/corporate-profile",
  },
  {
    name: "Global Loan",
    url: "/global-loan",
  },
  {
    name: "Local Loan",
    url: "/local-loan",
  },
  {
    name: "Join Global Education Community",
    url: "/global-resolution",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="px-10 lg:px-16 py-5 flex items-center justify-between bg-[#F4F4F4]">
      <div className="flex items-center gap-12">
        <img src={Logo} alt="" />
        <div className="hidden lg:flex gap-6 font-bold">
          {navItems.map((navItem) => {
            return (
              <NavLink
                to={navItem.url}
                key={navItem.name}
                className={({ isActive }) => {
                  return isActive ? "active-nav" : "active";
                }}
              >
                {navItem.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className="rounded-lg font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer">
          Get Started
        </button>
        <BiMenu onClick={handleMenu} />
      </div>

      {/* MOBILE NAVBAR */}
      {toggle && (
        <div
          className={`mobile-nav ${
            toggle ? "slide-in" : "slide-out"
          } lg:hidden flex-col absolute top-0 left-0 p-12 z-10 h-full bg-white w-3/4 sm:w-1/2 gap-6 font-bold`}
        >
          {navItems.map((navItem) => {
            return (
              <NavLink
                to={navItem.url}
                key={navItem.name}
                className={({ isActive }) => {
                  return isActive ? "active-nav" : "active";
                }}
                onClick={handleMenu}
              >
                {navItem.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
