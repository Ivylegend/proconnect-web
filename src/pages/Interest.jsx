import React from "react";
import InterestImg from "../assets/interest-img.png";

const Interest = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pl-20 py-10 flex gap-8">
      <div className="w-1/2">
        <p className="font-bold text-xl text-center mb-12">
          REGISTRATION FORM FOR INTERESTED CUSTOMERS
        </p>

        <form action="">
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              What are you making enquiries for
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Product Interested In
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Active Email ID
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Active Phone Number
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Gender
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-8 flex flex-col gap-4">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Country of Residence
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center gap-2 my-4">
            <input type="checkbox" value="" />
            <p className="text-center text-[#1E4580] font-medium">
              Keep me up to date with more information about this products,
              services and offer
            </p>
          </div>
          <input type="submit" value="" />
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="bg-[#DB251A] font-medium text-white rounded-lg text-center w-full h-12"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <img className="h-full object-cover" src={InterestImg} alt="" />
      </div>
    </div>
  );
};

export default Interest;
