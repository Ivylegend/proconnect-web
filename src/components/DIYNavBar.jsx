import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/proconnect-logo-new.jpg";
import DIYButton from "./DIYButton";

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

      <div className="flex items-center gap-4">
        <DIYButton btnText="Register Now" />
      </div>
    </div>
  );
}
