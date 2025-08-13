import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/proconnect-logo-new.jpg";
import DIYButton from "./DIYButton";

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
    name: "Global Financing",
    url: "/global-financing",
  },
  {
    name: "Elda AI",
    url: "/elda-ai",
  },
  {
    name: "Join Global Education Community",
    url: "/global-community",
  },
  {
    name: "Webinar",
    url: "https://bit.ly/study-and-work-in-17-countries",
  },
];

export default function DIYNavBar() {
  const [scrolling, setScrolling] = useState(false);
   const navbarRef = React.createRef(null);
   const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

  const handleMenu = () => {
    setToggle((prev) => !prev);
  };


  return (
    <div
      className={`px-5 sm:px-10 lg:px-16 py-5 flex items-center justify-between bg-transparent relative z-50 overflow-hidden max-h-28 ${
        scrolling ? "sticky top-0 left-0 right-0 shadow-md bg-white" : ""
      }`}
    >
      <Link to="/" className="overflow-hidden">
        <img src={Logo} className="w-48 lg:w-64 relative -left-10" alt="logo" />
      </Link>

<div className="hidden lg:flex gap-6 font-semibold">
          {navItems.map((navItem) => {
            return (
              <NavLink
                to={navItem.url}
                key={navItem.name}
                target="_blank"
                className={({ isActive }) => {
                  return isActive ? "active-nav" : "active hover:text-red-500";
                }}
              >
                {navItem.name}
              </NavLink>
            );
          })}
        </div>

      <div className="flex items-center gap-4">
        <DIYButton btnText="Register Now" />
        <button 
          onClick={handleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navbar */}
      {toggle && (
        <div
          className={`mobile-nav slide-in w-3/4 sm:w-1/2 flex-col shadow-xl fixed top-0 left-0 p-12 z-10 h-[100vh] bg-white gap-6 lg:hidden font-semibold`}
          ref={navbarRef}
        >
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="w-24" alt="logo" />
            </Link>
            <button 
              onClick={handleMenu}
              className="p-2 rounded-md hover:bg-gray-100 text-red-600"
            >
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {navItems.map((navItem) => (
              <NavLink
                to={navItem.url}
                key={navItem.name}
                target="_blank"
                className={({ isActive }) => isActive ? "active-nav" : "active hover:text-red-500"}
                onClick={handleMenu}
              >
                {navItem.name}
              </NavLink>
            ))}
            <Link to="/interest" target="_blank">
              <button className="rounded-md font-medium w-full items-center justify-center bg-[#DB251A] text-white py-2 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
