import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/proconnect-logo-new.jpg";
import { BiMenu } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import NavBtn from "../assets/navbtn.png";

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
    url: "/study-abroad-financing-services",
  },
  {
    name: "Elda AI",
    url: "/elda-ai",
  },
  // {
  //   name: "Global Loan",
  //   url: "/global-loan",
  // },
  // {
  //   name: "Local Loan",
  //   url: "/local-loan",
  // },
  {
    name: "Join Global Education Community",
    url: "/global-resolution",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const navbarRef = React.createRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      // Clicked outside the navbar, so close it
      setToggle(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const handleMenu = () => {
    setToggle((prev) => !prev);
  };

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

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location.pathname]);

  return (
    <div
      className={`px-5 sm:px-10 lg:px-16 py-5 flex items-center justify-between bg-[#ffff] overflow-hidden max-h-28 md:max-h-32 ${
        scrolling ? "sticky top-0 shadow-md bg-white z-30" : ""
      }`}
    >
      <div className="flex items-center gap-12 overflow-hidden">
        <Link to="/" className="overflow-hidden">
          <img src={Logo} className="w-72 relative -left-10" alt="logo" />
        </Link>
        <div className="hidden lg:flex gap-6 font-bold">
          {navItems.map((navItem) => {
            return (
              <NavLink
                to={navItem.url}
                key={navItem.name}
                className={({ isActive }) => {
                  return isActive ? "active-nav" : "active hover:text-red-500";
                }}
              >
                {navItem.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4 sm:gap-8">
        <Link to="/interest">
          <button className="hidden rounded-lg font-medium sm:flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors">
            Get Started
          </button>
        </Link>
        <img
          src={NavBtn}
          alt="navbar button"
          className="lg:hidden w-6 h-6 cursor-pointer"
          onClick={handleMenu}
        />
      </div>

      {/* MOBILE NAVBAR */}
      {toggle && (
        <div
          ref={navbarRef}
          className={`${
            toggle
              ? "mobile-nav slide-in w-3/4 sm:w-1/2 flex-col shadow-xl fixed top-0 left-0 p-12 z-10 h-[100vh] bg-white gap-6 "
              : "slide-out"
          } lg:hidden font-bold`}
        >
          {navItems.map((navItem) => {
            return (
              <NavLink
                to={navItem.url}
                key={navItem.name}
                className={({ isActive }) => {
                  return isActive ? "active-nav" : "active hover:text-red-500";
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
