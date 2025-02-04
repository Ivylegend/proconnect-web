import React from "react";

const CardShadow = ({ title, text, className, icon }) => {
  return (
    <div
      className={`rounded-2xl p-4 w-full bg-white shadow-[0px_0px_12px_5px_rgba(239,68,68,0.15)] mb-8 ${className}`}
    >
      <div>{icon && <img src={icon} alt="icon" />}</div>
      <h3 className="text-xl font-bold leading-normal my-3">{title}</h3>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default CardShadow;
