import React, { useEffect } from "react";
import Check from "../assets/check.png";
import LayerDetails from "../assets/image 17.png";
import Visa from "../assets/image 20.png";
import inscription from "../assets/inscription.png";
import line from "../assets/line.png";
import Book from "../assets/Frame 53023 (1).png";
import Law from "../assets/Frame 53023 (2).png";
import First from "../assets/Frame 53023.png";
import Macbook from "../assets/Macbook.png";
import { Link } from "react-router-dom";

const StudyAbroadFinancingServices = ({ setShowAfterFooter }) => {
  useEffect(() => {
    setShowAfterFooter(true);
    return () => setShowAfterFooter(false);
  }, []);

  return (
    <div className="py-4 sm:py-10 md:px-20 bg-[#F4F4F4]">
      <span className="p-4 block relative my-4 md:pt-0 min-h-20">
        <h2 className="text-center sm:px-10 font-bold text-2xl sm:text-4xl">
          Summary of Proconnect Services and Service Fees
        </h2>
        <img
          className="absolute hidden sm:block md:right-56 lg:top-10"
          src={line}
          alt="line"
        />
      </span>

      {/* FIRST */}
      <div className="w-full my-16 bg-white flex gap-8 lg:gap-8 flex-col lg:flex-row-reverse items-center md:rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={Book} alt="icon" />
          <p className="font-bold text-2xl">
            ADMISSION PROCESSING LAYER DETAILS
          </p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Personalized career counseling</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Resume refinement to global standards</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Crafting of personalized Statement of Purpose for 2 universities
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Submission of university applications to 2 universities</p>
          </span>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={Macbook} alt="laptop" />
        </div>
      </div>

      <div className="px-8">
        <Link to="/interest" className="">
          <button className="rounded-lg w-full mx-auto mb-16 lg:m-0 font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors">
            Get Started
          </button>
        </Link>
      </div>

      {/* SECOND */}
      <div className="w-full mt-4 mb-16 bg-white flex gap-8 lg:gap-8 flex-col lg:flex-row md:rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={First} alt="icon" />
          <p className="font-bold text-2xl">LOAN PROCESSING LAYER DETAILS</p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              {" "}
              Ensure admission to a supported university and commercially viable
              course
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Provide necessary documents for loan application via the eLDa AI
              Candidate School Application Portal
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Begin loan application after admission is secured</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Submit the loan application</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Await conditional approval</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Verify authenticity of all documents</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Obtain final loan approval</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Provide support letters from financial institutions or
              professional bodies, if applicable
            </p>
          </span>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={LayerDetails} alt="layer-img" />
        </div>
      </div>

      <div className="px-8">
        <Link to="/interest" className="">
          <button className="rounded-lg w-full mx-auto mb-16 lg:m-0 font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors">
            Get Started
          </button>
        </Link>
      </div>

      {/* THIRD */}
      {/* <div className="w-full mt-16 my-8 bg-white flex gap-8 lg:gap-8 flex-col lg:flex-row md:rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={Law} alt="icon" />
          <p className="font-bold text-2xl">VISA PROCESSING LAYER DETAILS</p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>We run mock sessions with our Visa Team</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Successful candidates are invited to share their success stories
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              We host one-on-one sessions to guide you on your Visa Application
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              We provide materials and templates that have guided successful
              candidates
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              We endorse candidates as high-potential candidates having gone
              through our Global Mentoring Program
            </p>
          </span>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={Visa} alt="visa card" />
        </div>
      </div>

      <div className="px-8">
        <Link to="/interest" className="">
          <button className="rounded-lg w-full mx-auto mb-16 lg:m-0 font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors">
            Get Started
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default StudyAbroadFinancingServices;
