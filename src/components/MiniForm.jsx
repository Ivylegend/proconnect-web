import React, { useEffect, useState } from "react";
import { nigerianStates } from "../constants";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { toast } from "react-hot-toast";
import Logo from "../assets/proconnect-logo-new.jpg";
import { useLocation } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
const FLUTTER_KEY = import.meta.env.VITE_API_FLUTTER_KEY;

const MiniForm = ({
  bankName,
  prefillData,
  amount,
  currency,
  onDiscountChange,
}) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    otp: "123456",
    has_paid: false,
    otp_used: false,
    phone_number: "",
    whatsapp: "0",
    gender: "",
    graduate_of: "",
    state_of_residence: "",
    date_of_birth: "",
    age: "",
    class_of_degree: "",
    bank: "",

    // resume: "",
    degree: [],

    countries: [],

    interest: {},

    has_masters_degree: false,
    specific_cgpa: "0",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const location = useLocation();
  const route = location.pathname === "/global-community";

  const discountedAmount = amount - discount;

  const config = {
    public_key: FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: discountedAmount > 0 ? discountedAmount : 0,
    currency: currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: formData.email,
      phone_number: formData.phone_number,
      name: formData.full_name,
    },
    customizations: {
      title: `To Proconnect ${bankName ? `through ${bankName}` : ""}`,
      description: "Payment for academic counselling",
      logo: Logo,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        ...prefillData,
      }));
    }
  }, [prefillData]);

  const calculateDiscount = (e) => {
    e.preventDefault();
    const today = new Date().getDay();
    let discountAmount = 0;
    const upperCode = discountCode.toUpperCase();

    if (upperCode === "LEGACY" && today === 6) {
      discountAmount = 0.48 * amount; // 48% discount
    } else if (upperCode === "ELDANIC" && today === 0) {
      discountAmount = 0.35 * amount; // 35% discount
    } else {
      if (upperCode === "LEGACY" && today !== 6) {
        toast.error("This discount is only valid on Saturdays.");
      } else if (upperCode === "ELDANIC" && today !== 0) {
        toast.error("This discount is only valid on Sundays.");
      } else {
        toast.error("Invalid discount code. Please enter a valid one.");
      }
      discountAmount = 0;
    }

    setDiscount(discountAmount);
    onDiscountChange(discountAmount);
  };

  const updatePaymentStatus = async () => {
    try {
      await axios.put(`${API_URL}onboarding-candidate/s/${formData.email}/`, {
        has_paid: true,
        bank: bankName ? bankName : "Paid through website",
        interest: {},
      });
      toast.success("Payment status updated");
    } catch (error) {
      console.error(error);
      toast.error(
        "Error updating payment status",
        error.response?.data || error.message
      );
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let response;
      let userId;

      const updatedData = { ...formData };

      delete updatedData.countries;
      delete updatedData.degree;

      if (prefillData && prefillData.email) {
        response = await axios.put(
          `${API_URL}onboarding-candidate/s/${prefillData.email}/`,
          { ...updatedData }
        );

        userId = prefillData.id;
      } else {
        response = await axios.post(`${API_URL}onboarding-candidate/`, {
          ...formData,
        });
        userId = response?.data?.id;
      }

      handleFlutterPayment({
        callback: (flutterResponse) => {
          toast.success(flutterResponse.status);
          if (
            flutterResponse.status !== "completed" &&
            flutterResponse.status !== "successful"
          ) {
            toast.error("Failed Transaction");
          } else {
            updatePaymentStatus();
          }
          closePaymentModal();
        },
        onClose: () => {
          toast.error("Payment cancelled");
        },
      });
    } catch (error) {
      const errorData = error.response?.data;
      if (errorData && typeof errorData === "object") {
        const errorMessages = Object.entries(errorData)
          .map(
            ([key, value]) =>
              `${key}: ${Array.isArray(value) ? value.join(", ") : value}`
          )
          .join("\n");

        toast.error(`Error submitting form:\n${errorMessages}`);
      } else {
        toast.error(
          `Error submitting form: ${error.message || "Something went wrong"}`
        );
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="w-full bg-white border rounded-2xl border-[#F8D3D1] py-9 px-3 md:px-10">
          <h2 className="font-bold text-2xl mb-5">Personal Details</h2>

          <div className="mb-6 flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-[#646464] font-medium">
              Your Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-10 p-4 text-black rounded-md border"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="full_name" className="text-[#646464] font-medium">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full h-10 p-4 text-black rounded-md border"
              />
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="phone_number"
                className="text-[#646464] font-medium"
              >
                Personal Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="w-full h-10 p-4 text-black rounded-md border"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="gender" className="text-[#646464] font-medium">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full h-10 px-2 text-black rounded-md border bg-white"
              >
                <option value="">--Select gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="graduate_of"
                className="text-[#646464] font-medium"
              >
                Graduate Of <span className="text-red-600">*</span>
              </label>
              <select
                id="graduate_of"
                name="graduate_of"
                value={formData.graduate_of}
                onChange={handleChange}
                required
                className="w-full h-10 px-2 text-black rounded-md border bg-white"
              >
                <option value="">--Select--</option>
                <option value="Polytechnic">Polytechnic</option>
                <option value="University">University</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="state_of_residence"
                className="text-[#646464] font-medium"
              >
                State Of Residence <span className="text-red-600">*</span>
              </label>
              <select
                id="state_of_residence"
                name="state_of_residence"
                value={formData.state_of_residence}
                onChange={handleChange}
                required
                className="w-full h-10 px-2 text-black rounded-md border bg-white"
              >
                <option value="">--Select a state--</option>
                {nigerianStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="date_of_birth"
                className="text-[#646464] font-medium"
              >
                Date Of Birth <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
                className="w-full h-10 p-4 text-black rounded-md border bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="age" className="text-[#646464] font-medium">
                Age <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full h-10 p-4 text-black rounded-md border"
              />
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="class_of_degree"
                className="text-[#646464] font-medium"
              >
                Class of Degree <span className="text-red-600">*</span>
              </label>
              <select
                id="class_of_degree"
                name="class_of_degree"
                value={formData.class_of_degree}
                onChange={handleChange}
                required
                className="w-full h-10 px-2 text-black rounded-md border bg-white"
              >
                <option value="">--Select class of degree--</option>
                <option value="First class / Distinction">
                  First Class / Distinction
                </option>
                <option value="Second class upper">Second Class Upper</option>
                <option value="Second class lower">Second Class Lower</option>
                <option value="Third class">Third Class</option>
                <option value="Pass">Pass</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-8">
          <div className="flex gap-2">
            <input type="checkbox" required />
            <p className="text-sm">
              I confirm that I have read and understand the loan terms and
              conditions before making this non-refundable payment of the
              Proconnect Service Fee.
            </p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" required />
            <p className="text-sm">
              I confirm that I have read and understand the Proconnect Service
              terms and conditions before making this non-refundable payment of
              the Proconnect Service Fee.
            </p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" required />
            <p className="text-sm">
              I confirm that I understand that neither Proconnect, {bankName},
              nor its International Banking Partners influence the visa decision
              process in any country where this loan is applicable.
            </p>
          </div>
        </div>

        {/* Discount Code Input */}
        {route && (
          <div className="mb-8">
            <label
              htmlFor="discountCode"
              className="text-[#646464] font-medium mt-4 block"
            >
              Have a discount code?
            </label>
            <input
              type="text"
              id="discountCode"
              name="discountCode"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              onBlur={calculateDiscount}
              placeholder="Enter discount code"
              className="w-full my-2 md:mx-2 md:w-1/2 h-10 p-4 text-black rounded-md border"
            />
            <button
              onClick={calculateDiscount}
              className="hover:bg-[#DB251A] hover:text-white rounded-md p-2 bg-white border border-[#DB251A] text-[#DB251A] transition-colors duration-200"
            >
              Apply code
            </button>
          </div>
        )}

        <div className="w-full">
          <button
            type="submit"
            disabled={isLoading}
            className="font-semibold w-full bg-[#DB251A] text-white rounded-md p-2 hover:bg-white hover:border-[#DB251A] hover:text-[#DB251A] hover:border transition-colors duration-200"
          >
            {isLoading ? (
              <div className="flex gap-2 items-center justify-center">
                Submitting <LuLoader2 className="animate-spin" />
              </div>
            ) : prefillData ? (
              "Proceed to Payment"
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MiniForm;
