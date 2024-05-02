import React, { useState } from "react";
import InterestImg from "../assets/interest-img.png";
import ReusableModal from "../components/small-components/ReusableModal";

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
    relName: "",
    parentwhatsappNumber: "",
  });
  const [errors, setErrors] = useState({}); // State for storing validation errors
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "sessionid=sr1tiydcdjcytk5886hj9a5dupltu5gc");

      const raw = JSON.stringify({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        whatsapp_number: formData.whatsappNumber,
        gender: formData.gender,
        age: formData.age,
        university: formData.universityWritten,
        jamb_score: formData.JAMBscore,
        course: formData.coursesWritten,
        state: formData.stateOfResidence,
        wrote_jamb: formData.tookJAMB2024,
        relationship: formData.relationship,
        parent_name: formData.relName,
        active_phone: formData.parentphoneNumber,
        active_whatsapp_number: formData.parentwhatsappNumber,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://university-admission.eldanic.com/api/contact/",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          if (result.status === true) {
            console.log(result);
            setIsModalOpen(true);
          } else {
            console.log(result);
            setIsModalOpen(true);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      console.error("Validation Errors:", newErrors);
    }
  };

  const renderInput = (fieldName, labelText) => (
    <div className="form-group flex flex-col gap-2">
      <label htmlFor={fieldName} className="text-lg font-medium">
        {labelText}
      </label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        className={
          errors[fieldName]
            ? "border rounded-md p-2 border-red-500 w-full "
            : "border rounded-md p-2 border-black w-full "
        }
      />
      {errors[fieldName] && (
        <p className="error-message text-red-500">
          {/* Use template literal with field name */}
          Please enter a valid value for {fieldName}.
        </p>
      )}
    </div>
  );

  return (
    <div className="px-10 sm:px-20 lg:pl-20 py-10 flex gap-8">
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Your Information has been sent and you will get a response within 24 hours"
      />
      <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
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
          {renderInput("fullName", "Full Name as on Government ID*:")}
          {renderInput("email", "Active Email ID*:")}
          {renderInput("phoneNumber", "Active Phone Number*:")}
          {renderInput("whatsappNumber", "Active WhatsApp Number*:")}
          {renderInput("coursesWritten", "Enter Course(s) you WROTE for*:")}
          {renderInput("JAMBscore", "JAMB SCORE For 2024:")}
          {renderInput("universityWritten", "Enter University you WROTE for*:")}

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
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nassarawa">Nassarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
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
          {renderInput("age", "Age as at 2024*:")}

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
          {renderInput("relName", "Name of Relative*:")}
          {renderInput("parentphoneNumber", "Active Phone Number*:")}
          {renderInput("parentwhatsappNumber", "Active WhatsApp Number*:")}

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
