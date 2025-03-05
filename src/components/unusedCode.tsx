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
