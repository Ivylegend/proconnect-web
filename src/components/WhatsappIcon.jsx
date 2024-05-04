import React from "react";
import { BiLogoWhatsapp, BiLogoWhatsappSquare } from "react-icons/bi";
const WhatsappIcon = () => {
  return (
    <a
      href="https://bit.ly/GraceatProconnectPAY"
      className="cursor-pointer fixed bottom-3 right-3 md:bottom-10 md:right-10 z-50 flex items-center justify-center"
    >
      <BiLogoWhatsappSquare
        width={100}
        height={100}
        color="green"
        size={50}
        fill="green"
      />
    </a>
  );
};

export default WhatsappIcon;
