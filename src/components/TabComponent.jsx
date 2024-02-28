import React from "react";
import Check from "../assets/check.png";
import CurveArrow from "../assets/curve-arrow.png";
import { toast } from "react-toastify";
import PaystackPop from "@paystack/inline-js";

const TabComponent = ({ title, amount1, amount2, price, include1, include2, include3 }) => {

  const payWithPayStack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_8bf2b4700c3fcc36408da11bebbb7a1619c3f3ce", // Provide the customer's email
      amount: amount1 !== undefined && amount1 !== null ? amount1 * 100 : amount2 * 100,
      email: "admin@gmail.com",
      onSuccess(transaction) {
        handlePayment(formData);
        toast.success(`Payment successful ${transaction.reference}`);
      },
      onClose() {
        toast.error("Payment canceled");
      },
    });
  };

  return (
    <div className="border-[#646464] border rounded-xl p-8 relative">
      <p className="text-2xl font-bold">{title}</p>
      <img src={CurveArrow} alt="curved arrow" className="absolute w-1/4 lg:w-1/3 right-6" />
      <p className="text-4xl font-bold my-10">{price}</p>
      <p className="text-[#db251A] text-xl font-normal mb-5">What's Included</p>
      <div className="flex items-center gap-4 my-6">
        <img src={Check} alt="check image" />
        <p className="font-semibold">{include1}</p>
      </div>
      <div className="flex items-center gap-4 my-6">
        <img src={Check} alt="check image" />
        <p className="font-semibold">{include2}</p>
      </div>
      <div className="flex items-center gap-4 my-6">
        <img src={Check} alt="check image" />
        <p className="font-semibold">{include3}</p>
      </div>
      <button onClick={payWithPayStack} className="w-full border h-14 font-bold mt-8 border-[#db251A] rounded-lg text-[#db251A] hover:bg-[#db251A] hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
        Join Now
      </button>
    </div>
  );
};

export default TabComponent;
