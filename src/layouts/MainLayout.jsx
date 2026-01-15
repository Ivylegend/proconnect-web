import PropTypes from "prop-types";
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

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
