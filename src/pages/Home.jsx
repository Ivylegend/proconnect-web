import React, { useState } from "react";
// import Hero from "../components/Hero";
import Partners from "../components/Partners";
import TextImage from "../components/TextImage";
import Button from "../components/small-components/Button";

import Macbook from "../assets/Macbook.png";
import aiLaptop from "../assets/laptop.png";
import people from "../assets/people.png";
import globe from "../assets/globe.png";
import education from "../assets/education.png";
import LoanCalculator from "../components/Calculator";
import CTA from "../components/CTA";
import NewHero from "../components/NewHero";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const [principal, setPrincipal] = useState("");
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");
  const [monthly, setMonthly] = useState("");

  const calculateReturn = () => {
    const principalRegex = /^[0-9]+$/;
    const isPrincipalValid = principalRegex.test(principal);

    if (!isPrincipalValid) {
      console.error("Invalid principal amount");
      return;
    }

    const annualInterestRate = 0.16;
    const loanPeriodInMonths = 120;
    const principalAmount = parseFloat(principal);

    const monthlyInterestRate = annualInterestRate / 12;
    const months = Math.min(parseInt(loanPeriodInMonths), loanPeriodInMonths);

    const monthlyPayment =
      (principalAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -months));

    const totalRepayment = monthlyPayment * months;
    const totalInterest = totalRepayment - principalAmount;

    const formattedResult = formatCurrency(totalInterest);
    const formattedTotal = formatCurrency(totalRepayment);
    const formattedMonthly = formatCurrency(monthlyPayment);

    setResult(formattedResult);
    setMonthly(formattedMonthly);
    setTotal(formattedTotal);
  };

  const formatCurrency = (amount) => {
    return `₦${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  const Reset = () => {
    setResult(0);
    setPrincipal(0);
    setResult(0);
    setMonthly(0);
    setTotal(0);
  };

  return (
    <MainLayout>
      <div>
        {/* <Hero /> */}
        <NewHero />
        <Partners />
        <TextImage
          picture={Macbook}
          header={"PRODUCT"}
          title={"AI Assisted Human Intelligence School Application Portal"}
          text={
            "Leverage our personalized AI to refine your resume, craft your personalized statement of purpose, and get your school application in front of 5,000 Universities and Colleges Globally"
          }
          showButton={true}
          classdyn={"flex-row"}
          buttonText={"Know More"}
          buttonHref={"https://elda.cloud"}
        />
        <TextImage
          picture={aiLaptop}
          header={"PRODUCT"}
          title={
            <span>
              Admission and Financing <br /> Processing AI
            </span>
          }
          text={
            "With our AI Admission and Financing Assistant, we match African Students to highly rated private universities to study commercially relevant courses across the African Continent"
          }
          classdyn={"flex-row-reverse"}
          showButton={true}
          buttonText={"Know More"}
          buttonHref={"https://eldanic.com"}
        />
        <TextImage
          picture={people}
          header={"COMMUNITY"}
          title={"Global Education Community"}
          text={
            "Through our Global Education Community, we are raising the next generation of economic super-stars that will drive the economic prosperity across the developed and developing economies."
          }
          showButton={true}
          classdyn={"flex-row"}
          buttonText={"Get Started"}
          buttonHref={"/interest"}
        />

        <div className="relative overflow-hidden">
          <div className="background-image1"></div>
          <div
            id="textImage"
            className="flex px-10 py-10 md:py-20 lg:p-20 gap-10 lg:gap-20 items-center flex-col lg:flex-row"
          >
            {/* DIV ONE */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
              <h2 className="text-4xl font-bold leading-normal">
                <span className="flex items-start justify-start relative">
                  <p>
                    Local <br /> Undergraduate Education <br /> Loan Calculator
                  </p>
                  <img
                    src={education}
                    alt="education"
                    className="absolute left-16 top-[-5px]"
                  />
                </span>
              </h2>
            </div>
            {/* DIV TWO */}
            <LoanCalculator />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="background-image2"></div>
          <div
            id="textImage"
            className="flex px-10 py-10 md:py-20 lg:p-20 gap-10 lg:gap-20 items-center flex-col lg:flex-row-reverse"
          >
            {/* DIV ONE */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
              <h2 className="text-4xl font-bold leading-normal">
                <span className="">
                  <span className="flex relative gap-8">
                    Gl
                    <img
                      src={globe}
                      alt="globe"
                      className="absolute left-8 top-2"
                    />
                    bal
                  </span>
                  Education Loan Calculator
                </span>
              </h2>
            </div>
            {/* DIV TWO CALCULATOR DIV*/}
            <div className="border bg-white z-20 border-black rounded-2xl p-3 max-w-2xl flex flex-col gap-8">
              <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
                <div className="flex justify-between items-center">
                  <p className="capitalize font-semibold text-sm">
                    Amount of the loan
                  </p>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
                  />
                </div>
                <div className="flex justify-between items-center gap-4">
                  <p className="capitalize font-semibold text-sm">
                    Annual Percentage Rate of Interest
                  </p>
                  <input
                    type="text"
                    placeholder="15.99%"
                    disabled
                    className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
                  />
                </div>
                <div className="flex justify-between items-center gap-4">
                  <p className="font-semibold capitalize text-sm">
                    Repayment Period in Months (120 months)
                  </p>
                  <input
                    type="text"
                    disabled
                    placeholder="120 MONTHS"
                    className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
                  />
                </div>
              </div>
              <span className="flex items-center justify-end gap-4">
                <button
                  onClick={Reset}
                  className="font-semibold py-3 px-6 rounded-xl border-2 text-[#db251a] border-[#db251a]"
                >
                  RESET
                </button>
                <button
                  onClick={calculateReturn}
                  className="font-semibold py-3 px-6 rounded-xl border-2 bg-[#db251a] border-[#db251a] text-white"
                >
                  COMPUTE
                </button>
              </span>
              <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
                <div className="flex justify-between items-center gap-4">
                  <p className="capitalize font-semibold text-sm">
                    Your Monthly Payment Will Be
                  </p>
                  <input
                    type="text"
                    placeholder=""
                    value={monthly}
                    disabled
                    className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
                  />
                </div>
                <div className="flex justify-between items-center gap-4">
                  <p className="capitalize font-semibold text-sm">
                    Your Total Payment Will Be
                  </p>
                  <input
                    type="text"
                    placeholder=""
                    value={total}
                    disabled
                    className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
                  />
                </div>
                <div className="flex justify-between items-center gap-4">
                  <p className="capitalize font-semibold text-sm">
                    Your Total Interest Payment Will Be
                  </p>
                  <input
                    type="text"
                    placeholder=""
                    value={result}
                    disabled
                    className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="men">
          <div className="background-image"></div>
          <div className="content p-8 flex flex-col gap-8 items-start lg:p-20 lg:w-[50%] xl:w-[45%]">
            <h2 className="text-4xl font-bold leading-normal">
              We are BIG on Mentoring and Academic Excellence
            </h2>
            <p className="text-xl leading-normal">
              We foster personal and professional learning and development to
              enable our community access to great opportunities
              post-graduation.
            </p>
            <Button btnText={"Join Community"} linkTo={"/global-resolution"} />
          </div>
        </div>

        {/* <CTA /> */}
      </div>
    </MainLayout>
  );
};

export default Home;
