import TextImage from "../components/TextImage";
import Macbook from "../assets/Macbook.png";
import aiLaptop from "../assets/laptop.png";
import people from "../assets/people.png";
import Frame1 from "../assets/Frame 473.png";
import Frame2 from "../assets/Frame 475.png";
import Button from "../components/small-components/Button";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import globe from "../assets/globe.png";
import education from "../assets/education.png";

const Home = () => {
  return (
    <div>
      <Hero />
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
      />
      <TextImage
        picture={aiLaptop}
        header={"PRODUCT"}
        title={"Admission and Financing Processing AI"}
        text={
          "With our AI Admission and Financing Assistant, we match African Students to highly rated private universities to study commercially relevant courses across the African Continent"
        }
        classdyn={"flex-row-reverse"}
        showButton={true}
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
      />
      <div className="relative overflow-hidden">
        <div className="background-image1"></div>
        <TextImage
          picture={Frame1}
          title={
            <span className="flex items-start justify-start relative">
              <p>
                Local <br /> Undergraduate Education <br /> Loan Calculator
              </p>
              <img
                src={education}
                alt="education"
                className="absolute left-16 top-[-5px]"
              />
            </span>
          }
          classdyn={"flex-row"}
        />
      </div>
      <div className="relative overflow-hidden">
        <div className="background-image2"></div>
        <TextImage
          picture={Frame2}
          title={
            <span className="">
              <span className="flex relative gap-8">
                Gl
                <img
                  src={globe}
                  alt="globe"
                  className="absolute left-8 top-2"
                />
                bal
              </span>
              Education Loan Calculator
            </span>
          }
          classdyn={"flex-row-reverse"}
        />
      </div>
      <div className="men">
        <div className="background-image"></div>
        <div className="content p-8 flex flex-col gap-8 items-start lg:p-20 lg:w-[50%] xl:w-[45%]">
          <h2 className="text-4xl font-bold leading-normal">
            We are BIG on Mentoring and Academic Excellence
          </h2>
          <p className="text-xl leading-normal">
            We foster personal and professional learning and development to
            enable our community access to great opportunities post-graduation.
          </p>
          <Button btnText={"Join Community"} linkTo={"/global-resolution"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
