import React from "react";
import MiniForm from "../components/MiniForm";

const ManualOnboard = () => {
  return (
    <div className="px-6 py-5 md:py-10 md:px-20">
      <div className="flex items-center gap-5 flex-col justify-center mb-10">
        <h1 className="text-center font-semibold md:font-bold text-2xl">
          Welcome to the Proconnect Global Education Community
        </h1>
        <p className="text-center font-medium md:text-lg">
          Please sign up to receive updates for members
        </p>
      </div>

      <div className="w-full lg:w-[80%] mx-auto">
        <MiniForm manualOnboard={true} bankName="Manually Onboarded" />
      </div>
    </div>
  );
};

export default ManualOnboard;
