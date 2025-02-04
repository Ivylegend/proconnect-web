import React from "react";
import checkIcon from "../assets/check.png";

const ReuseableComponent = ({
  number,
  title,
  text,
  img,
  list,
  smallTitle,
  otherTitle,
  footer,
  footerText,
  disclaimerList,
  checkmarkList,
}) => {
  return (
    <div className="bg-white lg:rounded-3xl m-auto w-full md:max-w-[1132px] p-5 flex items-center flex-col md:flex-row justify-between">
      <div className="p-2 sm:pr-8 md:w-[560px] space-y-2 sm:space-y-6">
        <div className="flex flex-col items-start gap-3 sm:gap-6">
          {number && (
            <div className="bg-[#F4DFDE] text-[#DB251A] w-[60px] h-[60px] text-center flex items-center justify-center text-3xl rounded-full font-bold">
              {number}
            </div>
          )}
          <div>
            <p className="font-bold text-lg sm:text-xl lg:text-2xl">{title}</p>
          </div>
        </div>
        <div>
          <p className="text-base lg:text-xl text-black font-semibold mb-4">
            {smallTitle && smallTitle}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-[#646464] font-medium sm:text-justify">
            {text}
          </p>
          <p className="text-base lg:text-xl text-black font-semibold my-4">
            {otherTitle && otherTitle}
          </p>
          {list && list.length > 0 && (
            <ul className="list-disc ml-10 mt-5 space-y-5 text-[#646464] font-medium text-sm sm:text-base lg:text-lg">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {checkmarkList && checkmarkList.length > 0 && (
            <ul className="mt-5 space-y-5 text-[#646464] font-medium text-sm sm:text-base lg:text-lg">
              {checkmarkList.map((item, index) => (
                <div key={index}>
                  <>
                    {item.title && (
                      <li className="text-black font-semibold">{item.title}</li>
                    )}
                  </>
                  {item.text && item.text.length > 0 && (
                    <ul className="mt-2 space-y-2">
                      {item.text.map((textItem, textIndex) => (
                        <li key={textIndex} className="flex items-start gap-2">
                          <img
                            src={checkIcon}
                            alt="Checkmark"
                            className="w-4 h-4 mt-1"
                          />
                          {textItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          )}
          {disclaimerList && disclaimerList.length > 0 && (
            <ul className="mt-5 space-y-5 text-[#646464] font-medium text-sm sm:text-base lg:text-lg">
              {disclaimerList.map((item, index) => (
                <div key={index}>
                  <li className="text-black">{item.title}</li>
                  <li>{item.text}</li>
                </div>
              ))}
            </ul>
          )}
          <p className="text-base lg:text-xl text-black font-semibold mt-4 mb-1">
            {footer && footer}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-[#646464] font-medium">
            {footerText && footerText}
          </p>
        </div>
      </div>

      <div>
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default ReuseableComponent;
