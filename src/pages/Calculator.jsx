import { useRef, useState } from "react";
import { usePDF } from "react-to-pdf";

const Calculator = () => {
  const [interest, setInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [tuition, setTuition] = useState(0);
  const [hostel, setHostel] = useState(0);
  const [costOfLiving, setCostOfLiving] = useState(0);
  const [others, setOthers] = useState(0);
  const [period, setPeriod] = useState(6);
  const [totalLoan, setTotalLoan] = useState(
    tuition + hostel + costOfLiving + others
  );

  const { toPDF, targetRef } = usePDF({
    filename: "calculated-loan.pdf",
  });

  const formatCurrency = (amount) => {
    return `₦${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  const calculateReturn = () => {
    const totalLoanAmount =
      parseFloat(tuition) +
      parseFloat(hostel) +
      parseFloat(costOfLiving) +
      parseFloat(others);

    const interestFormula = totalLoanAmount * 0.34 * (period / 12);

    const totalRepayment = totalLoanAmount + interestFormula;

    const monthlyRepayment = totalRepayment / period;

    setTotalLoan(totalLoanAmount);
    setMonthly(formatCurrency(monthlyRepayment));
    setTotalPayment(formatCurrency(totalRepayment));
    setInterest(formatCurrency(interestFormula));
  };

  const Reset = () => {
    setTotalLoan(0);
    setInterest(0);
    setTotalPayment(0);
    setMonthly(0);
    setTuition(0);
    setHostel(0);
    setCostOfLiving(0);
    setOthers(0);
    setPeriod(6);
  };

  function numberWithCommas(x) {
    const num = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(num);
    return num;
  }

  return (
    <>
      <div
        className="p-10 lg:p-0 min-h-screen min-w-[100vw] flex justify-center items-center flex-col"
        ref={targetRef}
      >
        <div className="border bg-white mx-auto my-8 border-black rounded-2xl p-3 md:max-w-2xl flex flex-col gap-8">
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
            <p className="font-medium uppercase text-lg mb-4">
              Select your flexible loan Period
            </p>
            <div className="flex justify-center md:justify-between items-center flex-wrap gap-4">
              <button
                className={`flex items-center font-semibold text-sm py-2 px-2 rounded-xl border-2 text-[#db251a] border-[#db251a] cursor-pointer ${
                  period === 6 ? "bg-red-500 text-white" : ""
                }`}
                onClick={() => setPeriod(6)}
              >
                6 months
              </button>
              <button
                className={`flex items-center font-semibold text-sm py-2 px-2 rounded-xl border-2 text-[#db251a] border-[#db251a] cursor-pointer ${
                  period === 12 ? "bg-red-500 text-white" : ""
                }`}
                onClick={() => setPeriod(12)}
              >
                12 months
              </button>
              <button
                className={`flex items-center font-semibold text-sm py-2 px-2 rounded-xl border-2 text-[#db251a] border-[#db251a] cursor-pointer ${
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
              <p className="uppercase font-semibold text-sm">
                total loan Amount
              </p>
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
              <p className="uppercase font-semibold text-sm">Service charge </p>
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
      <div className="flex justify-center items-center">
        <button
          onClick={() => toPDF()}
          className="bg-[#db251a] text-white p-4 rounded-xl hover:bg-white hover:text-red-500 border border-red-500"
        >
          Download as a PDF
        </button>
      </div>
    </>
  );
};

export default Calculator;
