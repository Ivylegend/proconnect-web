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

const GlobalLoan = ({ setShowAfterFooter }) => {
  useEffect(() => {
    // Set the state to show AfterFooter when the component mounts
    setShowAfterFooter(true);

    // Clear the state when the component unmounts
    return () => setShowAfterFooter(false);
  }, []);

  return (
    <div className="py-4 sm:py-10 md:px-20 bg-[#F4F4F4]">
      <span className="p-4 my-4 relative md:p-0">
        <h2 className="text-center px-10 font-bold text-2xl sm:text-4xl">
          There are 3 layers to our Global Education Loan Services
        </h2>
        <img
          className="absolute hidden sm:block md:right-20 lg:top-10"
          src={line}
          alt="line"
        />
      </span>

      {/* FIRST */}
      <div className="w-full mt-4 mb-16 bg-white flex gap-8 lg:gap-8 flex-col lg:flex-row md:rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={First} alt="icon" />
          <p className="font-bold text-2xl">LOAN PROCESSING LAYER DETAILS</p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>We provide 100k USD in International Student Loans</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Interest Rate is between 12.74% - 15.99% per Annum</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>Loan can be repaid in Ten (10) Years (Optional)</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Loan pays for your Tuition, Cost of Living, Health Insurance, and
              Reimbursable Flight Ticket
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              You do not need a Collateral or Guarantor to become ELIGIBLE for
              our Financing
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

      {/* SECOND */}
      <div className="w-full my-16 bg-white flex gap-8 lg:gap-8 flex-col lg:flex-row-reverse items-center md:rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={Book} alt="icon" />
          <p className="font-bold text-2xl">
            ADMISSION PROCESSING LAYER DETAILS
          </p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              We get to recommend 2 schools to you based on your preference of
              Country
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              We get to recommend courses through our Academic Counselling
              Session
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Our Human Intelligence Team and Software get to process your
              Admission by submitting your school application
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Our personalized A.I Human Intelligence Software guides you on
              Refining your Resume and Crafting your Statement of Purpose in
              less than 45 minutes on the eLDa Portal
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check icon" />
            <p>
              Our Global Human Intelligence Portal processes your ADMISSION to
              your preferred country and recommended SCHOOL
            </p>
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

      {/* THIRD */}
      <div className="w-full mt-16 my-8 bg-white flex gap-8 lg:gap-8 flex-col lg:flex-row md:rounded-3xl p-8">
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
      </div>
    </div>
  );
};

export default GlobalLoan;
