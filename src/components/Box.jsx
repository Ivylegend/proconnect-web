import React from "react";
import Box1 from "../assets/box1.png";

const Box = ({icon, title, text}) => {
  return (
    <div className="flex items-center md:h-28 gap-4 rounded-lg p-4 bg-white">
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Box;
