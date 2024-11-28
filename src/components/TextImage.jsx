import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "./small-components/Button";

const TextImage = ({ picture, title, header, text, classdyn, showButton, buttonText, buttonHref }) => {
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsetTop = document.getElementById("textImage").offsetTop;

      if (scrollY > offsetTop - window.innerHeight / 1.5) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      id="textImage"
      className={`flex px-10 py-10 md:py-20 lg:p-20 gap-10 lg:gap-20 items-center flex-col lg:${classdyn}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* DIV ONE */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
        <p className="font-bold text-xl">{header}</p>
        <h2 className="text-4xl font-bold leading-normal">{title}</h2>
        <p className="text-xl">{text}</p>
        {showButton && <Button btnText={buttonText} linkTo={buttonHref} />}
      </div>
      {/* DIV TWO */}
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <img src={picture} alt={picture} />
      </div>
    </motion.div>
  );
};

export default TextImage;
