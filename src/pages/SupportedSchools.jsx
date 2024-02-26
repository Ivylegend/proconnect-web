import React from "react";
import blueLine from "../assets/blue-line.png";

const SupportedSchools = () => {
  return (
    <div className="px-10 lg:px-20 lg:py-10 flex flex-col items-center justify-center">
      <span className="relative my-12">
        <p className="font-bold text-center text-3xl text-[#323232]">
          List of <span className="text-[#DB251A]">Supported Schools </span>
        </p>
        <img
          src={blueLine}
          alt="line"
          className="hidden sm:flex absolute right-0 top-10"
        />
      </span>

      {/* SELECT FIELD */}
      <div className="flex flex-col items-start">
        <label
          htmlFor=""
          className="my-4 text-[#646464] font-medium text-lg text-left"
        >
          Select your Preferred Category
        </label>
        <select
          name=""
          id=""
          className="w-[340px] lg:w-[500px] border border-black gap-4 bg-white shadow-xl font-medium text-black p-4 rounded-xl"
        >
          <option value="" className="my-4 text-black font-medium">
            Canadian Schools
          </option>
          <option value="" className="my-4 text-black font-medium">
            US Schools
          </option>
          <option value="" className="my-4 text-black font-medium">
            Nigerian Schools
          </option>
          <option value="" className="my-4 text-black font-medium">
            Professional Bodies
          </option>
        </select>
      </div>

      <div></div>
    </div>
  );
};

export default SupportedSchools;
