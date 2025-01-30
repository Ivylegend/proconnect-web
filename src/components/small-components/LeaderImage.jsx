import React from "react";

const LeaderImage = ({ name, position, image }) => {
  return (
    <div className="w-[260px] h-[360px] relative overflow-hidden">
      {/* Image */}
      <img src={image} alt="image" className="w-full h-full object-cover" />

      {/* Overlay behind Text Content */}
      <div className="absolute space-y-1 bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
        {/* Text Content */}
        <p className="text-white font-bold">{name}</p>
        <p className="text-white font-medium">{position}</p>
      </div>
    </div>
  );
};

export default LeaderImage;
