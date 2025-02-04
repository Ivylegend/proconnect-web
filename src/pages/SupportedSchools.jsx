import React, { useState } from "react";
import blueLine from "../assets/blue-line.png";
import {
  Australia,
  Belgium,
  CanadianSchools,
  China,
  Denmark,
  France,
  Germany,
  HongKong,
  Italy,
  NigerianSchools,
  Portugal,
  ProfessionalBodies,
  Singapore,
  SouthAfrica,
  Spain,
  Switzerland,
  canadaPg,
  netherlands,
  ukSchools,
  usPg,
  usSchools,
} from "../constants";
import MainLayout from "../layouts/MainLayout";

// Convert the array into an array of objects with "id" and "name"
const usSchoolsArray = usSchools.map((school, index) => ({
  id: 0 + index,
  name: school,
}));

const SupportedSchools = () => {
  const [selectedCategory, setSelectedCategory] = useState("Canadian");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <MainLayout>
      <div className="px-10 lg:px-20 lg:py-10 flex flex-col items-center justify-center">
        <span className="relative my-12">
          <p className="font-bold text-center text-3xl text-[#323232]">
            List of <span className="text-[#DB251A]">Supported Schools </span>
          </p>
          <img
            src={blueLine}
            alt="line"
            className="hidden sm:flex absolute right-0 top-10"
          />
        </span>

        {/* SELECT FIELD */}
        <div className="flex flex-col items-start">
          <label
            htmlFor=""
            className="my-4 text-[#646464] font-medium text-lg text-left"
          >
            Select your Preferred Category
          </label>
          <select
            name=""
            id=""
            className="w-[340px] lg:w-[500px] border border-black gap-4 bg-white shadow-xl font-medium text-black p-4 rounded-xl"
            onChange={handleCategoryChange}
          >
            <option value="Canadian" className="my-4 text-black font-medium">
              Canadian Schools
            </option>
            <option value="US" className="my-4 text-black font-medium">
              US Schools
            </option>
            <option value="Nigerian" className="my-4 text-black font-medium">
              Nigerian Schools
            </option>
            <option
              value="Professional"
              className="my-4 text-black font-medium"
            >
              Professional Bodies
            </option>
            <option value="canadaPg" className="my-4 text-black font-medium">
              PG Canada
            </option>
            <option value="usPg" className="my-4 text-black font-medium">
              PG United States
            </option>
            <option value="UK" className="my-4 text-black font-medium">
              UK Schools
            </option>
            <option value="France" className="my-4 text-black font-medium">
              French Schools
            </option>
            <option value="Netherlands" className="my-4 text-black font-medium">
              Dutch Schools
            </option>
            <option value="Germany" className="my-4 text-black font-medium">
              German Schools
            </option>
            <option value="Australia" className="my-4 text-black font-medium">
              Australian Schools
            </option>
            <option value="Netherlands" className="my-4 text-black font-medium">
              Netherland Schools
            </option>
            <option value="Singapore" className="my-4 text-black font-medium">
              Singaporean Schools
            </option>
            <option value="Portugal" className="my-4 text-black font-medium">
              Portuguese Schools
            </option>
            <option value="Italy" className="my-4 text-black font-medium">
              Italian Schools
            </option>
            <option value="Hong-Kong" className="my-4 text-black font-medium">
              Hong Kong Schools
            </option>
            <option value="Spain" className="my-4 text-black font-medium">
              Spanish Schools
            </option>
            <option value="Denmark" className="my-4 text-black font-medium">
              Danish Schools
            </option>
            <option value="China" className="my-4 text-black font-medium">
              Chinese Schools
            </option>
            <option value="Switzerland" className="my-4 text-black font-medium">
              Swiss Schools
            </option>
            <option value="Belgium" className="my-4 text-black font-medium">
              Belgian Schools
            </option>
            <option
              value="South-Africa"
              className="my-4 text-black font-medium"
            >
              South African Schools
            </option>
          </select>
        </div>

        <div className="my-8 border font-medium border-black rounded-lg py-4 shadow-2xl">
          {/* FOR SOUTH AFRICA SCHOOLS */}
          {selectedCategory === "South-Africa" && (
            <div className="flex flex-col">
              {SouthAfrica.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== SouthAfrica.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR BELGIUM SCHOOLS */}
          {selectedCategory === "Belgium" && (
            <div className="flex flex-col">
              {Belgium.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Belgium.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR SWITZ SCHOOLS */}
          {selectedCategory === "Switzerland" && (
            <div className="flex flex-col">
              {Switzerland.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Switzerland.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR CHINA SCHOOLS */}
          {selectedCategory === "China" && (
            <div className="flex flex-col">
              {China.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== China.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR DENMARK SCHOOLS */}
          {selectedCategory === "Denmark" && (
            <div className="flex flex-col">
              {Denmark.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Denmark.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR SPAIN SCHOOLS */}
          {selectedCategory === "Spain" && (
            <div className="flex flex-col">
              {Spain.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Spain.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR HONGKONG SCHOOLS */}
          {selectedCategory === "Hong-Kong" && (
            <div className="flex flex-col">
              {HongKong.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== HongKong.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR ITALY SCHOOLS */}
          {selectedCategory === "Italy" && (
            <div className="flex flex-col">
              {Italy.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Italy.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR PORTUGAL SCHOOLS */}
          {selectedCategory === "Portugal" && (
            <div className="flex flex-col">
              {Portugal.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Portugal.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR SINGAPORE SCHOOLS */}
          {selectedCategory === "Singapore" && (
            <div className="flex flex-col">
              {Singapore.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Singapore.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR AUSTRALIA SCHOOLS */}
          {selectedCategory === "Australia" && (
            <div className="flex flex-col">
              {Australia.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Australia.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR GERMAN SCHOOLS */}
          {selectedCategory === "Germany" && (
            <div className="flex flex-col">
              {Germany.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== Germany.length - 1 ? "border-b shadow-lg" : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR CANADIAN SCHOOLS */}
          {selectedCategory === "Canadian" && (
            <div className="flex flex-col">
              {CanadianSchools.map((school, index) => (
                <i
                  key={school.id}
                  className={`border-black ${
                    index !== CanadianSchools.length - 1
                      ? "border-b shadow-lg"
                      : ""
                  } px-8 py-4`}
                >
                  {school.name}
                </i>
              ))}
            </div>
          )}

          {/* FOR NIGERRIAN SCHOOLS */}
          {selectedCategory === "Nigerian" && (
            <div className="flex flex-col">
              {NigerianSchools.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== NigerianSchools.length - 1
                        ? "border-b shadow-lg"
                        : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}

          {/* PROFESSIONAL BODIES */}
          {selectedCategory === "Professional" && (
            <div className="flex flex-col">
              {ProfessionalBodies.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== ProfessionalBodies.length - 1
                        ? "border-b shadow-lg"
                        : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}

          {/* US SCHOOLS */}
          {selectedCategory === "US" && (
            <div className="flex flex-col">
              {usSchoolsArray.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== usSchoolsArray.length - 1
                        ? "border-b shadow-lg"
                        : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}

          {/* PG CANADA SCHOOLS */}
          {selectedCategory === "canadaPg" && (
            <div className="flex flex-col">
              {canadaPg.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== canadaPg.length - 1 ? "border-b shadow-lg" : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}

          {/* PG UNITED STATES SCHOOLS */}
          {selectedCategory === "usPg" && (
            <div className="flex flex-col">
              {usPg.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== usPg.length - 1 ? "border-b shadow-lg" : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}

          {/* UK SCHOOLS */}
          {selectedCategory === "UK" && (
            <div className="flex flex-col">
              {ukSchools.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== ukSchools.length - 1 ? "border-b shadow-lg" : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}

          {/* FRANCE SCHOOLS */}
          {selectedCategory === "France" && (
            <div className="flex flex-col">
              {France.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== France.length - 1 ? "border-b shadow-lg" : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}

          {/* NETHERLANDS SCHOOLS */}
          {selectedCategory === "Netherlands" && (
            <div className="flex flex-col">
              {netherlands.map((school, index) => {
                return (
                  <i
                    key={school.id}
                    className={`border-black ${
                      index !== netherlands.length - 1
                        ? "border-b shadow-lg"
                        : ""
                    } px-8 py-4`}
                  >
                    {school.name}
                  </i>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default SupportedSchools;
