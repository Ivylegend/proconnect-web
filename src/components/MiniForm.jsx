import React from "react";

const MiniForm = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-white border rounded-2xl border-[#F8D3D1] py-9 px-10">
        <h2 className="font-bold text-2xl mb-5">Personal Details</h2>

        <form action="">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="fullName" className="text-[#646464] font-medium">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="fullName" className="text-[#646464] font-medium">
                Personal Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="gender" className="text-[#646464] font-medium">
                Gender <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="gender"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="graduateOf"
                className="text-[#646464] font-medium"
              >
                Graduate Of <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="graduateOf"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="stateOFResidence"
                className="text-[#646464] font-medium"
              >
                State Of Residence <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="stateOFResidence"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="dateOfBirth"
                className="text-[#646464] font-medium"
              >
                Date Of Birth <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="dateOfBirth"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label htmlFor="age" className="text-[#646464] font-medium">
                Age <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="age"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
            <div className="mb-6 flex flex-col gap-1 w-full md:w-1/2">
              <label
                htmlFor="classOfDegree"
                className="text-[#646464] font-medium"
              >
                Class of Degree <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="classOfDegree"
                required
                className={"w-full h-10 p-4 text-black rounded-md border"}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-4 my-8">
        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-sm">
            I confirm that I have read and understand the loan terms and
            conditions before making this non-refundable payment of the
            Proconnect Service Fee.
          </p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-sm">
            I confirm that I have read and understand the Proconnect Service
            terms and conditions before making this non-refundable payment of
            the Proconnect Service Fee.
          </p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <p className="text-sm">
            I confirm that I understand that neither Proconnect, EcoBank Nigeria
            Plc, nor its International Banking Partners influence the visa
            decision process in any country where this loan is applicable.
          </p>
        </div>
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-[#DB251A] text-white rounded-md p-2 hover:bg-white hover:border-[#DB251A] hover:text-[#DB251A] hover:border transition-colors duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MiniForm;
