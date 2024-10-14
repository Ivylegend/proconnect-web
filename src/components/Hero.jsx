import React from "react";
import Line from "../assets/line.png";
import Girl from "../assets/girl.png";
import bulb from "../assets/Ellipse.png";
import family from "../assets/family.png";
import goals from "../assets/goals.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
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

  return (
    <motion.div
      className="flex flex-col p-10 lg:p-20 mb-8 md:mb-24 lg:flex-row gap-24 justify-between items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* DIV ONE */}
      <motion.div
        className="w-full lg:w-2/5 flex flex-col gap-6 sm:gap-10"
        variants={divOneVariants}
      >
        <h2 className="font-semibold text-2xl sm:text-4xl whitespace-nowrap">
          <span className="text-[#db251A]">Welcome to </span>
          <span className="relative">
            <span className="text-[#1E4580]">Proconnect</span>
            {/* <span className="text-[#db251A]">PAY</span> */}
            <img src={Line} alt="line" className="absolute right-0" />
          </span>
        </h2>
        <h1 className="font-bold text-[42px] sm:text-[56px] leading-tight">
          Africa's First <br /> EduFintechCo.
        </h1>
        <p className="text-[#646464] font-normal leading-normal text-xl">
          We provide seamless long-term Education Financing to DEMOCRATIZE
          access to Global and Local Educational Opportunities for
          high-potential African Students/Candidates
        </p>
        <div className="flex gap-4">
          <button className="w-1/2 rounded-lg h-14 hover:bg-transparent hover:text-[#db251A] border-2 hover:border-red-500 font-medium flex items-center justify-center bg-[#DB251A] text-white py-2 px-4 transition-all">
            <Link to="/interest">Get Started</Link>
          </button>
          <button className="w-1/2 flex border-2 h-14 justify-center font-medium text-[#db251A] border-red-500 items-center rounded-lg px-4 py-2 cursor-pointer hover:bg-[#db251A] hover:text-white transition-all">
            <Link to="/contact">Contact Sales</Link>
          </button>
        </div>
      </motion.div>

      {/* DIV TWO */}
      <motion.div
        className="hidden sm:flex flex-col gap-16"
        variants={divTwoVariants}
      >
        <div className="flex gap-18">
          <img
            src={Girl}
            alt="girl"
            className="flex relative top-20 left-10 object-contain"
          />
          <img
            src={bulb}
            alt="bulb"
            className="flex object-contain relative top-0 right-[-100px]"
          />
        </div>
        <div className="flex gap-18">
          <img
            src={family}
            alt="family"
            className="flex object-contain relative top-20 left-[-80px]"
          />
          <img
            src={goals}
            alt="goals"
            className="flex object-contain relative top-0 right-6"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
