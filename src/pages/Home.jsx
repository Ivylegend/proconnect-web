import React from "react";
import TextImage from "../components/TextImage";
import Macbook from "../assets/Macbook.png";
import aiLaptop from "../assets/ai-laptop.png";
import people from "../assets/people.png";
import Frame1 from "../assets/Frame 473.png";
import Frame2 from "../assets/Frame 475.png";
import Button from "../components/small-components/Button";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <TextImage
        picture={aiLaptop}
        header={"PRODUCT"}
        title={"AI Assisted Human Intelligence Software Portal"}
        text={
          "With our AI Admission and Financing Assistant, we match African Students to highly rated private universities to study commercially relevant courses across the African Continent"
        }
      />
      <TextImage
        picture={Macbook}
        header={"PRODUCT"}
        title={"Admission and Financing Processing AI"}
        text={
          "With our AI Admission and Financing Assistant, we match African Students to highly rated private universities to study commercially relevant courses across the African Continent"
        }
        classdyn={"flex-row-reverse"}
      />
      <TextImage
        picture={people}
        header={"COMMUNITY"}
        title={"Global Education Community"}
        text={
          "Through our Global Education Community, we are raising the next generation of economic super-stars that will drive the economic prosperity across the developed and developing economies."
        }
      />
      <TextImage
        picture={Frame1}
        title={"Local Undergraduate Loan Calculator"}
      />
      <TextImage
        picture={Frame2}
        title={"Global Education Loan Calculator"}
        classdyn={"flex-row-reverse"}
      />
      <div className="men">
        <div className="background-image"></div>
        <div className="content flex flex-col gap-8 items-start p-20 w-[45%]">
          <h2 className="text-4xl font-bold">
            We are BIG on Mentoring and Academic Excellence
          </h2>
          <p className="text-xl">
            We foster personal and professional learning and development to
            enable our community access to great opportunities post-graduation.
          </p>
          <Button btnText={"Join Community"} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
