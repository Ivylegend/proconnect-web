import React from "react";

const LeaderImage = ({ name, position, image }) => {
  return (
    <div className="w-[260px] h-[360px] relative overflow-hidden">
      {/* Image */}
      <img src={image} alt="image" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 space-y-3">
        <p className="text-white font-bold relative">{name}</p>
        <p className="text-white font-semibold relative">{position}</p>
      </div>
    </div>
  );
};

export default LeaderImage;
