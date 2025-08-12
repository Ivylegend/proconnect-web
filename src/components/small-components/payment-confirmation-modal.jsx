import React from "react";
import { BiCreditCard, BiX } from "react-icons/bi";

const PaymentConfirmationModal = ({ closePaymentModal, full_name, email, paymentLoading, handlePaymentConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-auto shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Confirm Payment
          </h3>
          <button
            onClick={closePaymentModal}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <BiX size={20} />
          </button>
        </div>
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <BiCreditCard className="h-6 w-6 text-blue-600" />
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            Payment Details
          </h4>
          <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Service:</span> Proconnect DIY
              Program
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Amount:</span> ₦20,000.00
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Name:</span> {full_name}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {email}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Click "Pay Now" to proceed with secure payment via Flutterwave. Your
            application will only be submitted after successful payment.
          </p>
          <div className="flex gap-3">
            <button
              onClick={closePaymentModal}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handlePaymentConfirm}
              disabled={paymentLoading}
              className="flex-1 bg-[#DB251A] hover:bg-red-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {paymentLoading ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Processing...
                </>
              ) : (
                "Pay Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationModal;
