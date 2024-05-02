import React, { useState } from "react";
import InterestImg from "../assets/interest-img.png";

const UniversityAdmission = () => {
  const [formData, setFormData] = useState({
    tookJAMB2024: "", // Yes/No option
    fullName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    coursesWritten: "",
    JAMBscore: "",
    universityWritten: "",
    stateOfResidence: "",
    gender: "",
    age: "",
    relationship: "", // Who (Mother, Father, etc.)
    parentphoneNumber: "",
    parentwhatsappNumber: "",
  });
  const [errors, setErrors] = useState({}); // State for storing validation errors

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value),
    })); // Update errors on change
  };

  const validate = (fieldName, value) => {
    let error = ""; // Initialize error string

    switch (fieldName) {
      case "fullName":
        if (!value.trim()) {
          error = "Full Name is required.";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format.";
        }
        break;
      case "phoneNumber":
      case "parentphoneNumber":
        if (!value.trim()) {
          error = "Phone number is required.";
        } else if (!/^\d+$/.test(value)) {
          error = "Invalid phone number format.";
        }
        break;
      case "coursesWritten":
      case "universityWritten":
        if (!value.trim()) {
          error = `${fieldName} is required.`;
        }
        break;
      case "JAMBscore":
        if (!value.trim()) {
          error = "JAMB Score is required.";
        } else if (isNaN(value) || parseInt(value, 10) < 0) {
          error = "Invalid JAMB Score format.";
        }
        break;
      case "age":
        if (!value.trim()) {
          error = "Age is required.";
        } else if (parseInt(value, 10) < 16 || parseInt(value, 10) > 130) {
          error = "Age must be between 16 and 130.";
        }
        break;
      case "stateOfResidence":
      case "gender":
      case "relationship":
        if (!value) {
          error = `${fieldName} is required.`;
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear any previous errors before validation
    setErrors({});

    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validate(name, value);
      if (error) {
        newErrors[name] = error;
      }
    });

    setErrors(newErrors);

    // Submit form data only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
      // You can handle form submission logic here (e.g., send data to server)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        gender: formData.gender,
        wrote_jamb: formData.tookJAMB2024,
        age: formData.age,
        state: formData.stateOfResidence,
        whatsapp: formData.whatsappNumber,
        university: formData.universityWritten,
        course: formData.coursesWritten,
        jamb_score: formData.JAMBscore,
        reference: formData.parentwhatsappNumber,
        relationship: formData.relationship,
        parent_phone: formData.parentphoneNumber,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://university-admission.eldanic.com/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === true) {
            console.log(result);
          } else {
            console.log(result);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      console.error("Validation Errors:", newErrors);
    }
  };

  return (
    <div className="px-10 sm:px-20 lg:pl-20 py-10 flex gap-8">
      <form className="w-full md:1/2" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-center font-semibold my-4">
          JAMB 2024 Registration Form
        </h2>
        <div className="flex flex-col mx-auto my-4 w-full gap-4 sm:gap-8">
          <div className="form-group">
            <label htmlFor="tookJAMB2024" className="text-lg font-medium">
              Did you write the 2024 JAMB Examination?*
            </label>
            <div className="radio-group flex gap-4">
              <label>
                <input
                  type="radio"
                  id="tookJAMB2024-yes"
                  name="tookJAMB2024"
                  value="Yes"
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="tookJAMB2024-no"
                  name="tookJAMB2024"
                  value="No"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="fullName" className="text-lg font-medium">
              Full Name as on Government ID*:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium">
              Active Email ID*:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-lg font-medium">
              Active Phone Number*:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="whatsappNumber" className="text-lg font-medium">
              Active WhatsApp Number*:
            </label>
            <input
              type="tel"
              name="whatsappNumber"
              id="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="coursesWritten" className="text-lg font-medium">
              Enter Course(s) you WROTE for*:
            </label>
            <input
              type="text"
              name="coursesWritten"
              id="coursesWritten"
              value={formData.coursesWritten}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="JAMBscore" className="text-lg font-medium">
              JAMB SCORE For 2024:
            </label>
            <input
              type="number"
              name="JAMBscore"
              id="JAMBscore"
              value={formData.JAMBscore}
              onChange={handleChange}
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="universityWritten" className="text-lg font-medium">
              Enter University you WROTE for*:
            </label>
            <input
              type="text"
              name="universityWritten"
              id="universityWritten"
              value={formData.universityWritten}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black w-full "
            />
          </div>

          <div className="form-group flex flex-col gap-2">
            <label htmlFor="stateOfResidence" className="text-lg font-medium">
              State of Residence*:
            </label>
            <select
              name="stateOfResidence"
              id="stateOfResidence"
              value={formData.stateOfResidence}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black h-12 bg-white w-full"
            >
              <option value="">-- Select State --</option>
              {/* Add options for each Nigerian state here */}
              <option value="AB">Abia</option>
              <option value="AD">Adamawa</option>
              <option value="AK">Akwa Ibom</option>
              <option value="AN">Anambra</option>
              <option value="BA">Bauchi</option>
              <option value="BY">Bayelsa</option>
              <option value="BE">Benue</option>
              <option value="Borno">Borno</option>
              <option value="CR">Cross River</option>
              <option value="DE">Delta</option>
              <option value="EB">Ebonyi</option>
              <option value="ED">Edo</option>
              <option value="EK">Ekiti</option>
              <option value="EN">Enugu</option>
              <option value="GO">Gombe</option>
              <option value="IM">Imo</option>
              <option value="JI">Jigawa</option>
              <option value="KD">Kaduna</option>
              <option value="KN">Kano</option>
              <option value="KA">Katsina</option>
              <option value="KB">Kebbi</option>
              <option value="KO">Kogi</option>
              <option value="KW">Kwara</option>
              <option value="LA">Lagos</option>
              <option value="NA">Nassarawa</option>
              <option value="NI">Niger</option>
              <option value="OG">Ogun</option>
              <option value="ON">Ondo</option>
              <option value="OS">Osun</option>
              <option value="OY">Oyo</option>
              <option value="PL">Plateau</option>
              <option value="RI">Rivers</option>
              <option value="SO">Sokoto</option>
              <option value="TA">Taraba</option>
              <option value="YO">Yobe</option>
              <option value="ZA">Zamfara</option>
              <option value="FCT">Federal Capital Territory</option>
            </select>
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="gender" className="text-lg font-medium">
              Gender*:
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black h-12 bg-white w-full"
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="age" className="text-lg font-medium">
              Age as at 2024*:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              min="16"
              max="130"
              required
              className="border rounded-md p-2 border-black w-full"
            />
          </div>
          {/* PARENT DETAILS */}
          <h2 className="font-semibold text-xl">
            Provide one your PARENTS or Guardian Details:
          </h2>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="relationship" className="text-lg font-medium">
              Who?*:
            </label>
            <select
              name="relationship"
              id="relationship"
              value={formData.relationship}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black h-12 bg-white w-full"
            >
              <option value="">-- Select Relationship --</option>
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Older Sibling">Older Sibling</option>
              <option value="Aunty">Aunty</option>
              <option value="Uncle">Uncle</option>
              <option value="Family Relation">Family Relation</option>
              <option value="Other Sponsor">Other Sponsor</option>
            </select>
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="parentphoneNumber" className="text-lg font-medium">
              Active Phone Number*:
            </label>
            <input
              type="tel"
              name="parentphoneNumber"
              id="parentphoneNumber"
              value={formData.parentphoneNumber}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <div className="form-group flex flex-col gap-2">
            <label
              htmlFor="parentwhatsappNumber"
              className="text-lg font-medium"
            >
              Active WhatsApp Number*:
            </label>
            <input
              type="tel"
              name="parentwhatsappNumber"
              id="parentwhatsappNumber"
              value={formData.parentwhatsappNumber}
              onChange={handleChange}
              className="border rounded-md p-2 border-black w-full "
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 mt-4 text-white p-4 rounded-md text-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="hidden md:flex md:w-1/2">
        <img
          className="h-full object-cover"
          src={InterestImg}
          alt="interest image"
        />
      </div>
    </div>
  );
};

export default UniversityAdmission;
