import React from "react";
import Footer from "../components/Footer";
import BanksNavbar from "../components/BanksNavbar";
import WhatsappIcon from "../components/WhatsappIcon";

const BanksLayout = ({ children, logo }) => {
  return (
    <main className="bg-[#F4F4F4]">
      <BanksNavbar bankLogo={logo} />
      {children}
      <WhatsappIcon />
      <Footer />
    </main>
  );
};

export default BanksLayout;
