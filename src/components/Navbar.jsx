import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/nav-logo.png";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";

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
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

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
      className={`px-10 lg:px-16 py-5 flex items-center justify-between bg-[#ffff] ${
        scrolling ? "sticky top-0 shadow-md bg-white z-30" : ""
      }`}
    >
      <div className="flex items-center gap-12">
        <Link to="/">
          <img src={Logo} alt="logo" />
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
      <div className="flex items-center gap-8">
        <Link to="/interest">
          <button className="rounded-lg font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors">
            Get Started
          </button>
        </Link>
        <BiMenu className="lg:hidden cursor-pointer" onClick={handleMenu} />
      </div>

      {/* MOBILE NAVBAR */}
      {toggle && (
        <div
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
