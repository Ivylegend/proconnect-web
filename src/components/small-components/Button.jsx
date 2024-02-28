import React from "react";
import ArrowRight from "../../assets/arrow-right.png";
import { Link } from "react-router-dom";

const Button = ({ btnText, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button className="rounded-lg font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-2 px-3 cursor-pointer">
        {btnText}
        <img src={ArrowRight} alt="arrow-right" />
      </button>
    </Link>
  );
};

export default Button;
