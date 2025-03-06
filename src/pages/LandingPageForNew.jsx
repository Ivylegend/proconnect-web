import SmallBox from "../components/SmallBox";
import applicationSupport from "../assets/application-support.svg";
import personalizedCounseling from "../assets/personalized-counseling.svg";
import financialSupport from "../assets/financial-support.svg";
import careerAdvancement from "../assets/career-advancement.svg";
import Networking from "../assets/networking.svg";
import key1 from "../assets/key-1.svg";
import key2 from "../assets/key-2.svg";
import key3 from "../assets/key-3.svg";
import key4 from "../assets/key-4.svg";
import Lines from "../assets/Line 6.png";
import circle from "../assets/circle.svg";
import iphone from "../assets/iPhone.png";
import CardShadow from "../components/small-components/CardShadow";
import MainLayout from "../layouts/MainLayout";

const cardText = [
  {
    title: "Personalized Counseling",
    text: "Proconnect's eLDa AI platform will evaluate your academic and professional background, providing you with tailored advice on the most suitable courses, schools, and countries where you are most likely to be admitted.",
    icon: personalizedCounseling,
  },

  {
    title: "Financial Support",
    text: "You will have access to scholarships, as well as Proconnect's innovative education financing solutions. No collateral or guarantors are required, making the process more accessible and stress-free. They provide an International Student Loan of up to 100,000 USD to ELIGIBLE Candidates that does not require a collateral or guarantor.",
    icon: financialSupport,
  },
  {
    title: "Career Advancement",
    text: "With a global education, you will be equipped with skills that are in demand across the world. Whether your goal is to work with multinational corporations, start your own business, or make an impact in the public or development sector, this pathway opens up endless possibilities for you.",
    icon: careerAdvancement,
  },
  {
    title: "Networking Opportunities",
    text: "As part of this program, you will also be invited to monthly mixers with professionals and diplomatic missions, offering you valuable insights and connections that can further boost your career and global education aspirations.",
    icon: Networking,
  },
  {
    title: "School Application Support",
    text: "Proconnect will refine your resume, craft a tailored Statement of Purpose (SOP) for two recommended universities, and submit your applications until admission is secured.",
    icon: applicationSupport,
  },
];

const keyFeatures = [
  {
    title: "Read up about our Global financing ",
    img: key1,
    url: "/global-financing",
  },
  {
    title: "List of supported universities",
    img: key2,
    url: "/supported-schools",
  },
  {
    title: "Privacy Policy",
    img: key3,
    url: "/privacy-policy",
  },
  {
    title: "Frequently asked questions",
    img: key4,
    url: "/faqs",
  },
];

const LandingPageForNew = () => {
  return (
    <MainLayout>
      <div className="relative py-10 px-6 md:pb-20 lg:px-20 mb-8 md:mb-20 overflow-hidden flex items-center w-full flex-col md:flex-row gap-10">
        <div className="absolute w-full left-0 bottom-0">
          <img src={Lines} alt="lines" className="w-full" />
        </div>
        {/* Left Section - Text */}
        <div className="md:w-[50%] md:relative md:-top-20">
          <h1 className="font-bold text-[32px] md:text-4xl lg:text-5xl leading-tight">
            Proconnect Global <br /> Education Pathways
          </h1>
          <p className="text-base md:text-xl my-5">
            This is an exceptional opportunity for you to take your career to
            the next level by pursuing a global education, with full support
            from Proconnect's financing and scholarship programs.
          </p>
        </div>

        {/* Right Section - Images */}
        <div className="relative md:w-[50%] flex justify-center md:justify-start">
          {/* Phone Image */}
          <img
            src={iphone}
            alt="phone"
            className="relative w-full md:w-[480px]"
          />

          {/* Circle behind the phone */}
          <img
            src={circle}
            alt="circle"
            className="absolute -z-10 w-full h-full md:w-[480px] md:h-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="mx-auto py-10 px-6 lg:px-20 md:w-[80%] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center">
          What does this mean for you?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 my-16">
          {cardText.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                index === 4 ? "lg:col-span-2 flex justify-center" : ""
              }`}
            >
              <CardShadow
                className="flex flex-col items-start justify-start py-6 text-justify px-5 max-w-[500px]"
                text={item.text}
                title={item.title}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto py-10 px-6 lg:px-20 flex flex-col items-center justify-center pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Key Resources</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {keyFeatures.map((item, index) => (
            <SmallBox
              key={index}
              title={item.title}
              img={item.img}
              linkTo={item.url}
            />
          ))}
        </div>
        <a
          className="w-full px-6 lg:px-20"
          href="https://elda.cloud/candidate/otp"
          target="_blank"
        >
          <button className="bg-[#db251a] border hover:bg-transparent transition-all font-semibold duration-300 hover:text-[#db251a] hover:border-[#db251a] text-white py-2 px-4 rounded-md mt-10 w-full">
            Click to Provide Your Details
          </button>
        </a>
      </div>
    </MainLayout>
  );
};

export default LandingPageForNew;
