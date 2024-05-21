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
    costOfTuition: "",
    monthlyCostOfLiving: "",
    needFinancialSupport: "",
    mentorship: "",
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
    console.log("Form Submitted:", formData);

    // // Clear any previous errors before validation
    // setErrors({});

    // const newErrors = {};
    // Object.entries(formData).forEach(([name, value]) => {
    //   const error = validate(name, value);
    //   if (error) {
    //     newErrors[name] = error;
    //   }
    // });

    // setErrors(newErrors);

    // // Submit form data only if there are no errors
    // if (Object.keys(newErrors).length === 0) {
    //   console.log("Form Submitted:", formData);

    //   // You can handle form submission logic here (e.g., send data to server)
    //   const myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append("Cookie", "sessionid=sr1tiydcdjcytk5886hj9a5dupltu5gc");

    //   const raw = JSON.stringify({
    //     full_name: formData.fullName,
    //     email: formData.email,
    //     phone: formData.phoneNumber,
    //     whatsapp_number: formData.whatsappNumber,
    //     gender: formData.gender,
    //     age: formData.age,
    //     university: formData.universityWritten,
    //     jamb_score: formData.JAMBscore,
    //     course: formData.coursesWritten,
    //     state: formData.stateOfResidence,
    //     wrote_jamb: formData.tookJAMB2024,
    //     relationship: formData.relationship,
    //     parent_name: formData.relName,
    //     active_phone: formData.parentphoneNumber,
    //     active_whatsapp_number: formData.parentwhatsappNumber,
    //   });

    //   const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };

    //   fetch(
    //     "https://university-admission.eldanic.com/api/contact/",
    //     requestOptions
    //   )
    //     .then((response) => response.text())
    //     .then((result) => {
    //       if (result.status === true) {
    //         console.log(result);
    //         setIsModalOpen(true);
    //       } else {
    //         console.log(result);
    //         setIsModalOpen(true);
    //       }
    //     })
    //     .catch((error) => console.log("error", error));
    // } else {
    //   console.error("Validation Errors:", newErrors);
    // }
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
          {renderInput(
            "schoolAttended",
            "Type of Public Tertiary Institution YOU attend (University, College of Education, Polytechnic)"
          )}
          <div className="form-group">
            <label htmlFor="tookJAMB2024" className="text-lg font-medium">
              Type of Public Tertiary Institution YOU attend (University,
              College of Education, Polytechnic){" "}
            </label>
            <div className="radio-group flex gap-4">
              <label>
                <input
                  type="radio"
                  id="university"
                  name="university"
                  value="university"
                  onChange={handleChange}
                />
                University
              </label>
              <label>
                <input
                  type="radio"
                  id="collegeOfEducation"
                  name="collegeOfEducation"
                  value="collegeOfEducation"
                  onChange={handleChange}
                />
                College Of Education
              </label>
              <label>
                <input
                  type="radio"
                  id="polytechnic"
                  name="polytechnic"
                  value="polytechnic"
                  onChange={handleChange}
                />
                Polytechnic
              </label>
            </div>
          </div>
          {renderInput("nameOfSchoolAttended", "Name of Tertiary Institution")}
          {renderInput(
            "courseOfStudy",
            "Course of Study (Write in Full: e.g, BSc, Banking and Finance)"
          )}
          {renderInput(
            "yearInSchool",
            "Level (First Year, Second Year, Third Year, Fourth Year, Fifth Year, Sixth Year, Seventh Year)"
          )}
          {renderInput(
            "semester",
            "What Semester are you in NOW? (First Semester, Second Semester)"
          )}
          {renderInput("matricNo", "Matric No")}
          {renderInput("graduationYear", "Expected Graduation Year")}
          {renderInput("costOfTuition", "Specific Cost of Tuition")}
          {renderInput(
            "monthlyCostOfLiving",
            "What is your monthly AVERAGE Cost of Living?"
          )}
          {/* RADIO COMPONENTS */}
          {renderInput(
            "financialSupport",
            "Do you need Financial Support getting a Laptop for Academic Purposes?"
          )}
          {renderInput(
            "mentorship",
            "Will you want ProconnectPAY to MENTOR you VIRTUALLY for 6 Months through its Global Undergraduate Community?"
          )}

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

export default NelfundFinancing;
