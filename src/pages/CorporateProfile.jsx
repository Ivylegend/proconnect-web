import React from "react";
import Description from "../assets/description.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import frame1 from "../assets/pictureFrame1.png";
import frame2 from "../assets/pictureFrame2.png";
import frame3 from "../assets/pictureFrame3.png";
import HeaderImage from "../assets/corporate-image.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardShadow from "../components/small-components/CardShadow";
import LeaderImage from "../components/small-components/LeaderImage";
import EldaImage from "../assets/elda.png";
import DolapoImage from "../assets/dolapo.png";
import GraceImage from "../assets/grace.png";
import YvonneImage from "../assets/yvonne.png";
import VictorImage from "../assets/victor.png";
import TonyImage from "../assets/tony.png";
import TobiImage from "../assets/tobi.png";
import MainLayout from "../layouts/MainLayout";

const data = [
  {
    name: "Empowerment ✨",
    text: "We enable individuals to achieve their dreams through accessible financial solutions tailored to their unique needs.",
  },
  {
    name: "Integrity 🛡️",
    text: "We operate with honesty and transparency, building trust with our clients, partners, and communities.",
  },
  {
    name: "Innovation 💡",
    text: "We continually enhance our services and processes to provide cutting-edge solutions in a dynamic global landscape.",
  },
  {
    name: "Inclusivity 🤗",
    text: " We are committed to breaking barriers and making global opportunities accessible to individuals from all backgrounds.",
  },
  {
    name: "Customer-Centricity 💖",
    text: " Our clients' success is at the heart of everything we do; we prioritize their needs and experiences above all else.",
  },
  {
    name: "Collaboration 🤝",
    text: "Through global partnerships, we create a network that supports individuals in achieving their education and mobility goals.",
  },
  {
    name: "Sustainability 🌱",
    text: "We aim to provide solutions that are not only impactful today but also contribute positively to a sustainable future.",
  },
];

const managerList = [
  { name: "Elda", position: "Global CEO 🌍", imgURL: EldaImage },
  {
    name: "Dolapo",
    position: "Senior Vice-President, Business Operations",
    imgURL: DolapoImage,
  },
  { name: "Grace", position: "Global Head of Sales", imgURL: GraceImage },
  {
    name: "Yvonne",
    position: "Global Head of Admin and Customer Success Operation",
    imgURL: YvonneImage,
  },
  {
    name: "Victor",
    position: "Senior Vice-President, Technology Services",
    imgURL: VictorImage,
  },
  {
    name: "Tony",
    position: "Team Lead, People and Culture",
    imgURL: TonyImage,
  },
  { name: "Tobi", position: "Team Lead, Digital Media", imgURL: TobiImage },
];

const CorporateProfile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const divOneVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const divTwoVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <MainLayout>
      <div>
        <div className="w-full overflow-hidden">
          <img
            src={HeaderImage}
            className="w-full h-60 md:h-fit object-cover"
            alt="bg-image"
          />
        </div>

        <div className="py-4 px-6 lg:p-0">
          {/* FIRST */}
          <motion.div
            className={
              "flex flex-col lg:flex-row lg:p-20 my-12 lg:my-0 gap-8 lg:gap-20 items-center"
            }
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={ref}
          >
            {/* ONE */}
            <motion.div
              variants={divOneVariants}
              className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-8"
            >
              <p className="">
                <img src={Description} alt="description-logo" />
              </p>
              <h2 className="text-xl md:text-3xl font-bold leading-normal whitespace-nowrap">
                Company Description
              </h2>
              <p className="text-base md:text-xl leading-8 text-justify">
                <span className="text-[#db251A] font-bold">Pro</span>
                <span className="text-[#1E4580] font-bold">connect</span> is a
                global financial services provider specializing in education and
                mobility solutions. We help students gain access to over 5,000
                universities in 17 countries, offering tailored financing that
                makes studying abroad more accessible. Additionally, we
                streamline the relocation process by covering essential expenses
                such as flights, living costs, and rent, ensuring a smooth
                transition for individuals pursuing global opportunities. With
                our comprehensive approach and global partnerships, Proconnect
                empowers students and professionals to focus on their ambitions
                while we manage the financial logistics.
              </p>
            </motion.div>
            {/* TWO */}
            <motion.div
              variants={divTwoVariants}
              className="w-full flex items-center justify-center lg:w-1/2"
            >
              <img src={frame1} alt="frame-logo" />
            </motion.div>
          </motion.div>

          {/* SECOND */}
          <motion.div
            className={
              "flex flex-col lg:flex-row-reverse my-12 lg:my-0 lg:p-20 gap-8 lg:gap-20 items-center"
            }
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ONE */}
            <motion.div
              variants={divOneVariants}
              className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-8"
            >
              <p className="">
                <img src={mission} alt="mission-logo" />
              </p>
              <h2 className="text-xl md:text-3xl font-bold leading-normal">
                Mission Statement
              </h2>
              <p className="text-base md:text-xl leading-8 text-justify">
                At <span className="text-[#db251A] font-bold">Pro</span>
                <span className="text-[#1E4580] font-bold">connect</span>, our
                mission is to empower students and professionals worldwide by
                providing innovative financial services and personalized
                support. We strive to break financial barriers to global
                education and mobility, ensuring our clients can focus on their
                aspirations while we manage the complexities of their journey.
              </p>
            </motion.div>
            {/* TWO */}
            <motion.div
              variants={divTwoVariants}
              className="w-full flex items-center justify-center lg:w-1/2"
            >
              <img src={frame2} alt="frame-logo" />
            </motion.div>
          </motion.div>

          {/* THIRD */}
          <motion.div
            className={
              "flex flex-col lg:flex-row my-12 lg:my-0 lg:p-20 gap-8 lg:gap-20 items-center"
            }
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ONE */}
            <motion.div
              variants={divOneVariants}
              className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-8"
            >
              <p className="">
                <img src={vision} alt="vision-logo" />
              </p>
              <h2 className="text-xl md:text-3xl font-bold leading-normal">
                Vision Statement
              </h2>
              <p className="text-base md:text-xl leading-8 text-justify">
                To become the world's most trusted partner in transforming
                dreams of global education and mobility into reality by enabling
                seamless access to financial solutions and opportunities
              </p>
            </motion.div>
            {/* TWO */}
            <motion.div
              variants={divTwoVariants}
              className="w-full flex items-center justify-center lg:w-1/2"
            >
              <img src={frame3} alt="frame-logo" />
            </motion.div>
          </motion.div>

          <div className="lg:py-10 lg:px-20">
            <h2 className="text-xl md:text-3xl font-bold leading-normal whitespace-nowrap mb-6">
              Company Key Values
            </h2>
            {data.map((item, index) => (
              <CardShadow key={index} title={item.name} text={item.text} />
            ))}
          </div>

          <div className="lg:py-10 lg:px-20">
            <h2 className="text-xl md:text-3xl font-bold leading-normal whitespace-nowrap mb-6">
              Company Leadership
            </h2>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {managerList.map((item, index) => (
                <LeaderImage
                  key={index}
                  name={item.name}
                  position={item.position}
                  image={item.imgURL}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CorporateProfile;
