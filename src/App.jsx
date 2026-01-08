import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfterFooter from "./components/AfterFooter";
import { useState, Suspense, lazy } from "react";

// Lazy load all page components for code splitting
const Home = lazy(() => import("./pages/Home.jsx"));
const LandingPageForNew = lazy(() => import("./pages/LandingPageForNew.jsx"));
const ManualOnboard = lazy(() => import("./pages/ManualOnboard.jsx"));
const EldaAi = lazy(() => import("./pages/EldaAi.jsx"));
const CorporateProfile = lazy(() => import("./pages/CorporateProfile.jsx"));
const GlobalFinancing = lazy(() => import("./pages/GlobalFinancing.jsx"));
const RevolutionCommunity = lazy(() => import("./pages/RevolutionCommunity.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const Interest = lazy(() => import("./pages/Interest.jsx"));
const SupportedSchools = lazy(() => import("./pages/SupportedSchools.jsx"));
const UniversityAdmission = lazy(() => import("./pages/UniversityAdmission.jsx"));
const Calculator = lazy(() => import("./pages/Calculator.jsx"));
const NelfundFinancing = lazy(() => import("./pages/NelfundFinancing.jsx"));
const FAQs = lazy(() => import("./pages/FAQs.tsx"));
const OnboardTable = lazy(() => import("./pages/OnboardTable.jsx"));
const InterestTable = lazy(() => import("./pages/InterestTable.jsx"));
const WemaBank = lazy(() => import("./pages/Banks/Wema.jsx"));
const UnionBank = lazy(() => import("./pages/Banks/Union.jsx"));
const Ecobank = lazy(() => import("./pages/Banks/Ecobank.jsx"));
const Sycamore = lazy(() => import("./pages/Banks/Sycamore.jsx"));
const PolarisBank = lazy(() => import("./pages/Banks/Polaris.jsx"));
const NIM = lazy(() => import("./pages/Banks/NIM.jsx"));
const DoItYourself = lazy(() => import("./pages/DoItYourself.jsx"));
const DoItYourselfTable = lazy(() => import("./pages/DoItYourselfTable.jsx"));
const Error = lazy(() => import("./pages/Error.jsx"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DB251A]"></div>
  </div>
);

function App() {
  const [showAfterFooter, setShowAfterFooter] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-members" element={<LandingPageForNew />} />
          <Route path="/manual-onboard" element={<ManualOnboard />} />
          <Route path="/elda-ai" element={<EldaAi />} />
          <Route path="/corporate-profile" element={<CorporateProfile />} />

          <Route
            path="/global-financing"
            element={
              <GlobalFinancing setShowAfterFooter={setShowAfterFooter} />
            }
          />
          <Route path="/global-community" element={<RevolutionCommunity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/supported-schools" element={<SupportedSchools />} />
          <Route
            path="/university-admission"
            element={<UniversityAdmission />}
          />
          <Route path="/nelfund-financing" element={<NelfundFinancing />} />
          <Route path="/faqs" element={<FAQs />} />

          {/* ONBOARD TABLE */}
          <Route path="/onboarded-candidates" element={<OnboardTable />} />
          {/* INTERESTED CANDIDATES TABLE */}
          <Route path="/interested-candidates" element={<InterestTable />} />

          {/* BANKS */}
          <Route path="/banks/wema" element={<WemaBank />} />
          <Route path="/banks/union" element={<UnionBank />} />
          <Route path="/banks/ecobank" element={<Ecobank />} />
          <Route path="/banks/sycamore" element={<Sycamore />} />
          <Route path="/banks/polaris" element={<PolarisBank />} />
          <Route path="/banks/nim" element={<NIM />} />

          {/* DIY */}
          <Route path="/diy" element={<DoItYourself />} />
          {/* DIY TABLE*/}
          <Route path="/diy-table" element={<DoItYourselfTable />} />

          <Route path="*" element={<Error />} />
        </Routes>
        </Suspense>
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
                policies that impacts student visa processing – Proconnect will
                always communicate and clarify up-to-date information that
                concerns all these processes but do note that changes happen in
                a moment’s notice and these changes are implemented immediately,
                we are not an advocacy group and we do not intermediate on
                behalf of students to these institutions whose processes our
                services are anchored upon, it is important to accommodate
                changes that can happen in the course of your relationship with
                Proconnect – we do not lie, fabricate, or falsify information to
                mislead our candidates and prospective customers. This statement
                is a commitment to our timeless value of integrity and
                forthrightness. Kindly note that we have a{" "}
                <span className="font-bold">
                  STRICT NO-REFUND POLICY in Proconnect.
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
