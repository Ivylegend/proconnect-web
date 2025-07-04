import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/proconnect-logo-new.jpg";
import business from "../assets/company.png";
import Location from "../assets/location.png";
import SocialIcons1 from "../assets/Social icons1.png";
import SocialIcons2 from "../assets/Social icons2.png";
import SocialIcons3 from "../assets/Social icons3.png";
import SocialIcons4 from "../assets/Social icons4.png";
import SocialIcons5 from "../assets/Social icons5.png";
import SocialIcons6 from "../assets/youtube.png";

const businessLinks = [
  {
    url: "https://proconnectpay.com/blog",
    name: "Blog",
  },
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
    url: "/faqs",
    name: "FAQs",
  },
  {
    name: "Global Financing",
    url: "/global-financing",
  },
  {
    url: "/privacy-policy",
    name: "Privacy Policy",
  },
  {
    url: "",
    name: "Terms and Conditions",
  },
  {
    url: "/university-admission",
    name: "University Admission",
  },
  {
    url: "/calculator",
    name: "Use our Calculator",
  },
  {
    url: "/nelfund-financing",
    name: "Nelfund Financing",
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

const bankPartners = [
  {
    url: "/banks/union",
    name: "Union Bank",
  },
  {
    url: "/banks/wema",
    name: "Wema Bank",
  },
  {
    url: "/banks/ecobank",
    name: "EcoBank",
  },
  {
    url: "/banks/sycamore",
    name: "Sycamore",
  },
  {
    url: "/banks/polaris",
    name: "Polaris Bank",
  },
  {
    url: "/",
    name: "And 15 other Financial Institutions",
  },
  {
    url: "/banks/nim",
    name: "Nigerian Institute of Management and 63 other Professional Bodies",
  },
  {
    url: "/",
    name: "UNILAG",
  },
  {
    url: "/",
    name: "LASU and 98 other Federal Universities",
  },
  {
    url: "/",
    name: "YabaTECH",
  },
  {
    url: "/",
    name: "LASPOTECH and 35 other Polytechnics",
  },
  {
    url: "",
    name: " NYSC Lagos Secretariat and 36 other States Secretariats",
  },
  {
    url: "/",
    name: " 3 Global Bank Partners",
  },
];

const socialIcons = [
  { name: SocialIcons1, url: "https://web.facebook.com/proconnectpay" },
  { name: SocialIcons3, url: "https://twitter.com/ProconnectPAY" },
  { name: SocialIcons4, url: "https://www.instagram.com/proconnectpay/" },
  { name: SocialIcons5, url: "https://ng.linkedin.com/company/proconnectpay" },
  {
    name: SocialIcons6,
    url: "https://www.youtube.com/channel/UCsX-weJpSWORcMUAQ-g0HdA",
  },
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
    <div className="p-5 md:p-10 lg:p-20 flex flex-col bg-white gap-20 md:gap-40">
      <div className="flex gap-4 md:gap-0 flex-col lg:flex-row justify-between items-start">
        <div className="flex w-full lg:w-[30%] items-start justify-start flex-col gap-4">
          <div className="relative -left-16 w-80 h-24">
            <img
              src={Logo}
              alt="proconnect-logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-justify">
            <span className="text-[#DB251A]">Pro</span>
            <span className="text-[#1E4580]">connect</span> is a global
            financial services facilitator specializing in education and
            mobility solutions. We help students gain access to over 5,000
            universities in 17 countries, offering tailored financing that makes
            studying abroad more accessible. Additionally, we streamline the
            relocation process by covering essential expenses such as flights,
            living costs, and rent, ensuring a smooth transition for individuals
            pursuing global opportunities. With our comprehensive approach and
            global partnerships, Proconnect empowers students and professionals
            to focus on their ambitions while we manage the financial logistics.
          </p>
          <p className="text-justify font-semibold">
            <span className="text-[#DB251A]">Pro</span>
            <span className="text-[#1E4580]">connect</span> is legally
            registered in Nigeria and the United States. RC Number in Nigeria is{" "}
            <span className="text-[#1E4580]">
              1884617 (<span className="text-[#DB251A]">Pro</span>
              <span className="text-[#1E4580]">connect</span> Tech Solutions
              Limited) ,
            </span>{" "}
            Assigned Filling No in the United States is{" "}
            <span className="text-[#DB251A]">
              7044965 (<span className="text-[#DB251A]">Pro</span>
              <span className="text-[#1E4580]">connect</span> EduFinTech Inc.)
            </span>
          </p>
        </div>
        <div>
          <p className="text-lg font-medium capitalize my-6 flex items-center gap-2">
            <img src={business} alt="business" /> BUSINESS
          </p>
          <ul className="flex gap-5 flex-col">
            {businessLinks.map((footerLink) => {
              return (
                <Link to={footerLink.url} key={footerLink.url} target="_blank">
                  <li className="font-bold hover:text-[#db251A]">
                    {footerLink.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-1/4">
          <p className="text-lg font-medium capitalize my-6 flex items-center gap-2">
            <img src={business} alt="business" /> PARTNERS
          </p>
          <ul className="flex gap-5 flex-col">
            {bankPartners.map((footerLink) => {
              return (
                // <Link to={footerLink.url} key={footerLink.url} target="_blank">
                <li className="font-bold cursor-not-allowed">
                  {footerLink.name}
                </li>
                // </Link>
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
          @ {currentYear} Proconnect . All rights reserved
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
