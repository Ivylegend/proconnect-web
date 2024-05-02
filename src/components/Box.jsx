import React from "react";
import Box1 from "../assets/box1.png";

const Box = ({icon, title, text}) => {
  return (
    <div className="flex items-center md:h-28 gap-4 rounded-none sm:rounded-lg p-4 bg-white">
      <div className="min-w-[50px] object-cover min-h-[50px] rounded-full">
        <img src={icon} alt={icon} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Box;
