import React, { useState } from "react";
import InterestImg from "../assets/interest-img.png";
import ReusableModal from "../components/small-components/ReusableModal";

const Interest = () => {
  const [fullName, setFullName] = useState("");
  const [enquiryFor, setEnquiryFor] = useState("");
  const [productInterested, setProductInterested] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState(false);

  // State variables for form field validity
  const [fullNameValid, setFullNameValid] = useState(true);
  const [enquiryForValid, setEnquiryForValid] = useState(true);
  const [productInterestedValid, setProductInterestedValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [countryValid, setCountryValid] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    validateFullName();
    validateEnquiryFor();
    validateProductInterested();
    validateEmail();
    validatePhoneNumber();
    validateGender();
    validateCountry();

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
      setIsModalOpen(true);
      setErrors("");
    } else {
      setErrors("Make sure to fill the form with the correct details");
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
    const phoneRegex = /^\d+$/; // Allow one or more digits
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
    <div className="px-10 relative sm:px-20 lg:pl-20 py-10 flex gap-8">
      {/* Reusable modal */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Form submitted successfully!"
      />

      <div className="w-full lg:w-1/2">
        <p className="font-bold text-xl text-center mb-12">
          REGISTRATION FORM FOR INTERESTED CUSTOMERS
        </p>

        <form onSubmit={handleFormSubmit}>
          {/* FULL NAME */}
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
              required
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                fullNameValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>

          {/* ENQUIRIES */}
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              What are you making enquiries for
            </label>
            <input
              type="text"
              id="enquires"
              value={enquiryFor}
              required
              onChange={(e) => setEnquiryFor(e.target.value)}
              onBlur={validateEnquiryFor}
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                enquiryForValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>

          {/* PRODUCT INTERESTED */}
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Product Interested In
            </label>
            <input
              type="text"
              id="productInterested"
              value={productInterested}
              onChange={(e) => setProductInterested(e.target.value)}
              onBlur={validateProductInterested}
              required
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                productInterestedValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>

          {/* EMAIL ID */}
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Active Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              required
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                emailValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Active Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={validatePhoneNumber}
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                phoneNumberValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>

          {/* GENDER */}
          <div className="mb-6 flex flex-col gap-3">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              value={gender}
              required
              onChange={(e) => setGender(e.target.value)}
              onBlur={validateGender}
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                genderValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>

          {/* COUNTRY */}
          <div className="mb-8 flex flex-col gap-4">
            <label htmlFor="" className="text-[#646464] font-semibold">
              Country of Residence
            </label>
            <input
              type="text"
              id="country"
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
              onBlur={validateCountry}
              className={`w-full h-12 p-4 text-black rounded-lg border ${
                countryValid ? "border-[#666666]" : "border-red-500"
              }`}
            />
          </div>

          {/* SUBSCRIBE CHECKBOX */}
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

          {/* ERROR MESSAGE */}
          <p className="text-red-500 mb-4">{errors}</p>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
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
