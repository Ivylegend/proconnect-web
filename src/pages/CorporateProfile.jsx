import React from "react";
import Description from "../assets/description.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import frame1 from "../assets/pictureFrame1.png";
import frame2 from "../assets/pictureFrame2.png";
import frame3 from "../assets/pictureFrame3.png";

const CorporateProfile = () => {
  return (
    <div className="p-20">
      {/* FIRST */}
      <div className={"flex p-20 gap-20 items-center"}>
        <div className="w-full sm:w-1/2 flex flex-col items-start gap-8">
          <p className="">
            <img src={Description} alt="description-logo" />
          </p>
          <h2 className="text-4xl font-bold">Company Description</h2>
          <p className="text-xl leading-8">
            ProconnectPAY is Africa’s First EduFinTechCo. We are the Amazon of
            Education Financing in Africa. ProconnectPAY works with Local and
            Global Financial Institutions to provide Specialized and Affordable
            Financing Solutions focused on Education. We work across the entire
            spectrum of the educational value-chain LOCALLY, CONTINENTALLY AND
            GLOBALLY.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={frame1} alt="frame-logo" />
        </div>
      </div>

      {/* SECOND */}
      <div className={"flex p-20 gap-20 flex-row-reverse items-center"}>
        <div className="w-full sm:w-1/2 flex flex-col items-start gap-8">
          <p className="">
            <img src={mission} alt="mission-logo" />
          </p>
          <h2 className="text-4xl font-bold">Mission Statement</h2>
          <p className="text-xl leading-8">
            We have a simple mission to democratize access to quality and
            valuable commercially relevant education for the African Continent
            BRIGHTEST HOPE
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={frame2} alt="frame-logo" />
        </div>
      </div>

      {/* THIRD */}
      <div className={"flex p-20 gap-20 items-center"}>
        <div className="w-full sm:w-1/2 flex flex-col items-start gap-8">
          <p className="">
            <img src={vision} alt="vision-logo" />
          </p>
          <h2 className="text-4xl font-bold">Vision Statement</h2>
          <p className="text-xl leading-8">
            To be Africa’s Most Valuable Education Financing Partner that
            supports high-potential Candidates to access Local and Global
            Education Financing
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={frame3} alt="frame-logo" />
        </div>
      </div>
    </div>
  );
};

export default CorporateProfile;
