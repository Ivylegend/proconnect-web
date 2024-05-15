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
import UniversityAdmission from "./pages/UniversityAdmission";
import WhatsappIcon from "./components/WhatsappIcon";
import Calculator from "./pages/Calculator";

function App() {
  const [showAfterFooter, setShowAfterFooter] = useState(false);
  const [showAfterFooterTwo, setShowAfterFooterTwo] = useState(false);

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
            element={<LocalLoan setShowAfterFooterTwo={setShowAfterFooterTwo} />}
          />
          <Route path="/global-resolution" element={<RevolutionCommunity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/supported-schools" element={<SupportedSchools />} />
          <Route path="/university-admission" element={<UniversityAdmission />} />
        </Routes>
        <WhatsappIcon />
        <Footer />
        {showAfterFooter && (
          <AfterFooter
            customText={
              <p className="text leading-9 font-normal text-xl">
                <span className="text-[#DB251A]">
                  PUBLIC STATEMENT ON COMMITMENT TO TRANSPARENCY AT ALL TIMES:
                </span>{" "}
                Information in respect to school admission processing, earning
                admission, or admission refusal, loan application, loan
                approval, or loan refusal or visa processing, visa approval, or
                visa denial including the terms and associated conditions to
                continually accessing our services can change at a moment’s
                notice – we do not determine them but simply apply processes
                already instituted or updated by our partners or necessitated by
                economic realities . Governments of the countries in which our
                student loans are applicable are the ultimate decider of
                policies that impacts student visa processing – ProconnectPAY
                will always communicate and clarify up-to-date information that
                concerns all these processes but do note that changes happen in
                a moment’s notice and these changes are implemented immediately,
                we are not an advocacy group and we do not intermediate on
                behalf of students to these institutions whose processes our
                services are anchored upon, it is important to accommodate
                changes that can happen in the course of your relationship with
                ProconnectPAY – we do not lie, fabricate, or falsify information
                to mislead our candidates and prospective customers. This
                statement is a commitment to our timeless value of integrity and
                forthrightness. Kindly note that we have a{" "}
                <span className="font-bold">
                  STRICT NO-REFUND POLICY in ProconnectPAY.
                </span>
              </p>
            }
          />
        )}
        {showAfterFooterTwo && (
          <AfterFooter
            customText={
              <p className="text leading-9 font-normal text-xl">
                <span className="text-[#DB251A]">
                  PUBLIC STATEMENT ON COMMITMENT TO TRANSPARENCY AT ALL TIMES:
                </span>{" "}
                Information in respect to school admission processing, earning
                admission, or admission refusal, loan application, loan
                approval, or loan refusal or fully accessing the value-added
                services promoted in the ProconnectPAY Global Undergraduate
                Community including the terms and associated conditions to
                continually accessing our services can change at a moment’s
                notice – we do not determine them but simply apply processes
                already instituted or updated by our partners or necessitated by
                economic realities . Our Financial Institution Partners and
                Management of the Universities in which our student loans are
                applicable are the ultimate decider of policies that impacts our
                admission and loan processing – ProconnectPAY will always
                communicate and clarify up-to-date information that concerns all
                these processes but do note that changes happen in a moment’s
                notice and these changes are implemented immediately, we are not
                an advocacy group and we do not intermediate on behalf of
                students to these institutions whose processes our services are
                anchored upon, it is important to accommodate changes that can
                happen in the course of your relationship with ProconnectPAY –
                we do not lie, fabricate, or falsify information to mislead our
                candidates and prospective customers. This statement is a
                commitment to our timeless value of integrity and
                forthrightness. Kindly note that we have a{" "}
                <span className="font-bold">
                  STRICT NO-REFUND POLICY in ProconnectPAY.
                </span>
              </p>
            }
          />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
