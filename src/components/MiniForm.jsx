import React, { useEffect, useState } from "react";
import { nigerianStates } from "../constants";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";
import PaystackPop from "@paystack/inline-js";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const MiniForm = ({ bankName, prefillData }) => {
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    phone_number: "",
    gender: "",
    graduate_of: "",
    state_of_residence: "",
    date_of_birth: "",
    age: "",
    class_of_degree: "",
    otp: "123456",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        ...prefillData, // Overwrite default values with fetched data
      }));
    }
  }, [prefillData]);

  const payWithPayStack = (amounts) => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_8bf2b4700c3fcc36408da11bebbb7a1619c3f3ce",
      // key: "pk_live_689cd76b33c137c295bfbf58e38d9205627b0ea6",
      amount: amounts * 100,
      email: formData.email,
      onSuccess(transaction) {
        toast.success(`Payment successful ${transaction.reference}`);
        updatePaymentStatus(formData.email);
      },
      onClose() {
        toast.error("Payment canceled");
      },
    });
  };

  // Function to update has_paid to true
  const updatePaymentStatus = async (email) => {
    try {
      const response = await axios.patch(
        `${API_URL}onboarding-candidate/s/${email}/`,
        {
          email,
          has_paid: true,
        }
      );
      console.log("Payment status updated:", response.data);
    } catch (error) {
      console.error(
        "Error updating payment status:",
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
      if (prefillData && prefillData.email) {
        // If prefillData exists, update the existing record with PATCH
        response = await axios.patch(
          `${API_URL}onboarding-candidate/s/${prefillData.email}/`,
          formData
        );
      } else {
        // If no prefillData, create a new record with POST
        response = await axios.post(
          `${API_URL}onboarding-candidate/`,
          formData
        );
      }

      console.log("Success:", response.data);
      payWithPayStack(158000);
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
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
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                <option value="first_class">First Class / Distinction</option>
                <option value="second_upper">Second Class Upper</option>
                <option value="second_lower">Second Class Lower</option>
                <option value="third_class">Third Class</option>
                <option value="pass">Pass</option>
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
