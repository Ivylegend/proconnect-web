import BanksLayout from "../../layouts/BanksLayout";
import sycamoreLogo from "../../assets/sycamore-logo.svg";
import NewHero from "../../components/NewHero";
import applicationSupport from "../../assets/application-support.svg";
import personalizedCounseling from "../../assets/personalized-counseling.svg";
import financialSupport from "../../assets/financial-support.svg";
import careerAdvancement from "../../assets/career-advancement.svg";
import Networking from "../../assets/networking.svg";
import MiniForm from "../../components/MiniForm";

const cardText = [
  {
    title: "Personalized Counseling",
    text: "eLDa AI recommends the best courses, schools, and countries for you.",
    icon: personalizedCounseling,
  },

  {
    title: "Financial Support",
    text: "Get up to $100,000 in student loans with no collateral or guarantor.",
    icon: financialSupport,
  },
  {
    title: "Career Growth",
    text: "Gain global skills for top jobs, business, or public sector roles.",
    icon: careerAdvancement,
  },
  {
    title: "Networking",
    text: "Connect with professionals and diplomats at monthly mixers.",
    icon: Networking,
  },
  {
    title: " Application Help",
    text: "Proconnect refines your resume, crafts your SOP, and submits your applications.",
    icon: applicationSupport,
  },
];

const Sycamore = () => {
  return (
    <BanksLayout logo={sycamoreLogo}>
      <NewHero bank={true} />
      <hr className="w-full h-1" />
      <div className="px-5 md:px-20 md:py-12 md:max-w-[1120px] mx-auto">
        <div className="w-full shadow-2xl shadow-red-500/20 drop-shadow-sm px-4 py-7 my-10 space-y-7 flex flex-col items-center justify-center rounded-[16px] bg-white">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <p className="font-semibold text-lg lg:text-[44px]"> As a</p>{" "}
            <img src={sycamoreLogo} alt="logo" />{" "}
            <p className="font-semibold text-lg lg:text-[44px]">Community Member</p>
          </div>
          <p className="font-semibold text-lg md:text-2xl text-center">
            Pay <span className="text-[#db251a]"> N60,000</span> rather than{" "}
            <span className="text-[#db251a] line-through">₦̶2̶0̶0̶,̶0̶0̶0̶</span>
          </p>
          <p className="font-extrabold text-lg md:text-2xl text-center">MASSIVE 70% DISCOUNT</p>
          <p className="text-[#db251a] font-bold text-lg md:text-2xl">
            For a Limited TIME!!!
          </p>
        </div>

        <div className="w-full mt-20 space-y-6">
          <h2 className="text-center font-bold text-3xl">Key Benefits</h2>

          {cardText.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 w-full bg-white shadow-[0px_0px_12px_5px_rgba(239,68,68,0.1)] mb-8 flex flex-col items-start justify-start py-6 text-justify px-5`}
            >
              <div>{<img src={item.icon} alt="icon" />}</div>
              <h3 className="text-xl font-bold leading-normal my-3">
                {item.title}
              </h3>
              <p className="text-base">{item.text}</p>
            </div>
          ))}
        </div>

        <div id="form" className="my-20">
          <MiniForm bankName={"Sycamore"} amount={60000} currency={"NGN"} />
        </div>
      </div>
    </BanksLayout>
  );
};

export default Sycamore;
