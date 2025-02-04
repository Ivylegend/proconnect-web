import { useRef, useState } from "react";
import { usePDF } from "react-to-pdf";
import MainLayout from "../layouts/MainLayout";

const Calculator = () => {
  const [period, setPeriod] = useState(6);
  const [values, setValues] = useState({
    tuition: "",
    hostel: "",
    costOfLiving: "",
    others: "",
  });

  const { toPDF, targetRef } = usePDF({
    filename: "calculated-loan.pdf",
  });

  const Reset = () => {
    setValues({
      tuition: "",
      hostel: "",
      costOfLiving: "",
      others: "",
    });
    setPeriod(6);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/,/g, ""); // Remove existing commas
    if (!isNaN(numericValue)) {
      const formattedValue = formatNumber(numericValue);
      setValues({ ...values, [name]: formattedValue });
    }
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calculateSum = () => {
    const sum = Object.values(values).reduce(
      (acc, val) => acc + (parseFloat(val.replace(/,/g, "")) || 0),
      0
    );
    return sum;
  };

  const sum = calculateSum();
  const interestFormula = sum * 0.34 * (period / 12);
  const totalRepayment = sum + interestFormula;
  const monthlyRepayment = period ? totalRepayment / period : 0;

  return (
    <MainLayout>
      <div
        className="p-10 lg:p-0 min-h-screen min-w-[100vw] flex justify-center items-center flex-col"
        ref={targetRef}
      >
        <div className="border bg-white mx-auto my-8 border-black rounded-2xl p-3 md:max-w-2xl flex flex-col gap-8">
          <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold text-sm">Tution Fee</p>
              <input
                type="text"
                name="tuition"
                value={values.tuition}
                onChange={handleChange}
                placeholder="Enter number"
                className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold text-sm">Hostel Fee </p>
              <input
                type="text"
                name="hostel"
                value={values.hostel}
                onChange={handleChange}
                placeholder="Enter number"
                className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold text-sm">Cost Of Living </p>
              <input
                type="text"
                name="costOfLiving"
                value={values.costOfLiving}
                onChange={handleChange}
                placeholder="Enter number"
                className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold text-sm">other cost</p>
              <input
                type="text"
                name="others"
                value={values.others}
                onChange={handleChange}
                placeholder="Enter number"
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
            <button className="font-semibold py-3 px-6 rounded-xl border-2 bg-[#db251a] border-[#db251a] text-white">
              COMPUTE
            </button>
          </span>
          <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
            <div className="flex justify-between items-center">
              <p className="uppercase font-semibold text-sm">
                total loan Amount
              </p>
              <div className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl">
                ₦{formatNumber(sum.toFixed(2))}
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p className="uppercase font-semibold text-sm">
                Your Monthly Payment
              </p>
              <div className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl">
                ₦{formatNumber(monthlyRepayment.toFixed(2))}
              </div>
            </div>

            <div className="flex justify-between items-center gap-4">
              <p className="uppercase font-semibold text-sm">
                Your Total Payment will be
              </p>
              <div className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl">
                ₦{formatNumber(totalRepayment.toFixed(2))}
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p className="uppercase font-semibold text-sm">Service charge </p>

              <div className="border w-[100px] sm:w-[200px] p-3 text-black rounded-xl">
                ₦{formatNumber(interestFormula.toFixed(2))}
              </div>
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
    </MainLayout>
  );
};

export default Calculator;
