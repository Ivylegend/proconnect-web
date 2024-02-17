import React from "react";
import Line from "../assets/line.png";
import Girl from "../assets/girl.png";
import bulb from "../assets/bulb.png";
import family from "../assets/family.png";
import goals from "../assets/goals.png";

const Hero = () => {
  return (
    <div className="p-20 mb-24 flex gap-24 justify-between items-center">
      <div className="w-2/5 flex flex-col gap-10">
        <h2 className="font-semibold text-4xl">
          <span className="text-[#db251A]">Welcome to </span>
          <span className="relative">
            <span className="text-[#1E4580]">Proconnect</span>
            <span className="text-[#db251A]">Pay</span>
            <img src={Line} alt="" className="absolute right-0" />
          </span>
        </h2>
        <h1 className="font-bold text-[56px] leading-tight">
          Africa's First EduFintechCo.
        </h1>
        <p className="text-[#646464] font-normal leading-normal text-xl">
          We provide seamless long-term Education Financing to DEMOCRATIZE
          access to Global and Local Educational Opportunities for
          high-potential African Students/Candidates
        </p>
        <div className="flex gap-4">
          <button className="w-1/2 rounded-lg h-14 hover:bg-transparent hover:text-[#db251A] border-2 hover:border-red-500 font-medium flex items-center justify-center bg-[#DB251A] text-white py-2 px-4 cursor-pointer">
            Get Started
          </button>
          <button className="w-1/2 flex border-2 h-14 justify-center font-medium text-[#db251A] border-red-500 items-center rounded-lg px-4 py-2 cursor-pointer hover:bg-[#db251A] hover:text-white">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex gap-18">
          <img
            src={Girl}
            alt=""
            className="flex relative top-20 left-10 object-contain"
          />
          <img
            src={bulb}
            alt=""
            className="flex object-contain relative top-0 right-[-100px]"
          />
        </div>
        <div className="flex gap-18">
          <img
            src={family}
            alt=""
            className="flex object-contain relative top-20 left-[-80px]"
          />
          <img
            src={goals}
            alt=""
            className="flex object-contain relative top-0 right-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
