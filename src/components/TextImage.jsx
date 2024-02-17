import React from "react";
import Button from "./small-components/Button";

const TextImage = ({ picture, title, header, text, classdyn, showButton }) => {
  return (
    <div className={`flex px-10 py-20 lg:p-20 gap-10 lg:gap-20 items-center flex-col md:flex-row md:${classdyn}`}>
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
        <p className="font-bold text-xl">{header}</p>
        <h2 className="text-4xl font-bold leading-normal">{title}</h2>
        <p className="text-xl">{text}</p>
        {showButton && <Button btnText={"Get Started"} />}
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <img src={picture} alt={picture} />
      </div>
    </div>
  );
};

export default TextImage;
