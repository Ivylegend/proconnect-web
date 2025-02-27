import { useState } from "react";
import Check from "../assets/check.png";
import CurveArrow from "../assets/curve-arrow.png";
import MiniForm from "./MiniForm";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [discount, setDiscount] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDiscountChange = (newDiscount) => {
    setDiscount(newDiscount);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getFormData = async () => {
    if (userEmail) {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}onboarding-candidate/s/${userEmail}/`
        );
        setUserData(response.data);console.log(response.data);

      } catch (error) {
        toast.error("Error getting user data", error || error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getPaymentDetails = () => {
    if (activeTab === "tab1") {
      return { amount: 138000, currency: "NGN" };
    } else if (activeTab === "tab2") {
      return { amount: 58, currency: "USD" };
    }
    return { amount: 138000, currency: "NGN" };
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

      {/* TAB CONTENT */}
      <div className="tab-content-container overflow-hidden relative">
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
                <p className="text-4xl font-bold my-10">₦ 138,000</p>
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
                    Admission Processing to any of our 17 supported countries
                  </p>
                </div>

                <a href="/global-community#checkout">
                  <button className="w-full border h-14 font-bold mt-8 border-[#db251A] rounded-lg text-[#db251A] hover:bg-[#db251A] hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
                    Join Now
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* USD PAYMENT */}
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
                <p className="text-4xl font-bold my-10">$58 USD</p>
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
                    Admission Processing to any of our 17 supported countries
                  </p>
                </div>
                <a href="/global-community#checkout">
                  <button className="w-full border h-14 font-bold mt-8 border-[#db251A] rounded-lg text-[#db251A] hover:bg-[#db251A] hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
                    Join Now
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CHECKOUT / COUPON MODAL */}

      <div
        id="checkout"
        className="mx-auto py-10 px-6 lg:px-20 md:w-[80%] flex flex-col items-center justify-center"
      >
        <MiniForm
          prefillData={userData}
          amount={getPaymentDetails().amount}
          currency={getPaymentDetails().currency}
          onDiscountChange={handleDiscountChange}
        />

        <div className="w-full my-5 mt-8 border rounded-2xl border-[#F8D3D1] py-5 px-3 md:px-10">
          <p className="font-semibold text-lg">Filled Before?</p>
          <label htmlFor="email" className="text-[#646464] font-medium">
            Enter email used to fill
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full my-2 md:mx-2 md:w-1/2 h-10 p-4 text-black rounded-md border"
          />

          <button
            onClick={getFormData}
            disabled={isLoading}
            className="font-medium bg-[#DB251A] text-white rounded-md p-2 hover:bg-white hover:border-[#DB251A] hover:text-[#DB251A] hover:border transition-colors duration-200"
          >
            {isLoading ? (
              <div className="flex gap-2 items-center justify-center">
                Retrieving your data <LuLoader2 className="animate-spin" />
              </div>
            ) : (
              "Proceed"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
