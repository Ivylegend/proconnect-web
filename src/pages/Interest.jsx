import { useEffect, useState } from "react";
import InterestImg from "../assets/interest-img.png";
import ReusableModal from "../components/small-components/ReusableModal";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";

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

const Interest = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    enquiries: "",
    product: "",
    email: "",
    phone: "",
    gender: "",
    residence_country: "",
    country_interested_in: "",
    completed: false,
  });

  const [countries, setCountries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        const data = await response.json();
        setCountries(
          data.map((country) => ({
            label: country.name.common,
            value: country.name.common,
          }))
        );
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.full_name) newErrors.full_name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.product) newErrors.product = "Please select a product";
    if (!formData.enquiries)
      newErrors.enquires = "Please specify who you're enquiring for";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      await axios.post(
        "https://elda-ai-drf.onrender.com/api/interested-candidates/",
        formData
      );

      setFormData({
        full_name: "",
        enquiries: "",
        product: "",
        email: "",
        phone: "",
        gender: "",
        residence_country: "",
        country_interested_in: "",
        completed: false,
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
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
                htmlFor="full_name"
                className="text-[#646464] font-semibold"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className={`w-full h-12 p-4 text-black rounded-lg border border-[#666666]`}
              />
              {errors.full_name && (
                <p className="text-red-500 text-sm">{errors.full_name}</p>
              )}
            </div>

            {/* ENQUIRIES */}
            <div className="mb-6 flex flex-col gap-3">
              <label
                htmlFor="enquiries"
                className="text-[#646464] font-semibold"
              >
                Who are you making enquiries for{" "}
                <span className="text-red-600">*</span>
              </label>
              <select
                name="enquiries"
                id="enquiries"
                value={formData.enquiries}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 bg-white text-black rounded-lg border border-[#666666]"
              >
                {errors.enquiries && (
                  <p className="text-red-500 text-sm">{errors.enquiries}</p>
                )}
                <option value="">--Select an option--</option>
                <option value="Myself">Myself</option>
                <option value="My Child / Minor">My Child / Minor</option>
                <option value="3rd Party Adult">3rd Party Adult</option>
              </select>
            </div>

            {/* PRODUCT INTERESTED */}
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="product" className="text-[#646464] font-semibold">
                Product Interested In <span className="text-red-600">*</span>
              </label>
              <select
                name="product"
                id="product"
                value={formData.product}
                onChange={handleChange}
                required
                className={`w-full h-12 px-4 bg-white text-black rounded-lg border border-[#666666]`}
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
              <label htmlFor="email" className="text-[#646464] font-semibold">
                Active Email ID <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full h-12 p-4 text-black rounded-lg border border-[#666666]`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* PHONE NUMBER */}
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="" className="text-[#646464] font-semibold">
                Active Phone Number <span className="text-red-600">*</span>
              </label>
              <PhoneInput
                country="ng"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                className="w-full"
                regions={[
                  "america",
                  "europe",
                  "asia",
                  "africa",
                  "oceania",
                  "austrailia",
                ]}
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
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* GENDER */}
            <div className="mb-6 flex flex-col gap-3">
              <label htmlFor="gender" className="text-[#646464] font-semibold">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className={`w-full h-12 px-4 bg-white text-black rounded-lg border border-[#666666]`}
              >
                <option value="">Select an option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* COUNTRY */}
            <div className="mb-8 flex flex-col gap-4">
              <label
                htmlFor="residence_country"
                className="text-[#646464] font-semibold"
              >
                Country of Residence <span className="text-red-600">*</span>
              </label>

              <Select
                options={countries}
                name="residence_country"
                value={countries.find(
                  (c) => c.value === formData.residence_country
                )}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    residence_country: selectedOption
                      ? selectedOption.value
                      : "",
                  })
                }
                styles={customStyles}
                required
              />
            </div>

            {/* COUNTRY INTERESTED IN ABROAD */}
            <div className="mb-8 flex flex-col gap-4">
              <label
                htmlFor="country_interested_in"
                className="text-[#646464] font-semibold"
              >
                Study Abroad Country Interested In{" "}
                <span className="text-red-600">*</span>
              </label>

              <Select
                options={countryOptions}
                name="country_interested_in"
                value={countryOptions.find(
                  (c) => c.value === formData.country_interested_in
                )}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    country_interested_in: selectedOption
                      ? selectedOption.value
                      : "",
                  })
                }
                styles={customStyles}
                required
              />
            </div>

            {/* SUBSCRIBE CHECKBOX */}
            <div className="flex items-center gap-2 my-4 cursor-pointer">
              <input
                type="checkbox"
                id="completed"
                name="completed"
                checked={formData.completed}
                onChange={(e) =>
                  setFormData({ ...formData, completed: e.target.checked })
                }
              />
              <p
                onClick={() =>
                  setFormData({ ...formData, completed: !formData.completed })
                }
                className="text-left lg:text-center text-[#1E4580] font-medium text-sm"
              >
                Keep me up to date with more information about this product,
                services, and offers
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="bg-[#DB251A] hover:bg-transparent hover:text-[#DB251A] transition-all duration-300 border border-[#DB251A] font-medium text-white rounded-lg text-center w-full h-12"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>

        {/* SECOND HALF */}
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
