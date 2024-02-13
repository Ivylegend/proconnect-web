import { NavLink } from "react-router-dom";
import Logo from "../assets/nav-logo.png";

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
  return (
    <div className="px-16 py-5 flex items-center justify-between bg-[#F4F4F4]">
      <div className="flex items-center gap-12">
        <img src={Logo} alt="" />
        <div className="flex gap-6 font-bold">
          {navItems.map((navItem, index) => {
            return (
              <NavLink
                to={navItem.url}
                key={index}
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
      <div>
        <button className="rounded-lg font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
