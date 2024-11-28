import React, { useEffect } from "react";
import Check from "../assets/check.png";
import LayerDetails from "../assets/local-loan.png";
import line from "../assets/line.png";
import people from "../assets/people.png";
import Macbook from "../assets/Macbook.png";
import Book from "../assets/Frame 53023 (1).png";
import Law from "../assets/Frame 53023 (2).png";
import First from "../assets/Frame 53023.png";
import Box from "../components/Box";
import Box1 from "../assets/box1.png";
import Century from "../assets/21st-century.png";
import Accumulate from "../assets/accumulate.png";
import BackUp from "../assets/back-up.png";
import CareerPath from "../assets/career-path.png";
import Connect from "../assets/connect.png";
import Grade from "../assets/grade.png";
import Guide from "../assets/guide.png";
import MonthlyChat from "../assets/monthly-chat.png";
import Power from "../assets/power.png";
import aiLaptop from "../assets/laptop.png";
import { Link } from "react-router-dom";

const LocalLoan = ({ setShowAfterFooterTwo }) => {
  useEffect(() => {
    setShowAfterFooterTwo(true);

    return () => setShowAfterFooterTwo(false);
  }, []);
  return (
    <div className="md:px-20 md:py-10 bg-[#F4F4F4]">
      <span className="p-4 block relative my-4 md:pt-0 min-h-20">
        <h2 className="text-center sm:px-10 font-bold text-2xl sm:text-4xl">
          There are 3 layers to our Local Undergraduate Loan Services
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
          <p className="font-bold text-2xl">
            STUDENT FINANCING PROCESSING LAYER DETAILS
          </p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>Interest Rate is ZERO% per Annum</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>Student Financing can be repaid in Ten (10) Years (Optional)</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              We provide 10 Million Naira in Private University Education
              Student Financing
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              You do not need a Collateral or Guarantor to become ELIGIBLE for
              our Financing
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              Student Financing pays for your Tuition, Cost of Living,
              HealthInsurance, Laptop, Phone, Internship, and Personal/Mental
              Development.
            </p>
          </span>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={LayerDetails} alt="local-loan img" />
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
          <span className="flex flex-end justify-end w-full">
            <img src={Book} alt="icon" className="flex-end" />
          </span>
          <p className="font-bold text-2xl">
            ADMISSION PROCESSING LAYER DETAILS
          </p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              We get to recommend courses through our AcademicCounselling
              Session
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              University Admission Letter and JAMB Admission Letteris issued
              through the eLDaNiC Portal
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              Simplified Admission Processing on the eLDaNiC portal that
              connects to all NUC Accredited Private Universities
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              You do not need a Collateral or Guarantor to become ELIGIBLE for
              our Financing
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="check image" />
            <p>
              Loan pays for your Tuition, Cost of Living, HealthInsurance,
              Laptop, Phone, Internship, and Personal/Mental Development
            </p>
          </span>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={aiLaptop} alt="laptop image" className="rotating-laptop" />
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
      <div className="w-full my-16 bg-white flex gap-8 lg:gap-8 flex-col lg:flex-row md:rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={Law} alt="icon" />
          <p className="font-bold text-2xl">GLOBAL UNDERGRADUATE COMMUNITY</p>
          <p className="text-xl leading-8">
            What Proconnect has created will allow Nigerian Students below 21
            years old study commercially relevant courses in selected science
            courses, technology courses, engineering courses, health courses,
            and business courses that guarantees they are able to access global
            and local opportunities.
          </p>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={people} alt="people" />
        </div>
      </div>

      <div className="px-8">
        <Link to="/interest" className="">
          <button className="rounded-lg w-full mx-auto mb-16 lg:m-0 font-medium flex items-center gap-4 justify-center bg-[#DB251A] text-white py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors">
            Get Started
          </button>
        </Link>
      </div>

      <div className="sm:p-10 pb-8" id="VAT">
        <p className="text-2xl font-bold mb-0 sm:mb-16 p-10 sm:p-0">
          <span className="text-[#1E4580]">
            Find the Value-Added Services we provide to{" "}
            <br className="hidden lg:block" /> Undergraduate Members in our
          </span>{" "}
          <span className="text-[#db251A]">Global Undergraduate Community</span>
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          <div className="flex flex-col gap-8">
            <Box
              icon={Box1}
              title={"Exclusive Mentoring Community"}
              text={
                "1 of 100,000 carefully selected high-potential candidates we groom and mentor to professional success"
              }
            />
            <Box
              icon={CareerPath}
              title={"Defining a Career PATH: Clarity of Purpose"}
              text={"Remotely guide them to clearly define a Career PATH"}
            />
            <Box
              icon={Accumulate}
              title={
                "Accumulated 2-years’ worth of Professional Work Experience"
              }
              text={
                "Access in-office PAID Internship Opportunities in corporate organizations in alignment with their chosen career path"
              }
            />
            <Box
              icon={Grade}
              title={"Graduate Entry Level Mock Examination"}
              text={
                "Community Members get prepped to write MOCK GMAT/GRE Examinations"
              }
            />
            <Box
              icon={Power}
              title={"The POWER of Technology and the eLDaNiC Portal"}
              text={
                "We get to deliver and deploy this VALUE remotely leveraging on TECHNOLOGY."
              }
            />
          </div>

          {/* SECOND HALF */}
          <div className="flex flex-col gap-8">
            <Box
              icon={BackUp}
              title={"Back-up to Regular Education"}
              text={
                "Remotely develop one-technical or non-technical tech skill"
              }
            />
            <Box
              icon={Century}
              title={"Instilling 21st Century Employability Soft Skills"}
              text={"Remotely groom them through our Job Readiness Program"}
            />
            <Box
              icon={Guide}
              title={"Guiding LIGHT to a Professional Career Mentor"}
              text={
                "Remotely coach them on how to identify and approach a mentor in line with their chosen career path"
              }
            />
            <Box
              icon={MonthlyChat}
              title={"Monthly Fireside Chat with Accomplished Professionals"}
              text={
                "Access to Monthly Fireside Mentoring Chat delivered REMOTELY by well-accomplished graduates and individuals"
              }
            />
            <Box
              icon={Connect}
              title={
                "Connecting potential Employers-Employees through Job Fairs and Exhibitions"
              }
              text={
                "Hosting regular career exhibitions and fairs across the Nigerian Landscape"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalLoan;
