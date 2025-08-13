import { useEffect, useState } from "react";
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
      </div>
    </div>
  );
}
