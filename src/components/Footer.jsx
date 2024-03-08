import React, { useEffect, useState } from "react";
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
import SocialIcons7 from "../assets/Social icons7.png";

const buisnessLinks = [
  {
    url: "/pricing",
    name: "Service Fee Pricing",
  },
  {
    url: "/supported-schools",
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
    url: "/global-loan#terms-conditions",
    name: "Terms and Conditions",
  },
];

const locationLinks = [
  {
    url: "/contact",
    name: "Global HQ US",
  },
  {
    url: "/contact",
    name: "Africa HQ Lagos",
  },
  {
    url: "/contact",
    name: "Accra Office",
  },
  {
    url: "/contact",
    name: "Kampala Office",
  },
  {
    url: "/contact",
    name: "Nairobi Office",
  },
  {
    url: "/contact",
    name: "Kigali Office",
  },
  {
    url: "/contact",
    name: "Toronto Office",
  },
];

const socialIcons = [
  { name: SocialIcons1, url: "https://web.facebook.com/proconnectpay" },
  { name: SocialIcons3, url: "https://twitter.com/ProconnectPAY" },
  { name: SocialIcons4, url: "https://www.instagram.com/proconnectpay/" },
  { name: SocialIcons5, url: "https://ng.linkedin.com/company/proconnectpay" },
  { name: SocialIcons7, url: "https://www.youtube.com/channel/UCsX-weJpSWORcMUAQ-g0HdA" },
  // { name: SocialIcons6, url: "" },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    const intervalId = setInterval(updateYear, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-10 md:p-20 flex flex-col gap-20 md:gap-40">
      <div className="flex gap-4 md:gap-0 flex-col md:flex-row justify-between items-start">
        <div className="flex w-full md:w-[30%] items-start justify-start flex-col gap-4">
          <img src={Logo} alt="proconnect-logo" />
          <p className="text-left font-semibold">
            ProconnectPAY is an African Edu-FinTech Company that works with
            other financial institutions to drive adoption of Education-oriented
            Loans.
          </p>
          <p className="text-left font-semibold">
            ProconnectPAY is legally registered in Nigeria and the United
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
            <img src={Buisness} alt="business" /> BUSINESS
          </p>
          <ul className="flex gap-5 flex-col">
            {buisnessLinks.map((footerLink) => {
              return (
                <Link to={footerLink.url} key={footerLink.url}>
                  <li className="font-bold hover:text-[#db251A]">
                    {footerLink.name}
                  </li>
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
            {locationLinks.map((locationLink) => {
              return (
                <Link key={locationLink.name} to={locationLink.url}>
                  <li className="font-bold hover:text-[#db251A]">
                    {locationLink.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-0 justify-center md:flex-row md:justify-between">
        <p className="text-[#0F172A] font-medium">
          @ {currentYear} Proconnectpay . All rights reserved
        </p>
        <div className="flex gap-5">
          {socialIcons.map((icon, index) => {
            return (
              <Link key={index} to={icon.url} target="_blank">
                <img src={icon.name} alt={icon.name} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
