import Partners from "../components/Partners";
import TextImage from "../components/TextImage";
import Button from "../components/small-components/Button";

import Macbook from "../assets/Macbook.png";
import aiLaptop from "../assets/laptop.png";
import people from "../assets/people.png";
import NewHero from "../components/NewHero";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <NewHero />
        <Partners />
        <TextImage
          picture={Macbook}
          header={"PRODUCT"}
          title={"AI Assisted Human Intelligence School Application Portal"}
          text={
            "Leverage our personalized AI to refine your resume, craft your personalized statement of purpose, and get your school application in front of 5,000 Universities and Colleges Globally"
          }
          showButton={true}
          classdyn={"flex-row"}
          buttonText={"Know More"}
          buttonHref={"https://elda.cloud"}
        />
        <TextImage
          picture={aiLaptop}
          header={"PRODUCT"}
          title={
            <span>
              Admission and Financing <br /> Processing AI
            </span>
          }
          text={
            "With our AI Admission and Financing Assistant, we match African Students to highly rated private universities to study commercially relevant courses across the African Continent"
          }
          classdyn={"flex-row-reverse"}
          showButton={true}
          buttonText={"Know More"}
          buttonHref={"https://eldanic.com"}
        />
        <TextImage
          picture={people}
          header={"COMMUNITY"}
          title={"Global Education Community"}
          text={
            "Through our Global Education Community, we are raising the next generation of economic super-stars that will drive the economic prosperity across the developed and developing economies."
          }
          showButton={true}
          classdyn={"flex-row"}
          buttonText={"Get Started"}
          buttonHref={"/interest"}
        />

        <div className="m-6 sm:m-10 relative rounded-2xl md:m-20">
          <div className="background-image"></div>
          <div className="content p-5 sm:p-8 flex flex-col gap-4 sm:gap-8 items-start lg:py-16 lg:w-[50%] xl:w-[468px] leading-tight">
            <h2 className="text-2xl sm:text-4xl font-bold leading-normal">
              We are BIG on Mentoring and Academic Excellence
            </h2>
            <p className="text-base sm:text-xl leading-normal">
              We foster personal and professional learning and development to
              enable our community access to great opportunities
              post-graduation.
            </p>
            <Button btnText="Join Community" linkTo="/global-community" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
