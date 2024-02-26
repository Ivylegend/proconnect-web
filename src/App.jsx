import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CorporateProfile,
  GlobalLoan,
  Home,
  LocalLoan,
  RevolutionCommunity,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AfterFooter from "./components/AfterFooter";
import { useState } from "react";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Interest from "./pages/Interest";
import SupportedSchools from "./pages/SupportedSchools";

function App() {
  const [showAfterFooter, setShowAfterFooter] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-profile" element={<CorporateProfile />} />
          <Route
            path="/global-loan"
            element={<GlobalLoan setShowAfterFooter={setShowAfterFooter} />}
          />
          <Route
            path="/local-loan"
            element={<LocalLoan setShowAfterFooter={setShowAfterFooter} />}
          />
          <Route path="/global-resolution" element={<RevolutionCommunity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/supported-schools" element={<SupportedSchools />} />
        </Routes>
        <Footer />
        {showAfterFooter && <AfterFooter />}
      </BrowserRouter>
    </>
  );
}

export default App;
