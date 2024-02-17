import React, { useEffect } from "react";
import Check from "../assets/check.png";
import LayerDetails from "../assets/image 17.png";
import line from "../assets/line.png";
import people from "../assets/people.png";
import Macbook from "../assets/Macbook.png";
import Book from "../assets/Frame 53023 (1).png";
import Law from "../assets/Frame 53023 (2).png";
import First from "../assets/Frame 53023.png";
import Box from "../components/Box";
import Box1 from "../assets/box1.png";

const LocalLoan = ({ setShowAfterFooter }) => {
  useEffect(() => {
    // Set the state to show AfterFooter when the component mounts
    setShowAfterFooter(true);

    // Clear the state when the component unmounts
    return () => setShowAfterFooter(false);
  }, []);
  return (
    <div className="p-10 md:px-20 md:py-10 bg-[#F4F4F4]">
      <span className="relative">
        <h2 className="text-center font-bold text-4xl lg:mb-8">
          There are 3 layers to our Local Undergraduate Loan Services
        </h2>
        <img className="absolute md:right-20 lg:top-10" src={line} alt="" />
      </span>

      {/* FIRST */}
      <div className="w-full my-16 bg-white flex gap-8 lg:gap-0 flex-col lg:flex-row rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={First} alt="" />
          <p className="font-bold text-2xl">LOAN PROCESSING LAYER DETAILS</p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>Interest Rate is between 20% - 35% per Annum</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>Loan can be repaid in Ten (10) Years (Optional)</p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              We provide 10 Million Naira in Private University Education
              Student Loans
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              You do not need a Collateral or Guarantor to become ELIGIBLE for
              our Financing
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              Loan pays for your Tuition, Cost of Living, HealthInsurance,
              Laptop, Phone, Internship, and Personal/Mental Development
            </p>
          </span>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={LayerDetails} alt="" />
        </div>
      </div>

      {/* SECOND */}
      <div className="w-full my-16 bg-white flex gap-8 lg:gap-0 flex-col lg:flex-row-reverse rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={Book} alt="" />
          <p className="font-bold text-2xl">
            ADMISSION PROCESSING LAYER DETAILS
          </p>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              We get to recommend courses through our AcademicCounselling
              Session
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              University Admission Letter and JAMB Admission Letteris issued
              through the eLDaNiC Portal
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              Simplified Admission Processing on the eLDaNiC portal that
              connects to all NUC Accredited Private Universities
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              You do not need a Collateral or Guarantor to become ELIGIBLE for
              our Financing
            </p>
          </span>
          <span className="flex items-center gap-4">
            <img src={Check} alt="" />
            <p>
              Loan pays for your Tuition, Cost of Living, HealthInsurance,
              Laptop, Phone, Internship, and Personal/Mental Development
            </p>
          </span>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={Macbook} alt="" />
        </div>
      </div>

      {/* THIRD */}
      <div className="w-full my-16 bg-white flex gap-8 lg:gap-0 flex-col lg:flex-row rounded-3xl p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-start">
          <img src={Law} alt="" />
          <p className="font-bold text-2xl">GLOBAL UNDERGRADUATE COMMUNITY</p>
          <p className="text-xl leading-8">
            What ProconnectPAY has created will allow Nigerian Students below 21
            years old study commercially relevant courses in selected science
            courses, technology courses, engineering courses, health courses,
            and business courses that guarantees they are able to access global
            and local opportunities.
          </p>
        </div>
        <div className="w-full lg:w-1/2 hidden sm:flex items-center justify-center lg:justify-normal lg:items-start">
          <img src={people} alt="" />
        </div>
      </div>

      <div>
        <p className="text-2xl font-normal lg:w-1/2 mb-16">
          Find the Value-Added Services we provide to Undergraduate Members in
          our Global Undergraduate Community
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
              icon={Box1}
              title={"Defining a Career PATH: Clarity of Purpose"}
              text={"Remotely guide them to clearly define a Career PATH"}
            />
            <Box
              icon={Box1}
              title={
                "Accumulated 2-years’ worth of Professional Work Experience"
              }
              text={
                "Access in-office PAID Internship Opportunities in corporate organizations in alignment with their chosen career path"
              }
            />
            <Box
              icon={Box1}
              title={"Graduate Entry Level Mock Examination"}
              text={
                "Community Members get prepped to write MOCK GMAT/GRE Examinations"
              }
            />
            <Box
              icon={Box1}
              title={"The POWER of Technology and the eLDaNiC Portal"}
              text={
                "We get to deliver and deploy this VALUE remotely leveraging on TECHNOLOGY."
              }
            />
          </div>

          {/* SECOND HALF */}
          <div className="flex flex-col gap-8">
            <Box
              icon={Box1}
              title={"Back-up to Regular Education"}
              text={
                "Remotely develop one-technical or non-technical tech skill"
              }
            />
            <Box
              icon={Box1}
              title={"Instilling 21st Century Employability Soft Skills"}
              text={"Remotely groom them through our Job Readiness Program"}
            />
            <Box
              icon={Box1}
              title={"Guiding LIGHT to a Professional Career Mentor"}
              text={
                "Remotely coach them on how to identify and approach a mentor in line with their chosen career path"
              }
            />
            <Box
              icon={Box1}
              title={"Monthly Fireside Chat with Accomplished Professionals"}
              text={
                "Access to Monthly Fireside Mentoring Chat delivered REMOTELY by well-accomplished graduates and individuals"
              }
            />
            <Box
              icon={Box1}
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
