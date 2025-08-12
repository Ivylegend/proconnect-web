import React from "react";
import { BiCheckCircle, BiX } from "react-icons/bi";

const PaymentSuccessfulModal = ({closeModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-auto shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Payment Successful!
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <BiX size={20} />
          </button>
        </div>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <BiCheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Application Submitted Successfully!
          </h4>
          <p className="text-gray-600 mb-6">
            Your payment has been processed and your application has been
            submitted. You will receive a confirmation email shortly. We'll get
            back to you soon.
          </p>
          <button
            onClick={closeModal}
            className="w-full bg-[#DB251A] hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessfulModal;
