import React from "react";
import Description from "../assets/description.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import frame1 from "../assets/pictureFrame1.png";
import frame2 from "../assets/pictureFrame2.png";
import frame3 from "../assets/pictureFrame3.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CorporateProfile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const divOneVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const divTwoVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="p-10 lg:p-20">
      {/* FIRST */}
      <motion.div
        className={
          "flex flex-col lg:flex-row lg:p-20 my-12 lg:my-0 gap-20 items-center"
        }
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={ref}
      >
        {/* ONE */}
        <motion.div
          variants={divOneVariants}
          className="w-full lg:w-1/2 flex flex-col items-start gap-8"
        >
          <p className="">
            <img src={Description} alt="description-logo" />
          </p>
          <h2 className="text-4xl font-bold leading-normal">
            Company Description
          </h2>
          <p className="text-xl leading-8">
            ProconnectPAY is Africa’s First EduFinTechCo. We are the Amazon of
            Education Financing in Africa. ProconnectPAY works with Local and
            Global Financial Institutions to provide Specialized and Affordable
            Financing Solutions focused on Education. We work across the entire
            spectrum of the educational value-chain LOCALLY, CONTINENTALLY AND
            GLOBALLY.
          </p>
        </motion.div>
        {/* TWO */}
        <motion.div
          variants={divTwoVariants}
          className="w-full flex items-center justify-center lg:w-1/2"
        >
          <img src={frame1} alt="frame-logo" />
        </motion.div>
      </motion.div>

      {/* SECOND */}
      <motion.div
        className={
          "flex flex-col lg:flex-row-reverse my-12 lg:my-0 lg:p-20 gap-20 items-center"
        }
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ONE */}
        <motion.div
          variants={divOneVariants}
          className="w-full lg:w-1/2 flex flex-col items-start gap-8"
        >
          <p className="">
            <img src={mission} alt="mission-logo" />
          </p>
          <h2 className="text-4xl font-bold leading-normal">
            Mission Statement
          </h2>
          <p className="text-xl leading-8">
            We have a simple mission to democratize access to quality and
            valuable commercially relevant education for the African Continent
            BRIGHTEST HOPE
          </p>
        </motion.div>
        {/* TWO */}
        <motion.div
          variants={divTwoVariants}
          className="w-full flex items-center justify-center lg:w-1/2"
        >
          <img src={frame2} alt="frame-logo" />
        </motion.div>
      </motion.div>

      {/* THIRD */}
      <motion.div
        className={
          "flex flex-col lg:flex-row my-12 lg:my-0 lg:p-20 gap-20 items-center"
        }
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ONE */}
        <motion.div
          variants={divOneVariants}
          className="w-full lg:w-1/2 flex flex-col items-start gap-8"
        >
          <p className="">
            <img src={vision} alt="vision-logo" />
          </p>
          <h2 className="text-4xl font-bold leading-normal">
            Vision Statement
          </h2>
          <p className="text-xl leading-8">
            To be Africa’s Most Valuable Education Financing Partner that
            supports high-potential Candidates to access Local and Global
            Education Financing
          </p>
        </motion.div>
        {/* TWO */}
        <motion.div
          variants={divTwoVariants}
          className="w-full flex items-center justify-center lg:w-1/2"
        >
          <img src={frame3} alt="frame-logo" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CorporateProfile;
