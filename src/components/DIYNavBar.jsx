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

    <div className={`px-5 sm:px-10 lg:px-16 py-5 flex items-center justify-between bg-[#ffff] overflow-hidden max-h-28 md:max-h-20 ${
      scrolling ? "sticky top-0 shadow-md bg-white z-30" : ""
    }`}>

        <Link to="/" className="flex items-center">
          <img src={Logo} className="w-40 sm:w-48" alt="logo" />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
                <DIYButton btnText="Register Now" linkTo="/#"/>
              </div>
      </div>
  )
}
