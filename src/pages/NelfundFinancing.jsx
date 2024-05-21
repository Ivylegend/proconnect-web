import React, { useState } from "react";
import InterestImg from "../assets/interest-img.png";
import ReusableModal from "../components/small-components/ReusableModal";

const NelfundFinancing = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    schoolEmail: "",
    phoneNumber: "",
    whatsappNumber: "",
    age: "",
    gender: "",
    schoolAttended: "",
    nameOfSchoolAttended: "",
    courseOfStudy: "",
    yearInSchool: "",
    semester: "",
    matricNo: "",
    graduationYear: "",
    costOfTuition: 0,
    monthlyCostOfLiving: 0,
    needFinancialSupport: false,
    mentorship: false,
  });
  const [errors, setErrors] = useState({}); // State for storing validation errors
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === "radio" ? value === "true" : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, newValue),
    }));
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
      case "age":
        if (!value.trim()) {
          error = "Age is required.";
        } else if (parseInt(value, 10) < 16 || parseInt(value, 10) > 130) {
          error = "Age must be between 16 and 130.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Clear any previous errors before validation
    setErrors({});

    const newErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validate(name, value);
      if (error) {
        newErrors[name] = error;
        setLoading(false);
      }
    });

    setErrors(newErrors);

    // Submit form data only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);

      // You can handle form submission logic here (e.g., send data to server)
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "sessionid=9v4au3hykk3yhafsypsp8olqyg3fp0jw");

      const raw = JSON.stringify({
        full_name: formData.fullName,
        school_type: formData.schoolAttended,
        school_name: formData.nameOfSchoolAttended,
        course_study: formData.courseOfStudy,
        email: formData.email,
        level: formData.yearInSchool,
        semester: formData.semester,
        matric_no: formData.matricNo,
        grad_year: formData.graduationYear,
        cost_of_institution: formData.costOfTuition,
        cost_of_living: formData.monthlyCostOfLiving,
        official_school_email: formData.schoolEmail,
        age: formData.age,
        gender: formData.gender,
        phone: formData.phoneNumber,
        whatsapp_number: formData.whatsappNumber,
        need_financial_support: formData.needFinancialSupport,
        want_mentor: formData.mentorship,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      // fetch("https://nelfund.eldanic.com/api/contact", requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => {

      //   .catch((error) => console.log("error", error));
      fetch("https://nelfund.eldanic.com/api/contact/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (result.status === true) {
            console.log(result);
            setIsModalOpen(true);
            setLoading(false);
          } else {
            console.log(result);
            setLoading(false);
            setIsModalOpen(true);
          }
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
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
        type={
          fieldName === "costOfTuition" || fieldName === "monthlyCostOfLiving"
            ? "number"
            : "text"
        }
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
          Nelfund Financing{" "}
        </h2>
        <div className="flex flex-col mx-auto my-4 w-full gap-4 sm:gap-8">
          {renderInput(
            "fullName",
            "Full Name as on NIN or BVN (Surname, Middle Name, and First Name)"
          )}
          {renderInput("email", "Active Email ID*:")}
          {renderInput(
            "schoolEmail",
            "Official School Email ID (not compulsory)"
          )}
          {renderInput("phoneNumber", "Active Phone Number*:")}
          {renderInput("whatsappNumber", "WhatsApp Phone Number")}
          {renderInput("age", "Age as at 2024")}
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="gender" className="text-lg font-medium">
              Gender*
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
            <label htmlFor="schoolAttended" className="text-lg font-medium">
              Type of Public Tertiary Institution YOU attend
            </label>
            <select
              name="schoolAttended"
              id="schoolAttended"
              value={formData.schoolAttended}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black h-12 bg-white w-full"
            >
              <option value="">-- Select Type Of Institution --</option>
              <option value="university">University</option>
              <option value="college Of education">College Of Education</option>
              <option value="polytechnic">Polytechnic</option>
            </select>
          </div>
          {renderInput("nameOfSchoolAttended", "Name of Tertiary Institution")}
          {renderInput(
            "courseOfStudy",
            "Course of Study (Write in Full: e.g, BSc, Banking and Finance)"
          )}
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="yearInSchool" className="text-lg font-medium">
              Level
            </label>
            <select
              name="yearInSchool"
              id="yearInSchool"
              value={formData.yearInSchool}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black h-12 bg-white w-full"
            >
              <option value="">-- Your Current Year In School --</option>
              <option value="100 level">First Year</option>
              <option value="200 level">Second Year</option>
              <option value="300 level">Third Year</option>
              <option value="400 level">Fourth Year</option>
              <option value="500 level">Fifth Year</option>
              <option value="600 level">Sixth Year</option>
              <option value="700 level">Seventh Year</option>
            </select>
          </div>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="semester" className="text-lg font-medium">
              Semester
            </label>
            <select
              name="semester"
              id="semester"
              value={formData.semester}
              onChange={handleChange}
              required
              className="border rounded-md p-2 border-black h-12 bg-white w-full"
            >
              <option value="">-- Your Current Semester --</option>
              <option value="1st semester">First Semester</option>
              <option value="2nd semester">Second Semester</option>
            </select>
          </div>
          {renderInput("matricNo", "Matric No")}
          {renderInput("graduationYear", "Expected Graduation Year")}
          {renderInput("costOfTuition", "Specific Cost of Tuition")}
          {renderInput(
            "monthlyCostOfLiving",
            "What is your monthly AVERAGE Cost of Living?"
          )}
          {/* RADIO COMPONENTS */}
          <div className="form-group">
            <label
              htmlFor="needFinancialSupport"
              className="text-lg font-medium"
            >
              Do you need Financial Support getting a Laptop for Academic
              Purposes?
            </label>
            <div className="radio-group flex gap-4">
              <label>
                <input
                  type="radio"
                  id="needFinancialSupport-yes"
                  name="needFinancialSupport"
                  value="true"
                  checked={formData.needFinancialSupport === true}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="needFinancialSupport-no"
                  name="needFinancialSupport"
                  value="false"
                  checked={formData.needFinancialSupport === false}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="financialSupport" className="text-lg font-medium">
              Will you want ProconnectPAY to MENTOR you VIRTUALLY for 6 Months
              through its Global Undergraduate Community?
            </label>
            <div className="radio-group flex gap-4">
              <label>
                <input
                  type="radio"
                  id="mentorship-yes"
                  name="mentorship"
                  value="true"
                  checked={formData.mentorship === true}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="mentorship-no"
                  name="mentorship"
                  value="false"
                  checked={formData.mentorship === false}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-600 mt-4 text-white p-4 rounded-md text-lg"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
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

export default NelfundFinancing;
