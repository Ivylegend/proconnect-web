import { useState } from "react";
import { toast } from "react-toastify";
import PaystackPop from "@paystack/inline-js";
import Check from "../assets/check.png";
import CurveArrow from "../assets/curve-arrow.png";
import Modal from "./small-components/Modal";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");

  // const paystackApiKey = process.env.REACT_APP_PAYSTACK_API_KEY;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const payWithPayStack = (amounts) => {
    setIsModalOpen(false);
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_live_689cd76b33c137c295bfbf58e38d9205627b0ea6",
      amount: amounts * 100,
      email: userEmail,
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
    <div>
      <div className="tab-container mx-auto w-60 justify-between flex border border-red-500 items-center rounded-lg px-4 py-2 gap-2">
        <div
          className={`tab cursor-pointer p-4 rounded-lg w-1/2 flex items-center justify-center text-xl font-bold text-[#db251a] ${
            activeTab === "tab1" ? "bg-[#db251a] text-white" : ""
          }`}
          onClick={() => handleTabClick("tab1")}
        >
          Naira
        </div>
        <div
          className={`tab cursor-pointer p-4 rounded-lg w-1/2 flex items-center justify-center text-xl font-bold text-[#db251a] ${
            activeTab === "tab2" ? "bg-[#db251a] text-white" : ""
          }`}
          onClick={() => handleTabClick("tab2")}
        >
          USD
        </div>
      </div>

      {/* CHECKOUT / COUPON MODAL */}

      {isModalOpen && (
        <div className="modal-overlay fixed left-0 top-0 z-40 bg-blue-100 bg-opacity-30 h-full flex items-center justify-center border p-8 shadow-lg w-full">
          <div className="modal-content p-8 rounded-md shadow-lg flex flex-col gap-4 bg-white max-w-[350px] items-start">
            <span
              className="close-button flex items-start justify-end w-full cursor-pointer text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </span>
            <span className="flex flex-col gap-2 mb-4">
              <p className="font-semibold">Your Email Address *</p>
              <input
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                className="border w-full rounded-md p-3 text-sm"
                required
                type="email"
                placeholder="Your valid email address"
              />
            </span>
            <span className="flex flex-col gap-2 mb-4">
              <p className="font-semibold text-center">
                Enter Coupon Code If Available
              </p>
              <input
                value={couponCode}
                type="text"
                className="border w-full rounded-md p-3 text-sm"
                onChange={(event) => setCouponCode(event.target.value)}
              />
            </span>
            <button
              className="w-full border rounded-md bg-[#db251A] text-white p-4"
              onClick={() => {
                const discountedAmount =
                  couponCode === "1234" ? 300000 / 2 : 300000;
                payWithPayStack(discountedAmount);
              }}
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      )}

      {/* MODAL TWO */}
      {isModalOpen2 && (
        <div className="modal-overlay fixed left-0 top-0 z-40 bg-blue-100 bg-opacity-30 h-full flex items-center justify-center border p-8 shadow-lg w-full">
          <div className="modal-content p-8 rounded-md shadow-lg flex flex-col gap-4 bg-white max-w-[350px] items-start">
            <span
              className="close-button flex items-start justify-end w-full cursor-pointer text-2xl"
              onClick={() => setIsModalOpen2(false)}
            >
              &times;
            </span>
            <span className="flex flex-col gap-2 mb-4">
              <p className="font-semibold">Your Email Address *</p>
              <input
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                className="border w-full rounded-md p-3 text-sm"
                required
                type="email"
                placeholder="Your valid email address"
              />
            </span>
            <span className="flex flex-col gap-2 mb-4">
              <p className="font-semibold text-center">
                Enter Coupon Code If Available
              </p>
              <input
                value={couponCode}
                type="text"
                className="border w-full rounded-md p-3 text-sm"
                onChange={(event) => setCouponCode(event.target.value)}
              />
            </span>
            <button
              className="w-full border rounded-md bg-[#db251A] text-white p-4"
              onClick={() => {
                const discountedAmount =
                  couponCode === "1234" ? 280000 / 2 : 280000;
                payWithPayStack(discountedAmount);
              }}
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT */}
      <div className="tab-content-container overflow-hidden relative">
        {/* Add transition effect for content sliding */}
        <div
          className={`tab-content transition-transform duration-300 ${
            activeTab === "tab1" ? "translate-x-0" : "translate-x-[calc(-100%)]"
          }`}
        >
          {activeTab === "tab1" && (
            <div className="my-20 flex flex-col sm:flex-row gap-8 justify-center items-start">
              {/* GLOBAL COMMUNITY */}
              <div className="border-[#646464] border rounded-xl p-8 relative">
                <p className="text-2xl font-bold">
                  Join Our Global Education Community
                </p>
                <img
                  src={CurveArrow}
                  alt="curved arrow"
                  className="absolute w-1/4 lg:w-1/3 right-6"
                />
                <p className="text-4xl font-bold my-10">₦ 300,000</p>
                <p className="text-[#db251A] text-xl font-normal mb-5">
                  What's Included
                </p>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">Loan Processing</p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">
                    Admission Processing to the US or Canada
                  </p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">Visa Processing Support</p>
                </div>
                <button
                  // onClick={() => payWithPayStack(300000)}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full border h-14 font-bold mt-8 border-[#db251A] rounded-lg text-[#db251A] hover:bg-[#db251A] hover:text-white transition duration-300 ease-in-out flex items-center justify-center"
                >
                  Join Now
                </button>
              </div>

              {/* LOCAL COMMUNITY */}
              <div className="border-[#646464] border rounded-xl p-8 relative">
                <p className="text-2xl font-bold">
                  Join Our Local Education Community
                </p>
                <img
                  src={CurveArrow}
                  alt="curved arrow"
                  className="absolute w-1/4 lg:w-1/3 right-6"
                />
                <p className="text-4xl font-bold my-10">₦ 100,000</p>
                <p className="text-[#db251A] text-xl font-normal mb-5">
                  What's Included
                </p>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">Admission Processing</p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">
                    Loan and Non-Loan Finance Option Processing
                  </p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">
                    Access to Global Undergraduate Community
                  </p>
                </div>
                <button
                  // onClick={() => payWithPayStack(280000)}
                  onClick={() => setIsModalOpen2(true)}
                  className="w-full border h-14 font-bold mt-8 border-[#db251A] rounded-lg text-[#db251A] hover:bg-[#db251A] hover:text-white transition duration-300 ease-in-out flex items-center justify-center"
                >
                  Join Now
                </button>
              </div>
            </div>
          )}
        </div>

        {/* USD PAYMENT */}
        {/* Add transition effect for content sliding */}
        <div
          className={`tab-content transition-transform duration-300 ${
            activeTab === "tab2" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {activeTab === "tab2" && (
            <div className="my-20 flex flex-col sm:flex-row gap-8 justify-center items-start">
              {/* GLOBAL COMMUNITY */}
              <div className="border-[#646464] border rounded-xl p-8 relative">
                <p className="text-2xl font-bold">
                  Join Our Global Education Community
                </p>
                <img
                  src={CurveArrow}
                  alt="curved arrow"
                  className="absolute w-1/4 lg:w-1/3 right-6"
                />
                <p className="text-4xl font-bold my-10">$450usd</p>
                <p className="text-[#db251A] text-xl font-normal mb-5">
                  What's Included
                </p>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">Loan Processing</p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">
                    Admission Processing to the US or Canada{" "}
                  </p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">Visa Processing Support </p>
                </div>
                <a href="https://buy.stripe.com/fZe9Cx9G30Z6fficMN">
                  <button className="w-full border h-14 font-bold mt-8 border-[#db251A] rounded-lg text-[#db251A] hover:bg-[#db251A] hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
                    Join Now
                  </button>
                </a>
              </div>
              {/* LOCAL COMMUNITY */}
              <div className="border-[#646464] border rounded-xl p-8 relative">
                <p className="text-2xl font-bold">
                  Join Our Local Education Community
                </p>
                <img
                  src={CurveArrow}
                  alt="curved arrow"
                  className="absolute w-1/4 lg:w-1/3 right-6"
                />
                <p className="text-4xl font-bold my-10">$160usd</p>
                <p className="text-[#db251A] text-xl font-normal mb-5">
                  What's Included
                </p>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">Admission Processing</p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">Finance Option Processing</p>
                </div>
                <div className="flex items-center gap-4 my-6">
                  <img src={Check} alt="check image" />
                  <p className="font-semibold">
                    Global Undergraduate Community
                  </p>
                </div>
                <a href="https://buy.stripe.com/dR6bKF5pN5fm3wA146">
                  <button className="w-full border h-14 font-bold mt-8 border-[#db251A] rounded-lg text-[#db251A] hover:bg-[#db251A] hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
                    Join Now
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
