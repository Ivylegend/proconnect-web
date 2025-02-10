import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { toast, ToastContainer } from "react-toastify";

const FLUTTER_KEY = import.meta.env.VITE_API_FLUTTER_KEY;

const FlutterComponent = () => {
  const config = {
    public_key: FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "Proconnect",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      if (response.status !== "completed") {
        console.log("Failed Transaction");
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };
  return (
    <div className="">
      <h1>Hello Test user</h1>
      <FlutterWaveButton {...fwConfig} className="border border-gray-500" />
    </div>
  );
};

export default FlutterComponent;
