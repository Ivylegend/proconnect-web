import React from "react";
import Button from "./small-components/Button";

const TextImage = ({ picture, title, header, text, classdyn }) => {
  return (
    <div className={`flex p-20 gap-20 items-center ${classdyn}`}>
      <div className="w-full sm:w-1/2 flex flex-col items-start gap-8">
        <p className="font-bold text-xl">{header}</p>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-xl">{text}</p>
        <Button btnText={"Get Started"} />
      </div>
      <div className="w-full sm:w-1/2">
        <img src={picture} alt={picture} />
      </div>
    </div>
  );
};

export default TextImage;
