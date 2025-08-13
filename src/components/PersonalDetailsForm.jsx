import Logo from "../assets/proconnect-logo-new.jpg";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { toast } from "react-hot-toast";

// // const API_URL = import.meta.env.VITE_API_URL;
const FLUTTER_KEY = import.meta.env.VITE_API_FLUTTER_KEY;

import { useEffect, useState } from "react";
import PaymentConfirmationModal from "./small-components/payment-confirmation-modal";
import PaymentSuccessfulModal from "./small-components/payment-successful-modal";
import axios from "axios";

export default function PersonalDetailsForm() {
  const [countries, setCountries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    enquiries: "",
    degree: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    residence_country: "Nigeria",
    residence_state: "",
    date: "",
    completed: false,
    payment_status: "pending",
  });

  const config = {
    public_key: FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: 20000, // ₦20000.00
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: formData.email,
      phone_number: formData.phone,
      name: formData.full_name,
    },
    customizations: {
      title: "Proconnect Service Payment",
      description: "Payment for DIY Program",
      logo: Logo,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        const data = await response.json();
        const sortedCountries = data
          .map((country) => ({
            label: country.name.common,
            value: country.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries", error);
        // Fallback countries list
        setCountries([
          { label: "Nigeria", value: "Nigeria" },
          { label: "United States", value: "United States" },
          { label: "United Kingdom", value: "United Kingdom" },
          { label: "Canada", value: "Canada" },
        ]);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // Required field validations
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full Name is required";
    } else if (formData.full_name.trim().length < 2) {
      newErrors.full_name = "Full Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.enquiries) {
      newErrors.enquiries = "Please select an institution";
    }

    if (!formData.degree) {
      newErrors.degree = "Please select your degree";
    }

    if (!formData.age) {
      newErrors.age = "Please enter your age";
    } else if (formData.age < 18 || formData.age > 100) {
      newErrors.age = "Age must be between 18 and 100";
    }

    if (!formData.residence_state.trim()) {
      newErrors.residence_state = "State of residence is required";
    }

    if (!formData.date) {
      newErrors.date = "Date of birth is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!formData.residence_country) {
      newErrors.residence_country = "Please select your country of residence";
    }

    if (!formData.completed) {
      newErrors.completed = "Please accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Flutterwave payment

  const processPayment = () => {
    handleFlutterPayment({
      callback: (flutterResponse) => {
        toast.success(flutterResponse.status);
        if (
          flutterResponse.status !== "completed" &&
          flutterResponse.status !== "successful"
        ) {
          toast.error("Failed Transaction");
        } else {
          // If payment successful, submit to database
          submitToDatabase();

          // Reset form
          setFormData({
            full_name: "",
            enquiries: "",
            degree: "",
            age: "",
            email: "",
            phone: "",
            gender: "",
            residence_country: "Nigeria",
            residence_state: "",
            date: "",
            completed: false,
            payment_status: "pending",
          });

          setErrors({});
          setIsModalOpen(true);
        }
        closePaymentModal();
      },
      onClose: () => {
        toast.error("Payment cancelled");
      },
    });
  };

  // Submit data to database
  const submitToDatabase = async () => {
    try {
      const { completed, ...restOfFormData } = formData;
      const dataToSubmit = {
        ...restOfFormData,
        payment_status: "paid",
      };

      const response = await axios.post(
        "http://elda-ai-drf.onrender.com/api/coaching-event-leads/",
        dataToSubmit
      );

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Failed to submit data to database");
      }

      return response.data;
    } catch (error) {
      console.error("Database submission error:", error);
      toast.error("Failed to submit data to database");
      throw error;
    }
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        firstErrorField.focus();
      }
      return;
    }

    // Show payment confirmation modal
    setIsPaymentModalOpen(true);
  };

  const handlePaymentConfirm = async () => {
    setIsPaymentModalOpen(false);
    setLoading(true);

    try {
      // Process payment first
      processPayment();
    } catch (error) {
      console.error("Payment or submission error:", error);
      setErrors({
        submit:
          "An error occurred during payment processing. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closePayModal = () => {
    setIsPaymentModalOpen(false);
  };

  const inputClasses = (fieldName) => `
    w-full h-10 px-3 text-sm text-gray-900 placeholder-gray-500
    border rounded-md transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${
      errors[fieldName]
        ? "border-red-500 bg-red-50"
        : "border-[#CFD3D4] bg-white hover:border-gray-400"
    }
  `;

  const selectClasses = (fieldName) => `
    w-full h-10 px-3 text-sm text-gray-900 bg-white
    border rounded-md transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${
      errors[fieldName]
        ? "border-red-500 bg-red-50"
        : "border-[#CFD3D4] hover:border-gray-400"
    }
  `;

  return (
    <>
      <div
        id="register"
        className="border border-[#F8D3D1] rounded-xl p-6 flex flex-col gap-6 w-full max-w-4xl mx-auto"
      >
        <h2 className="text-xl md:text-3xl font-bold text-center md:text-left text-gray-900">
          Personal Details
        </h2>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {/* FULL NAME */}
            <div className="space-y-2">
              <label
                htmlFor="full_name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClasses("full_name")}
                aria-invalid={errors.full_name ? "true" : "false"}
                aria-describedby={
                  errors.full_name ? "full_name-error" : undefined
                }
              />
              {errors.full_name && (
                <p id="full_name-error" className="text-red-600 text-sm mt-1">
                  {errors.full_name}
                </p>
              )}
            </div>

            {/* ENQUIRIES */}
            <div className="space-y-2">
              <label
                htmlFor="enquiries"
                className="block text-sm font-medium text-gray-700"
              >
                Graduate of <span className="text-red-500">*</span>
              </label>
              <select
                name="enquiries"
                id="enquiries"
                value={formData.enquiries}
                onChange={handleChange}
                className={selectClasses("enquiries")}
                aria-invalid={errors.enquiries ? "true" : "false"}
              >
                <option value="">Select an institution</option>
                <option value="university">University</option>
                <option value="polytechnic">Polytechnic</option>
                <option value="college">College of Education</option>
              </select>
              {errors.enquiries && (
                <p className="text-red-600 text-sm mt-1">{errors.enquiries}</p>
              )}
            </div>

            {/* DEGREE */}
            <div className="space-y-2">
              <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
              >
                Degree <span className="text-red-500">*</span>
              </label>
              <select
                name="degree"
                id="degree"
                value={formData.degree}
                onChange={handleChange}
                className={selectClasses("degree")}
                aria-invalid={errors.degree ? "true" : "false"}
              >
                <option value="">Select your degree</option>
                <option value="BSc">Bachelor's Degree (BSc)</option>
                <option value="MSc">Master's Degree (MSc)</option>
                <option value="PhD">Doctorate (PhD)</option>
              </select>
              {errors.degree && (
                <p className="text-red-600 text-sm mt-1">{errors.degree}</p>
              )}
            </div>

            {/* AGE */}
            <div className="space-y-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
                min="18"
                max="100"
                className={inputClasses("age")}
                aria-invalid={errors.age ? "true" : "false"}
              />
              {errors.age && (
                <p className="text-red-600 text-sm mt-1">{errors.age}</p>
              )}
            </div>

            {/* EMAIL ID */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Active Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={inputClasses("email")}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* PHONE NUMBER */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Active Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="Enter your phone number"
                className={inputClasses("phone")}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* RESIDENCE STATE */}
            <div className="space-y-2">
              <label
                htmlFor="residence_state"
                className="block text-sm font-medium text-gray-700"
              >
                State of Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="residence_state"
                name="residence_state"
                value={formData.residence_state}
                onChange={handleChange}
                placeholder="Enter your state"
                className={inputClasses("residence_state")}
                aria-invalid={errors.residence_state ? "true" : "false"}
              />
              {errors.residence_state && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.residence_state}
                </p>
              )}
            </div>

            {/* DATE OF BIRTH */}
            <div className="space-y-2">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={inputClasses("date")}
                aria-invalid={errors.date ? "true" : "false"}
              />
              {errors.date && (
                <p className="text-red-600 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            {/* GENDER */}
            <div className="space-y-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className={selectClasses("gender")}
                aria-invalid={errors.gender ? "true" : "false"}
              >
                <option value="O">Select gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-600 text-sm mt-1">{errors.gender}</p>
              )}
            </div>

            {/* COUNTRY OF RESIDENCE */}
            <div className="space-y-2">
              <label
                htmlFor="residence_country"
                className="block text-sm font-medium text-gray-700"
              >
                Country of Residence <span className="text-red-500">*</span>
              </label>
              <select
                name="residence_country"
                id="residence_country"
                value={formData.residence_country}
                onChange={handleChange}
                className={selectClasses("residence_country")}
                aria-invalid={errors.residence_country ? "true" : "false"}
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              {errors.residence_country && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.residence_country}
                </p>
              )}
            </div>
          </div>

          {/* FULL WIDTH SECTION */}
          <div className="space-y-6">
            {/* SUBSCRIBE CHECKBOX */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="completed"
                  name="completed"
                  checked={formData.completed}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      completed: e.target.checked,
                    }))
                  }
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  aria-invalid={errors.completed ? "true" : "false"}
                />
                <label
                  htmlFor="completed"
                  className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                >
                  I confirm that I have read and understand the Proconnect
                  Service terms and conditions before making this non-refundable
                  payment of the Proconnect Service Fee.{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.completed && (
                <p className="text-red-600 text-sm">{errors.completed}</p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="w-full">
              {errors.submit && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{errors.submit}</p>
                </div>
              )}
              <button
                type="button"
                onClick={handleFormSubmit}
                disabled={loading}
                className="w-full h-12 bg-[#DB251A] hover:bg-red-700 disabled:bg-gray-400 
                         text-white font-medium rounded-lg transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                         disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Processing...
                  </>
                ) : (
                  <>Submit</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT CONFIRMATION MODAL */}
      {isPaymentModalOpen && (
        <PaymentConfirmationModal
          closePaymentModal={closePayModal}
          full_name={formData.full_name}
          email={formData.email}
          paymentLoading={paymentLoading}
          handlePaymentConfirm={handlePaymentConfirm}
        />
      )}

      {/* SUCCESS MODAL */}
      {isModalOpen && <PaymentSuccessfulModal closeModal={closeModal} />}
    </>
  );
}
