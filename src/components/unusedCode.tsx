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
