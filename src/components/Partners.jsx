import React from "react";
import Benson from "../assets/benson.png";
import AmericanUni from "../assets/american universityunis.png";
import clarkLogo from "../assets/clark-logo.png";
import covenantLogo from "../assets/covenant-logo.png";
import icanLogo from "../assets/ican logo.png";
import igbinedion from "../assets/igbinedion university.png";
import logoUdelunis from "../assets/logo-udelunis-1.png";
import udelLogo from "../assets/udel-logo.png";
import windSor from "../assets/windsor_logo.png";

const partnerUnis = [
  Benson,
  AmericanUni,
  clarkLogo,
  covenantLogo,
  icanLogo,
  igbinedion,
  udelLogo,
  logoUdelunis,
  windSor,
];

const Partners = () => {
  const doublePartnerUnis = [...partnerUnis, ...partnerUnis];

  return (
    <div className="px-10 lg:px-20 py-10">
      <p className="font-bold text-4xl text-center mb-16">Our Global and Local Partners</p>
      <div className="flex flex-col gap-16">
        <div className="carousel-container">
          <div className="carousel gap-16">
            {doublePartnerUnis.map((uni, index) => (
              <img src={uni} alt={uni} key={index} />
            ))}
          </div>
        </div>
        <div className="carousel-container gap-5">
          <div className="carousel gap-16 carousel-left">
            {doublePartnerUnis.map((uni, index) => (
              <img src={uni} alt={uni} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
