// const UniversityAdmission = () => {
//   return (
//     <div className="py-4 sm:py-10 md:px-20 bg-[#F4F4F4]">
//       UniversityAdmission
//     </div>
//   );
// };
import React, { useState } from "react";

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    // You can handle form submission logic here (e.g., send data to server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl text-center font-semibold my-4">
        JAMB 2024 Registration Form
      </h2>
      <div className="flex flex-col mx-auto my-4 w-full px-8 sm:px-12 gap-4 sm:gap-8">
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
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black h-12 bg-white"
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
            className="border rounded-md p-2 border-black h-12 bg-white"
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
            className="border rounded-md p-2 border-black"
          />
        </div>
        {/* PARENT DETAILS */}
        <h2 className="font-semibold text-xl">
          Provide one your PARENTS or Guardian Details:
        </h2>
        <div className="form-group flex flex-col gap-2">
          <label
            htmlFor="relationship"
            className="text-lg font-medium"
          >
            Who?*:
          </label>
          <select
            name="relationship"
            id="relationship"
            value={formData.relationship}
            onChange={handleChange}
            required
            className="border rounded-md p-2 border-black h-12 bg-white"
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
          <label
            htmlFor="parentphoneNumber"
            className="text-lg font-medium"
          >
            Active Phone Number*:
          </label>
          <input
            type="tel"
            name="parentphoneNumber"
            id="parentphoneNumber"
            value={formData.parentphoneNumber}
            onChange={handleChange}
            required
            className="border rounded-md p-2 border-black"
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
            className="border rounded-md p-2 border-black"
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
  );
};

export default UniversityAdmission;
