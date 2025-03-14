import React from "react";
import MiniForm from "../components/MiniForm";
import Logo from "../assets/proconnect-logo-new.jpg";

const ManualOnboard = () => {
  return (
    <div className="px-6 py-5 md:py-10 md:px-20">
      <div className="flex items-center gap-5 flex-col justify-center mb-10">
        <div className="max-w-60 -mt-10 mb-10 h-32">
          <img src={Logo} alt="logo" className="object-cover" />
        </div>
        <h1 className="text-center font-semibold md:font-bold text-2xl">
          Welcome to the Proconnect Global Education Community
        </h1>
        <div>
          <p className="text-center font-medium md:text-lg">
            We are thrilled to have you onboarded as a Customer, kindly provide
            your details to begin your STUDY ABROAD PROCESSING.
          </p>
          <p className="text-center font-medium md:text-lg">Thank you.</p>
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto">
        <MiniForm manualOnboard={true} bankName="Manually Onboarded" />
      </div>
    </div>
  );
};

export default ManualOnboard;
