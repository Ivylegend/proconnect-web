import React, { useState } from "react";
import LoanCalculator from "../components/Calculator";

const Calculator = () => {
  const [totalLoan, setTotalLoan] = useState("");
  const [interest, setInterest] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [monthly, setMonthly] = useState("");
  const [tuition, setTuition] = useState("");
  const [hostel, setHostel] = useState("");
  const [costOfLiving, setCostOfLiving] = useState("");
  const [others, setOthers] = useState("");
  const [period, setPeriod] = useState(6);

  //   const calculateReturn = () => {
  //     // Constants (for example purposes, you can replace these with your actual values)
  //     const annualInterestRate = 0.34; // 34%
  //     const repaymentPeriodPhase1Months = 11;
  //     const repaymentPeriodPhase2Months = 61;

  //     // Convert the principal to a number
  //     const principalAmount = parseFloat(principal);

  //     // Calculate interest for both phases
  //     const interestPhase1 =
  //       principalAmount * annualInterestRate * (repaymentPeriodPhase1Months / 12);
  //     const interestPhase2 =
  //       principalAmount * annualInterestRate * (repaymentPeriodPhase2Months / 12);

  //     // Calculate total payment and monthly payment for both phases
  //     const totalPaymentPhase1 = principalAmount + interestPhase1;
  //     const monthlyPaymentPhase1 =
  //       totalPaymentPhase1 / repaymentPeriodPhase1Months;

  //     const totalPaymentPhase2 = principalAmount + interestPhase2;
  //     const monthlyPaymentPhase2 =
  //       totalPaymentPhase2 / repaymentPeriodPhase2Months;

  //     // Format values
  //     const formattedTotal = formatCurrency(
  //       totalPaymentPhase1 + totalPaymentPhase2
  //     );
  //     const formattedMonthly = formatCurrency(monthlyPaymentPhase1);
  //     const formattedMonthly2 = formatCurrency(monthlyPaymentPhase2);
  //     const formattedResult = formatCurrency(interestPhase1 + interestPhase2);

  //     // Set the state values
  //     setTotal(formattedTotal);
  //     setMonthly(formattedMonthly);
  //     setMonthly2(formattedMonthly2);
  //     setResult(formattedResult);
  //   };

  const formatCurrency = (amount) => {
    return `₦${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  const calculateReturn = () => {
    const totalLoanAmount =
      Number(tuition) + Number(hostel) + Number(costOfLiving) + Number(others);

    const interestFormula = totalLoanAmount * 0.34 * (period / 12);

    const totalRepayment = totalLoanAmount + interestFormula;

    const monthlyRepayment = totalRepayment / period;

    setTotalLoan(parseFloat(totalLoanAmount)); // Now use the formatted string
    setMonthly(formatCurrency(monthlyRepayment));
    setTotalPayment(formatCurrency(totalRepayment));
    setInterest(formatCurrency(interestFormula));
  };

  const Reset = () => {
    setTotalLoan("");
    setInterest("");
    setTotalPayment("");
    setMonthly("");
    setTuition("");
    setHostel("");
    setCostOfLiving("");
    setOthers("");
    setPeriod(6);
  };

  return (
    <div className="p-10 lg:p-0">
      <div className="border z-20 bg-white mx-auto my-8 border-black rounded-2xl p-3 md:max-w-2xl flex flex-col gap-8">
        <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
          <div className="flex justify-between items-center">
            <p className="uppercase font-semibold text-sm">Tution Fee</p>
            <input
              type="number"
              value={tuition}
              onChange={(e) => setTuition(e.target.value)}
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="uppercase font-semibold text-sm">Hostel Fee </p>
            <input
              type="number"
              value={hostel}
              onChange={(e) => setHostel(e.target.value)}
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="uppercase font-semibold text-sm">Cost Of Living </p>
            <input
              type="number"
              value={costOfLiving}
              onChange={(e) => setCostOfLiving(e.target.value)}
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="uppercase font-semibold text-sm">other cost</p>
            <input
              type="number"
              value={others}
              onChange={(e) => setOthers(e.target.value)}
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>
        </div>
        <div>
          <p className="font-medium uppercase text-xl mb-4">
            Select your flexible loan Period
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <button
              className={`flex items-center font-semibold py-3 px-6 rounded-xl border-2 text-[#db251a] border-[#db251a] cursor-pointer ${
                period === 6 ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => setPeriod(6)}
            >
              6 months
            </button>
            <button
              className={`flex items-center font-semibold py-3 px-6 rounded-xl border-2 text-[#db251a] border-[#db251a] cursor-pointer ${
                period === 12 ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => setPeriod(12)}
            >
              12 months
            </button>
            <button
              className={`flex items-center font-semibold py-3 px-6 rounded-xl border-2 text-[#db251a] border-[#db251a] cursor-pointer ${
                period === 18 ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => setPeriod(18)}
            >
              18 months
            </button>
          </div>
        </div>
        <span className="flex items-center justify-end gap-4">
          <button
            className="font-semibold py-3 px-6 rounded-xl border-2 text-[#db251a] border-[#db251a]"
            onClick={Reset}
          >
            RESET
          </button>
          <button
            className="font-semibold py-3 px-6 rounded-xl border-2 bg-[#db251a] border-[#db251a] text-white"
            onClick={() => calculateReturn()}
          >
            COMPUTE
          </button>
        </span>
        <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
          <div className="flex justify-between items-center">
            <p className="uppercase font-semibold text-sm">total loan Amount</p>
            <input
              type="number"
              value={totalLoan}
              disabled
              //   onChange={(e) => setTotal(e.target.value)}
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="uppercase font-semibold text-sm">
              Your Monthly Payment
            </p>
            <input
              type="text"
              value={monthly}
              disabled
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>

          <div className="flex justify-between items-center gap-4">
            <p className="uppercase font-semibold text-sm">
              Your Total Payment will be
            </p>
            <input
              type="text"
              value={totalPayment}
              disabled
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="uppercase font-semibold text-sm">
              Your Total Interest Payment Will Be
            </p>
            <input
              type="text"
              placeholder=""
              value={interest}
              disabled
              className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
