import React, { useState } from "react";
import InterestImg from "../assets/interest-img.png";

const Interest = () => {
  const [fullName, setFullName] = useState("");
  const [enquiryFor, setEnquiryFor] = useState("");
  const [productInterested, setProductInterested] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  // State variables for form field validity
  const [fullNameValid, setFullNameValid] = useState(true);
  const [enquiryForValid, setEnquiryForValid] = useState(true);
  const [productInterestedValid, setProductInterestedValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check form field validity before submitting
    if (
      fullNameValid &&
      enquiryForValid &&
      productInterestedValid &&
      emailValid &&
      phoneNumberValid &&
      genderValid &&
      countryValid
    ) {
      // Submit the form
      console.log("Form submitted successfully");
    } else {
      console.log("Form contains validation errors. Please fix them.");
    }
  };

  // Validation functions
  const validateFullName = () => {
    // Implement your validation logic
    setFullNameValid(fullName.trim() !== ""); // Example: Non-empty validation
  };

  const validateEnquiryFor = () => {
    // Implement your validation logic
    setEnquiryForValid(enquiryFor.trim() !== ""); // Example: Non-empty validation
  };

  const validateProductInterested = () => {
    // Implement your validation logic
    setProductInterestedValid(productInterested.trim() !== ""); // Example: Non-empty validation
  };

  const validateEmail = () => {
    // Implement your validation logic (basic email format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const validatePhoneNumber = () => {
    // Implement your validation logic (basic phone number format check)
    const phoneRegex = /^\d{10}$/;
    setPhoneNumberValid(phoneRegex.test(phoneNumber));
  };

  const validateGender = () => {
    // Implement your validation logic
    setGenderValid(gender.trim() !== ""); // Example: Non-empty validation
  };

  const validateCountry = () => {
    // Implement your validation logic
    setCountryValid(country.trim() !== ""); // Example: Non-empty validation
  };
  return (
    <div className="px-10 sm:px-20 lg:pl-20 py-10 flex gap-8">
      <div className="w-full lg:w-1/2">
        <p className="font-bold text-xl text-center mb-12">
          REGISTRATION FORM FOR INTERESTED CUSTOMERS
        </p>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="fullName" className="text-[#646464] font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={validateFullName}
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                fullNameValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              What are you making enquiries for
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Product Interested In
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Active Email ID
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Active Phone Number
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Gender
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="mb-8 flex flex-col gap-4">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Country of Residence
            </label>
            <input
              type="text"
              className="w-full h-12 p-4 text-black rounded-lg border border-[##666666]"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center gap-2 my-4">
            <input
              type="checkbox"
              id="subscribe"
              checked={subscribe}
              onChange={() => setSubscribe(!subscribe)}
            />
            <p className="text-left lg:text-center text-[#1E4580] font-medium">
              Keep me up to date with more information about this product,
              services, and offers
            </p>
          </div>
          <input type="submit" value="" />
          <button
            type="submit"
            // onClick={handleFormSubmit}
            className="bg-[#DB251A] font-medium text-white rounded-lg text-center w-full h-12"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="hidden lg:flex lg:w-1/2">
        <img
          className="h-full object-cover"
          src={InterestImg}
          alt="interest image"
        />
      </div>
    </div>
  );
};

export default Interest;
