import React, { useEffect, useState } from "react";
import InterestImg from "../assets/interest-img.png";
import ReusableModal from "../components/small-components/ReusableModal";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MainLayout from "../layouts/MainLayout";

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
  const [countries, setCountries] = useState([]);
  const [countryAbroad, setcountryAbroad] = useState("");

  // State variables for form field validity
  const [fullNameValid, setFullNameValid] = useState(true);
  const [enquiryForValid, setEnquiryForValid] = useState(true);
  const [productInterestedValid, setProductInterestedValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [countryValid, setCountryValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid black" : "1px solid #666666",
      borderRadius: state.isFocused ? "8px" : "8px",
      boxShadow: state.isFocused ? "none" : "none",
      padding: state.isFocused ? "6px" : "6px",
    }),
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name"
      );
      const data = await response.json();
      return data.map((country) => ({
        label: country.name.common,
        value: country.name.common,
      }));
    } catch (error) {
      console.error("Error fetching countries", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchCountriesData = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    };

    fetchCountriesData();
  }, []);

  const initialValues = {
    contactno: "",
    country_code: "",
  };
  const [referenceData, setReferenceData] = useState(initialValues);

  // CHANGING PHONE NUMBER
  const handleChange = (e, value, name) => {
    if (name === "contactno") {
      let splitMobile = e?.split(value?.dialCode);
      setReferenceData({
        ...referenceData,
        country_code: value?.dialCode,
        contactno: splitMobile?.[1] || "",
      });
    } else
      setReferenceData({ ...referenceData, [e.target.name]: e.target.value });
  };

  const countryOptions = [
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    {
      value: "United Kingdom (Scotland, Wales, Ireland and England)",
      label: "United Kingdom (Scotland, Wales, Ireland and England)",
    },
    { value: "HongKong", label: "HongKong" },
    { value: "Singapore", label: "Singapore" },
    { value: "France", label: "France" },
    { value: "Germany", label: "Germany" },
    { value: "Australia", label: "Australia" },
    { value: "South-Africa", label: "South-Africa" },
    { value: "China", label: "China" },
    { value: "Denmark", label: "Denmark" },
    { value: "Belgium", label: "Belgium" },
    { value: "Spain", label: "Spain" },
    { value: "Italy", label: "Italy" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Portugal", label: "Portugal" },
  ];

  // SUBMITTING FORM
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate all form fields
    validateFullName();
    validateEnquiryFor();
    validateProductInterested();
    validateEmail();
    validateGender();
    validateCountry();

    // Check form field validity before submitting
    if (
      fullNameValid &&
      enquiryForValid &&
      productInterestedValid &&
      emailValid &&
      genderValid &&
      countryValid
    ) {
      setLoading(true);
      // Submit the form with actual form values
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        full_name: fullName,
        enquiry_on: enquiryFor,
        email: email,
        phone: `${referenceData.country_code}${referenceData.contactno}`, // Use referenceData for the phone number
        gender: gender,
        country: country,
        interested_in: productInterested,
        country_interested_in: countryAbroad,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      // Make the API call
      // fetch("https://elda-ai-drf.onrender.com/api/new-leads/", requestOptions)
      fetch("https://form.eldanic.com/api/contact/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === true) {
            console.log(result);
            // console.log("Form submitted successfully");
            setIsModalOpen(true);
            setLoading(false);
          } else {
            console.log(result);
            setLoading(false);
          }
        })
        .catch((error) => console.log("error", error));

      setErrors("");
    } else {
      setErrors("Make sure to fill the form with the correct details");
    }
  };

  // Validation functions
  const validateFullName = () => {
    setFullNameValid(fullName.trim() !== "");
  };

  const validateEnquiryFor = () => {
    setEnquiryForValid(enquiryFor.trim() !== "");
  };

  const validateProductInterested = () => {
    setProductInterestedValid(productInterested.trim() !== "");
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{8,15}$/;

    setPhoneNumberValid(phoneRegex.test(phoneNumber));
  };

  const validateGender = () => {
    setGenderValid(gender.trim() !== "");
  };

  const validateCountry = () => {
    setCountryValid(country.trim() !== "");
  };

  const handleInterest = (e) => {
    setProductInterested(e.target.value);
  };

  return (
    <MainLayout>
      <div className="px-10 relative sm:px-20 lg:pl-20 py-10 flex gap-8">
        {/* Reusable modal */}
        <ReusableModal
          isOpen={isModalOpen}
          onClose={closeModal}
          message="Your Information has been sent and you will get a response within 24 hours"
        />

        <div className="w-full lg:w-1/2">
          <p className="font-bold text-xl text-center mb-12">
            REGISTRATION FORM FOR INTERESTED CUSTOMERS
          </p>

          <form onSubmit={handleFormSubmit}>
            {/* FULL NAME */}
            <div className="mb-6 flex flex-col gap-3">
              <label
                htmlFor="fullName"
                className="text-[#646464] font-semibold"
              >
                Full Name <span className="text-red-600">*</span>
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
                Who are you making enquiries for{" "}
                <span className="text-red-600">*</span>
              </label>
              <select
                name="enquiryFor"
                id="enquiryFor"
                value={enquiryFor}
                onChange={(e) => setEnquiryFor(e.target.value)}
                onBlur={validateEnquiryFor}
                className={`w-full h-12 px-4 bg-white text-black rounded-lg border ${
                  enquiryForValid ? "border-[#666666]" : "border-red-500"
                }`}
              >
                <option value="">--Select an option--</option>
                <option value="Myself">Myself</option>
                <option value="My Child / Minor">My Child / Minor</option>
                <option value="3rd Party Adult">3rd Party Adult</option>
              </select>
            </div>

            {/* PRODUCT INTERESTED */}
            <div className="mb-6 flex flex-col gap-3">
              <label
                htmlFor="productInterested"
                className="text-[#646464] font-semibold"
              >
                Product Interested In <span className="text-red-600">*</span>
              </label>
              <select
                name="productInterested"
                id="productInterested"
                value={productInterested}
                onChange={handleInterest}
                onBlur={validateProductInterested}
                className={`w-full h-12 px-4 bg-white text-black rounded-lg border ${
                  productInterestedValid ? "border-[#666666]" : "border-red-500"
                }`}
              >
                <option value="">--Select an option--</option>
                <option value="MBA/MSC Pathway">MBA/MSC Pathway</option>
                <option value="Transfer BSc Pathway">
                  Transfer BSc Pathway
                </option>
                <option value="Private University Education Loan">
                  Private University Education Loan
                </option>
                <option value="Professional Examination / Testing Loan">
                  Professional Examination / Testing Loan
                </option>
              </select>
            </div>

            {/* EMAIL ID */}
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="" className="text-[#646464] font-semibold">
                Active Email ID <span className="text-red-600">*</span>
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
                Active Phone Number <span className="text-red-600">*</span>
              </label>
              <PhoneInput
                country="ng"
                regions={[
                  "america",
                  "europe",
                  "asia",
                  "africa",
                  "oceania",
                  "austrailia",
                ]}
                required
                inputStyle={{
                  height: "52px",
                  width: "100%",
                  borderRadius: "8px",
                  borderColor: "#666666",
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px 0 0 8px",
                  borderColor: "#666666",
                }}
                onBlur={validatePhoneNumber} // Trigger validation on blur
                onChange={(e, phone) => handleChange(e, phone, "contactno")}
                value={`${referenceData.country_code}${referenceData.contactno}`}
              />
            </div>

            {/* GENDER */}
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="" className="text-[#646464] font-semibold">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                onBlur={validateGender}
                className={`w-full h-12 px-4 bg-white text-black rounded-lg border ${
                  genderValid ? "border-[#666666]" : "border-red-500"
                }`}
              >
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* COUNTRY */}
            <div className="mb-8 flex flex-col gap-4">
              <label htmlFor="" className="text-[#646464] font-semibold">
                Country of Residence <span className="text-red-600">*</span>
              </label>

              <Select
                options={countries}
                value={countries.find((option) => option.value === country)}
                onChange={(selectedOption) => setCountry(selectedOption.value)}
                onBlur={validateCountry}
                styles={customStyles}
              />
            </div>

            {/* COUNTRY INTERESTED IN ABROAD */}
            <div className="mb-8 flex flex-col gap-4">
              <label htmlFor="" className="text-[#646464] font-semibold">
                Study Abroad Country Interested In{" "}
                <span className="text-red-600">*</span>
              </label>

              <Select
                options={countryOptions}
                value={countryOptions.find(
                  (option) => option.value === countryAbroad
                )}
                onChange={(selectedOption) =>
                  setcountryAbroad(selectedOption.value)
                }
                onBlur={validateCountry}
                styles={customStyles}
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
              <p className="text-left lg:text-center text-[#1E4580] font-medium text-sm">
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
              {loading ? "Loading..." : "Submit"}
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
    </MainLayout>
  );
};

export default Interest;
