// const config = {
//   public_key: FLUTTER_KEY,
//   tx_ref: Date.now(),
//   amount: discountedAmount > 0 ? discountedAmount : 0,
//   currency: currency,
//   payment_options: "card,mobilemoney,ussd",
//   customer: {
//     email: formData.email,
//     phone_number: formData.phone_number,
//     name: formData.full_name,
//   },
//   customizations: {
//     title: `To Proconnect ${bankName ? `through ${bankName}` : ""}`,
//     description: "Payment for academic counselling",
//     logo: Logo,
//   },
// };

// const handleFlutterPayment = useFlutterwave(config);

//  handleFlutterPayment({
//         callback: (flutterResponse) => {
//           toast.success(flutterResponse.status);
//           if (
//             flutterResponse.status !== "completed" &&
//             flutterResponse.status !== "successful"
//           ) {
//             toast.error("Failed Transaction");
//           } else {
//             updatePaymentStatus();
//           }
//           closePaymentModal();
//         },
//         onClose: () => {
//           toast.error("Payment cancelled");
//         },
//       });

// const PAYSTACK_KEY = import.meta.env.VITE_API_PAYSTACK_TEST_KEY;
// import Paystack from "@paystack/inline-js";

// const payWithPaystack = () => {
//   const popup = new Paystack();
//   popup.newTransaction({
//     key: "pk_live_689cd76b33c137c295bfbf58e38d9205627b0ea6",
//     email: formData.email,
//     amount: (discountedAmount > 0 ? discountedAmount : 0) * 100,
//     currency: currency || "NGN",
//     onSuccess: async (transaction) => {
//       console.log("Payment Success:", transaction);
//       await updatePaymentStatus();
//       toast.success("Payment successful!");
//     },
//     onCancel: () => {
//       toast.error("Payment was cancelled.");
//     },
//     onError: (error) => {
//       console.log("Payment Error:", error);
//       toast.error("Payment failed. Please try again.");
//     },
//   });
// };


// Loan calculator

{
  /* <div className="relative overflow-hidden">
  <div className="background-image2"></div>
  <div
    id="textImage"
    className="flex px-6 sm:px-10 py-10 md:py-20 lg:p-20 gap-10 lg:gap-20 items-center flex-col lg:flex-row-reverse"
  >
    <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
      <h2 className="text-2xl md:text-4xl font-bold leading-normal">
        <span className="">
          <span className="flex relative gap-8">
            Gl
            <img
              src={globe}
              alt="globe"
              className="absolute left-[21px] md:left-8 md:top-2"
            />
            bal
          </span>
          Education Loan Calculator
        </span>
      </h2>
    </div>
    <div className="border bg-white z-20 border-black rounded-2xl p-3 max-w-2xl flex flex-col gap-8">
      <div className="rounded-lg border-[0.4px] p-3 flex flex-col gap-4 bg-white">
        <div className="flex justify-between items-center">
          <p className="capitalize font-semibold text-sm">Amount of the loan</p>
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
</div>; */
}

{
  /* <div className="relative overflow-hidden">
  <div className="background-image1"></div>
  <div
    id="textImage"
    className="flex px-6 sm:px-10 py-10 md:py-20 lg:p-20 gap-10 lg:gap-20 items-center flex-col lg:flex-row"
  >
    <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
      <h2 className="text-2xl md:text-4xl font-bold leading-normal">
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
    <LoanCalculator />
  </div>
</div>; */
}

// const [principal, setPrincipal] = useState("");
// const [result, setResult] = useState("");
// const [total, setTotal] = useState("");
// const [monthly, setMonthly] = useState("");

// const calculateReturn = () => {
//   const principalRegex = /^[0-9]+$/;
//   const isPrincipalValid = principalRegex.test(principal);

//   if (!isPrincipalValid) {
//     console.error("Invalid principal amount");
//     return;
//   }

//   const annualInterestRate = 0.16;
//   const loanPeriodInMonths = 120;
//   const principalAmount = parseFloat(principal);

//   const monthlyInterestRate = annualInterestRate / 12;
//   const months = Math.min(parseInt(loanPeriodInMonths), loanPeriodInMonths);

//   const monthlyPayment =
//     (principalAmount * monthlyInterestRate) /
//     (1 - Math.pow(1 + monthlyInterestRate, -months));

//   const totalRepayment = monthlyPayment * months;
//   const totalInterest = totalRepayment - principalAmount;

//   const formattedResult = formatCurrency(totalInterest);
//   const formattedTotal = formatCurrency(totalRepayment);
//   const formattedMonthly = formatCurrency(monthlyPayment);

//   setResult(formattedResult);
//   setMonthly(formattedMonthly);
//   setTotal(formattedTotal);
// };

// const formatCurrency = (amount) => {
//   return `₦${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
// };

// const Reset = () => {
//   setResult(0);
//   setPrincipal(0);
//   setResult(0);
//   setMonthly(0);
//   setTotal(0);
// };