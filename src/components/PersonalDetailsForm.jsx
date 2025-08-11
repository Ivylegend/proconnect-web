import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

export default function PersonalDetailsForm() {
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
        //   "https://restcountries.com/v3.1/all?fields=name"
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
    residence_state: "",
    degree: "",
    age: "",
  });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid black" : "1px solid #666666",
      borderRadius: state.isFocused ? "8px" : "8px",
      boxShadow: state.isFocused ? "none" : "none",
      padding: state.isFocused ? "6px" : "6px",
    }),
  };

  const [countries, setCountries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
      newErrors.enquires = "Please the institution you attended";
    if (!formData.degree) newErrors.degree = "Please select your degree";
    if (!formData.age) newErrors.age = "Please enter your age";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      await axios.post(
        // "https://elda-ai-drf.onrender.com/api/interested-candidates/",
        formData
      );

      setFormData({
        residence_state: "",
        full_name: "",
        enquiries: "",
        product: "",
        email: "",
        phone: "",
        gender: "",
        residence_country: "",
        country_interested_in: "",
        completed: false,
        degree: "",
        age: "",
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-red-600 rounded-lg p-4 flex flex-col gap-4 w-full">
      <h1 className="flex gap-2 text-xl md:text-3xl font-bold text-center md:text-left">
        Personal Details
      </h1>
      <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
        {/* FULL NAME */}
        <div className="mb-6 flex flex-col gap-3">
          <label htmlFor="full_name" className="text-[#646464] font-semibold">
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
          <label htmlFor="enquiries" className="text-[#646464] font-semibold">
            Graduate of <span className="text-red-600">*</span>
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
            <option value="university">University</option>
            <option value="polytechnic">Polytechnic / Minor</option>
            <option value="college">College of Education</option>
          </select>
        </div>

        {/* DEGREE */}
        <div className="mb-6 flex flex-col gap-3">
          <label htmlFor="degree" className="text-[#646464] font-semibold">
            Degree <span className="text-red-600">*</span>
          </label>
          <select
            name="degree"
            id="degree"
            value={formData.degree}
            onChange={handleChange}
            required
            className={`w-full h-12 px-4 bg-white text-black rounded-lg border border-[#666666]`}
          >
            <option value="">--Select an option--</option>
            <option value="BSc">Bachelor&apos;s Degree (BSc)</option>
            <option value="MSc">Master&apos;s Degree (MSc)</option>
            <option value="PhD">Doctorate (PhD)</option>
          </select>
          {errors.degree && (
            <p className="text-red-500 text-sm">{errors.degree}</p>
          )}
        </div>

        {/* AGE */}
        <div className="mb-6 flex flex-col gap-3">
          <label htmlFor="age" className="text-[#646464] font-semibold">
            Age <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="18"
            max="100"
            className={`w-full h-12 px-4 text-black rounded-lg border border-[#666666]`}
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age}</p>
          )}
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

        {/* State of Residence */}
        <div className="mb-6 flex flex-col gap-3">
          <label
            htmlFor="residence_state"
            className="text-[#646464] font-semibold"
          >
            State of Residence <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="residence_state"
            name="residence_state"
            value={formData.residence_state}
            onChange={handleChange}
            required
            className={`w-full h-12 p-4 text-black rounded-lg border border-[#666666]`}
          />
          {errors.residence_state && (
            <p className="text-red-500 text-sm">{errors.residence_state}</p>
          )}
        </div>

        {/* Date of birth */}
        <div className="mb-6 flex flex-col gap-3">
          <label htmlFor="date" className="text-[#646464] font-semibold">
            Select Date of Birth <span className="text-red-600">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full h-12 p-4 text-black rounded-lg border border-[#666666]"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date}</p>
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
                residence_country: selectedOption ? selectedOption.value : "",
              })
            }
            styles={customStyles}
            required
          />
        </div>

        {/* SUBSCRIBE CHECKBOX */}
        <div className=" w-full">
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
            className="bg-[#DB251A] hover:bg-transparent hover:text-[#DB251A] transition-all duration-300 border border-[#DB251A] font-medium text-white rounded-lg text-center w-full h-12 mt-4"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
