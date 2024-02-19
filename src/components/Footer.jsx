import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pcp-logo-1.png";
import Buisness from "../assets/company.png";
import Location from "../assets/location.png";
import SocialIcons1 from "../assets/Social icons1.png";
import SocialIcons2 from "../assets/Social icons2.png";
import SocialIcons3 from "../assets/Social icons3.png";
import SocialIcons4 from "../assets/Social icons4.png";
import SocialIcons5 from "../assets/Social icons5.png";
import SocialIcons6 from "../assets/Social icons6.png";

const buisnessLinks = [
  {
    url: "/pricing",
    name: "Pricing",
  },
  {
    url: "",
    name: "List of Supported Schools",
  },
  {
    url: "/interest",
    name: "Signify your interest",
  },
  {
    url: "/local-loan",
    name: "Local loan",
  },
  {
    url: "/global-loan",
    name: "Global Loan",
  },
  {
    url: "/privacy-policy",
    name: "Privacy Policy",
  },
  {
    url: "",
    name: "Terms and Condition",
  },
];

const locationLinks = [
  {
    url: "",
    name: "Global HQ US",
  },
  {
    url: "",
    name: "Africa HQ Lagos",
  },
  {
    url: "",
    name: "Accra Office",
  },
  {
    url: "",
    name: "Kampala Office",
  },
  {
    url: "",
    name: "Nairobi Office",
  },
  {
    url: "",
    name: "Kigali Office",
  },
  {
    url: "",
    name: "Toronto Office",
  },
];

const socialIcons = [
  { name: SocialIcons1, url: "" },
  { name: SocialIcons2, url: "" },
  { name: SocialIcons3, url: "" },
  { name: SocialIcons4, url: "" },
  { name: SocialIcons5, url: "" },
  { name: SocialIcons6, url: "" },
];

const Footer = () => {
  return (
    <div className="p-10 md:p-20 flex flex-col gap-20 md:gap-40">
      <div className="flex gap-4 md:gap-0 flex-col md:flex-row justify-between items-start">
        <div className="flex w-full md:w-[30%] items-start justify-start flex-col gap-4">
          <img src={Logo} alt="pcp-logo" />
          <p className="text-left font-semibold">
            ProconnectPAY is an African Edu-FinTech Company that works with
            other financial institutions to drive adoption of Education-oriented
            Loans ProconnectPAY is legally registered in Nigeria and the United
            States. RC Number in Nigeria is{" "}
            <span className="text-[#1E4580]">
              1884617 (Proconnect Tech Solutions Limited) ,
            </span>{" "}
            Assigned Filling No in the United States is{" "}
            <span className="text-[#DB251A]">
              7044965 (ProconnectPAY EduFinTech Inc.)
            </span>
          </p>
        </div>
        <div>
          <p className="text-lg font-medium capitalize my-6 flex items-center gap-2">
            <img src={Buisness} alt="buisness" /> BUISNESS
          </p>
          <ul className="flex gap-5 flex-col">
            {buisnessLinks.map((footerLink, index) => {
              return (
                <Link to={footerLink.url}>
                  <li className="font-bold">{footerLink.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="text-lg font-medium capitalize my-6 flex items-center gap-2">
            <img src={Location} alt="location" /> LOCATIONS
          </p>
          <ul className="flex gap-5 flex-col">
            {locationLinks.map((locationLink, index) => {
              return (
                <Link key={index} to={locationLink.url}>
                  <li className="font-bold">{locationLink.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-0 justify-center md:flex-row md:justify-between">
        <p>@ 2024 Proconnectpay . All rights reserved</p>
        <div className="flex gap-5">
          {socialIcons.map((icon, index) => {
            return (
              <Link key={index} to={icon.url}>
                <img src={icon.name} alt="icon" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
