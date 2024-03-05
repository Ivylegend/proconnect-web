import React, { useState } from "react";

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(null);
  const [monthly, setMonthly] = useState(null);

  const calculateReturn = () => {};
  const Reset = () => {
    setResult("");
    setPrincipal("");
    setResult("");
    setTotal("");
    setMonthly("");
  };

  return (
    <div className="border z-20 bg-white border-black rounded-2xl p-3 max-w-2xl flex flex-col gap-8">
      <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
        <div className="flex justify-between items-center">
          <p className="capitalize font-semibold text-sm">Amount of the loan</p>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="border p-3 text-black rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="capitalize font-semibold text-sm">
            Annual Percentage Rate of Interest
          </p>
          <input
            type="text"
            placeholder="30%"
            disabled
            className="border p-3 text-black rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="font-semibold capitalize text-sm">
            Repayment Period in First Phase (60% in 11 months)
          </p>
          <input
            type="text"
            placeholder="12 MONTHS"
            className="border p-3 text-black rounded-xl"
            disabled
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="font-semibold capitalize text-sm">
            Repayment Period in Second Phase (40% in 61 months)
          </p>
          <input
            type="text"
            placeholder="60 MONTHS"
            className="border p-3 text-black rounded-xl"
            disabled
          />
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
        <div className="flex justify-between items-center gap-4">
          <p className="capitalize font-semibold text-sm">
            Your Monthly Payment (First Phase)
          </p>
          <input
            type="text"
            value={monthly}
            disabled
            className="border p-3 text-black rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="capitalize font-semibold text-sm">
            Your Monthly Payment (Second Phase)
          </p>
          <input
            type="text"
            value={monthly}
            disabled
            className="border p-3 text-black rounded-xl"
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="capitalize font-semibold text-sm">
            Your Total Payment will be
          </p>
          <input
            type="text"
            value={total}
            disabled
            className="border p-3 text-black rounded-xl"
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
            className="border p-3 text-black rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
