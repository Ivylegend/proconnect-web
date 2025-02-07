import React from "react";
import PcpCountries from "../assets/pcp-countries.svg";
import CardShadow from "./small-components/CardShadow";
import SmallBox from "./SmallBox";
import key1 from "../assets/key-1.svg";
import key2 from "../assets/key-2.svg";
import key3 from "../assets/key-3.svg";
import key4 from "../assets/key-4.svg";
import MiniForm from "./MiniForm";
import ReuseableComponent from "./ReuseableComponent";
import disclaimer from "../assets/disclaimer.png";
import visa from "../assets/visa.png";
import interests from "../assets/interest-rates.png";
import eligibility from "../assets/eligibility.png";
import loanAmount from "../assets/loan-amount.png";
import loanCover from "../assets/loan-cover.png";
import loanNotCover from "../assets/loan-not-cover.png";
import repayTerms from "../assets/repay-terms.png";
import ageLimit from "../assets/age.png";
import applicationSupport from "../assets/application-support.svg";
import personalizedCounseling from "../assets/personalized-counseling.svg";
import financialSupport from "../assets/financial-support.svg";
import careerAdvancement from "../assets/career-advancement.svg";
import Networking from "../assets/networking.svg";

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

const Banks = ({ bankName, miniName }) => {
  return (
    <section className="w-full">
      <div className="mx-auto py-10 px-6 lg:px-20 text-center w-full flex flex-col items-center justify-center pb-20">
        <h1 className="font-bold text-4xl">
          <span className="text-[#DB251A]">Pro</span>
          <span className="text-[#1E4580]">
            connect Global Education Pathways
          </span>
        </h1>
        <p className="text-lg md:text-xl py-5 pb-10">
          {bankName}, in collaboration with Proconnect and its International
          Banking Partners, has introduced an innovative Study Abroad Financing
          program, enabling you to pursue a post-graduate education (MBA and
          MSC) in any 17 countries worldwide.
        </p>

        <div>
          <img src={PcpCountries} alt="supported countries" />
        </div>
      </div>

      <hr className="w-full h-1" />

      <div className="mx-auto py-10 px-6 lg:px-20 text-center sm:w-[80%] flex flex-col items-center justify-center ">
        <h2 className="text-xl font-bold">
          This is an exceptional opportunity for you to take your career to the
          next level by pursuing a global education, with full support from
          Proconnect's financing and scholarship programs.
        </h2>

        <p className="my-5">
          To simplify the process of choosing a course or university, {bankName}{" "}
          has partnered with Proconnect Global Education and Global Mobility
          FinTechCo. to offer admission and financing processing services
          exclusively to {miniName} customers at a subsidized fee of{" "}
          <span className="text-[#DB251A] font-semibold">₦60,000</span> - a 70%
          discount provided through this partnership.
        </p>
        <p>
          This service fee grants access to the benefits outlined below and
          remains valid for 12 months.
        </p>
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

      <div className="mx-auto py-10 px-6 lg:px-20 md:w-[80%] flex flex-col items-center justify-center pb-20">
        <h2 className="text-3xl font-bold text-center">Key Details</h2>
        <p className="my-5 text-xl">Loan Terms and Conditions</p>
        <div className="space-y-10">
          <ReuseableComponent
            title="💰 Loan Amount"
            img={loanAmount}
            checkmarkList={[
              {
                text: [
                  "Up to $100,000 in International Student Loans.",
                  "We do not require a collateral or guarantor.",
                ],
              },
            ]}
          />
          <ReuseableComponent
            title="✅ Eligibility"
            img={eligibility}
            checkmarkList={[
              {
                text: [
                  "Must be an HND/BSc graduate with no bad credit history.",
                  "3rd class degree holders, including those with a CGPA close to a 3rd class, are not eligible.",
                  "Work experience is not required for HND/BSc graduates under 32 years old, but professional or entrepreneurial work experience is highly valued and improves admission success.",
                ],
              },
            ]}
          />
          <ReuseableComponent
            title="🔞 Age Limit"
            img={ageLimit}
            checkmarkList={[
              {
                text: [
                  "Under 32 years: Eligible to apply to all 17 countries where loans are available.",
                  "Over 32 years: Eligible for applications to the US and Canada only.",
                ],
              },
            ]}
          />

          <ReuseableComponent
            title="📊 Interest Rates"
            checkmarkList={[
              {
                text: [
                  "9 - 16% per annum, fixed on a reducing balance. Specific interest rate is determined by your credit score and history we access through credit bureaus.",
                ],
              },
            ]}
            img={interests}
          />

          <ReuseableComponent
            title="📆 Repayment Terms"
            img={repayTerms}
            checkmarkList={[
              {
                text: [
                  "Duration: 10 - 20 years (varies by destination country).",
                  "Grace Period: 8 - 12 months after graduation.",
                ],
              },
            ]}
          />

          <ReuseableComponent
            title="💼 What Does the Loan Cover?"
            checkmarkList={[
              {
                title: "For the US and Canada",
                text: ["🏫 Tuition", "🏠 Housing", "🍴 Feeding"],
              },
              {
                title: "For Europe, Asia, and the U.K.",
                text: ["🏫 Tuition only"],
              },
              {
                title: "Additional Information",
                text: [
                  "🏠 Our housing and feeding loans are available only for selected universities in Canada, and we will recommend these schools to candidates.",
                  "💳 Loans are paid directly to the university upon your arrival on campus.",
                ],
              },
            ]}
            img={loanCover}
          />

          <ReuseableComponent
            title="❌ Our loans do not cover"
            checkmarkList={[
              {
                text: [
                  "Application fees to the university (if required).",
                  "Visa processing fees.",
                  "Flight tickets.",
                ],
              },
            ]}
            footerText={
              "Candidates are responsible for these additional investments."
            }
            img={loanNotCover}
          />

          <ReuseableComponent
            title="🌍 Visa Support Information"
            smallTitle={"What Proconnect Provides:"}
            text="While we do not offer visa counseling services, Proconnect support your application by providing a Letter of Financial Support. This letter, issued by our financial institution partner, confirms that your education is being financed and can be used as part of your visa application."
            otherTitle={"💡 What You Should Do:"}
            checkmarkList={[
              {
                text: [
                  "Consult with immigration experts or consultants for personalized visa guidance.",
                  "Discuss your specific visa requirements with your school's admission officers and immigration consultants to ensure a smooth process.",
                ],
              },
            ]}
            footerText={
              "Our support simplifies your application by reducing the need for personal proof of funds."
            }
            img={visa}
          />

          <ReuseableComponent
            title="⚠️ Disclaimer"
            text="Our AI-powered Human Intelligence School Application Software called eLDa AI refines your resume and crafts a personalized Statement of Purpose (SOP) in less than 15 minutes, ensuring that your application stands out."
            img={disclaimer}
            disclaimerList={[
              {
                title: "🔹 Our Role:",
                text: "Proconnect, along with its local and global financial institution partners, has streamlined the study abroad process through strong relationships with diplomatic outposts across Africa and the world.",
              },
              {
                title: "🔹 Important Note:",
                text: "We do not influence or determine visa approval decisions. Visa officers in each country hold the final prerogative to grant or deny student visas.",
              },
              {
                title: "🔹 Liability:",
                text: "Please be aware that if the visa outcome is unfavorable, you may lose your initial investment, including the service fee paid to Proconnect or its affiliated partners. Proconnect will not be held liable for the final outcome of the visa application process.",
              },
            ]}
            footer={"Kindly proceed with this understanding."}
          />
        </div>
      </div>

      <div className="mx-auto py-10 px-6 lg:px-20 flex flex-col items-center justify-center pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Key Resources</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {keyFeatures.map((item, index) => (
            <SmallBox key={index} title={item.title} img={item.img} linkTo={item.url} />
          ))}
        </div>
      </div>

      <div className="mx-auto py-10 px-6 lg:px-20 md:w-[80%] flex flex-col items-center justify-center">
        <MiniForm bankName={bankName} />
      </div>
    </section>
  );
};

export default Banks;
