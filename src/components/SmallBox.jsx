import React from "react";
import { Link } from "react-router-dom";

const SmallBox = ({ img, title, linkTo }) => {
  return (
    <div className="bg-white border border-[#EBEBEB] rounded-xl flex flex-col justify-between gap-3 p-4 h-[384px] w-[260px]">
      <img src={img} alt="features" />
      <p className="font-semibold text-xl text-center">{title}</p>
      <Link to={linkTo}>
        <button className="underline border w-full hover:bg-[#db251a] hover:text-white transition-colors duration-500 rounded-md p-2 font-semibold text-[#db251a] border-[#db251a]">Visit Site</button>
      </Link>
    </div>
  );
};

export default SmallBox;
