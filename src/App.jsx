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
        </Routes>
        <Footer />
        {showAfterFooter && <AfterFooter />}
      </BrowserRouter>
    </>
  );
}

export default App;
