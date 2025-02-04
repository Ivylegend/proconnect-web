import React from "react";
import Footer from "../components/Footer";
import BanksNavbar from "../components/BanksNavbar";

const BanksLayout = ({ children, logo }) => {
  return (
    <main className="bg-[#F4F4F4]">
      <BanksNavbar bankLogo={logo} />
      {children}
      <Footer />
    </main>
  );
};

export default BanksLayout;
