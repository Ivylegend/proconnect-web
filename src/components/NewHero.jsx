import React from "react";
import PcpCountries from "../assets/pcp-countries.svg";
import HeroIcons from "../assets/hero-icons.svg";
import HeroIconsLeft from "../assets/hero-icons-left.svg";
import { Link } from "react-router-dom";

const NewHero = ({ bank }) => {
  return (
    <section className="py-10 px-6 lg:px-20 mb-8 md:mb-24 flex items-center justify-center w-full flex-col gap-10">
      <div className="relative flex items-center justify-center">
        <img
          src={HeroIconsLeft}
          alt="icons"
          className="absolute left-0 top-0 w-16 h-16 sm:w-24 sm:h-24 md:w-auto md:h-auto"
        />
        <div className="space-y-6 flex items-center flex-col justify-center md:w-[80%]">
          <h1 className="text-center font-bold text-[32px] md:text-[48px]">
            STUDY AND <br className="lg:hidden" />{" "}
            <span className="text-[#DB251A]">MIGRATE</span> TO THESE{" "}
            <br className="lg:hidden" />
            <span className="text-[#DB251A]">17</span> COUNTRIES{" "}
            <br className="lg:hidden" /> WITH OUR {/* <br /> */}
            <span className="text-[#DB251A]">100K USD</span> SUPPORT
          </h1>
          <p className="text-center font-semibold text-base md:text-lg">
            <span className="text-[#DB251A]">Pro</span>
            <span className="text-[#1E4580]">connect</span> facilitates
            tailored, non-collateral financing for students to access over 5,000
            universities across 17 countries, powered by the innovative eLDa AI
            platform that ensures 99% success and accuracy in automating resume
            refinement, SOP creation, and personalized study-abroad guidance.
          </p>
        </div>
        <img
          src={HeroIcons}
          alt="icons"
          className="absolute right-0 top-0 w-16 h-16 sm:w-24 sm:h-24 md:w-auto md:h-auto"
        />
      </div>
      <div>
        <img src={PcpCountries} alt="supported countries" />
      </div>
      {!bank && (
        <div className="flex gap-4">
          <button className="w-fit md:w-40 h-14 hover:bg-transparent hover:text-[#db251A] border-2 border-[#db251A] rounded-lg font-medium flex items-center justify-center bg-[#DB251A] text-white py-2 px-4 transition-all">
            <Link to="/interest">Get Started</Link>
          </button>
          <button className="w-fit md:w-40 flex border-2 h-14 justify-center font-medium text-[#db251A] border-[#db251A] items-center rounded-lg px-4 py-2 cursor-pointer hover:bg-[#db251A] hover:text-white transition-all">
            <a href="mailto:grace@proconnectpay.com">Contact Sales</a>
          </button>
        </div>
      )}
    </section>
  );
};

export default NewHero;
