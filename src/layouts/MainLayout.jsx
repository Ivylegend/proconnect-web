import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsappIcon from "../components/WhatsappIcon";

const MainLayout = ({ children }) => {

  return (
    <>
      <Navbar />
      {children}
      <WhatsappIcon />
      <Footer />
    </>
  );
};

export default MainLayout;
