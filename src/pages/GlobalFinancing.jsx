import { useEffect } from "react";
import twelve from "../assets/12.svg";
import robot from "../assets/robot.png";
import resumeSopImage from "../assets/resume-sop.png";
import admissionLoan from "../assets/admission-loan.png";
import Scholarship from "../assets/scholarship.png";
import nonCollateral from "../assets/no-collateral.png";
import ageLimit from "../assets/age-limit.png";
import loanRepayment from "../assets/loan-repay.png";
import interests from "../assets/interest-rates.png";
import visa from "../assets/visa.png";
import steps from "../assets/steps.png";
import disclaimer from "../assets/disclaimer.png";
import bankLoan from "../assets/bank-loan.png";
import MainLayout from "../layouts/MainLayout";
import ReuseableComponent from "../components/ReuseableComponent";

const GlobalFinancing = ({ setShowAfterFooter }) => {
  useEffect(() => {
    setShowAfterFooter(true);
    return () => setShowAfterFooter(false);
  }, [setShowAfterFooter]);
  return (
    <MainLayout>
      <div className="py-4 sm:py-10 md:px-20 bg-[#F4F4F4]">
        <div className="mb-8 md:mb-16 max-w-[1132px] m-auto flex items-center justify-center relative overflow-hidden">
          <div className="absolute left-2 sm:left-0 z-10 top-0 sm:top-auto">
            <img src={twelve} alt="twelve" className="w-20 md:w-full" />
          </div>
          <div className="mt-10 px-2 sm:mt-0 sm:ml-28 sm:pl-10 lg:px-16 bg-[#E6E6E6] flex items-center justify-center w-[1000px] py-6 mx-auto overflow-hidden">
            <h2 className="font-bold text-base md:text-2xl xl:text-[32px] md:leading-10 uppercase">
              <span>
                Things to Know About the{" "}
                <span className="text-[#DB251A]"> Pro</span>
                <span className="text-[#1E4580]">connect</span>
              </span>{" "}
              <br />
              <span>International Student Financing Process</span>
            </h2>
          </div>
        </div>

        <div className="space-y-10">
          <ReuseableComponent
            number={1}
            title="🧠 Instant, Tailored Guidance"
            text="Our AI-powered Human Intelligence School Application Software provides personalized advice on courses and universities in under 2 minutes, using your personal, academic, and professional information - with 99% accuracy."
            img={robot}
          />
          <ReuseableComponent
            number={2}
            title="📝 Resume & SOP Refinement"
            text="Our AI-powered Human Intelligence School Application Software called eLDa AI refines your resume and crafts a personalized Statement of Purpose (SOP) in less than 15 minutes, ensuring that your application stands out."
            img={resumeSopImage}
          />
          <ReuseableComponent
            number={3}
            title="🔍 Admission & Loan Processing Made Easy"
            text="Our advanced AI-powered Human Intelligence School Application Software, eLDa AI, automates the school application process, reducing errors and increasing admission success rates to over 90%. After securing your admission, we provide expert guidance to help you apply for a loan. By adhering to our advice and maintaining a good credit standing, you are assured access to our loan services. With eLDaAI, you're entitled to two school application submissions, making your educational aspirations more attainable and hassle-free."
            img={admissionLoan}
          />
          <ReuseableComponent
            number={4}
            title="🎓 Scholarship Encouragement"
            text="Proconnect encourages talented students to pursue fully or partially funded scholarships in 17 countries where we operate."
            img={Scholarship}
          />
          <ReuseableComponent
            number={5}
            title="💼 Non-Collateral Financing"
            text="For those unable to secure scholarships, Proconnect offers non-collateral financing of up to $100,000 for HND and BSc graduates to pursue MSc or MBA programs abroad. (PhD programs are not funded.)"
            img={bankLoan}
          />
          <ReuseableComponent
            number={6}
            title="🔑 No Collateral or Guarantor Required"
            text="We don't require collateral, a guarantor, or any extreme demands to qualify for our financing across these 17 countries."
            img={nonCollateral}
          />
          <ReuseableComponent
            number={7}
            title="⏳ Age Limit & Work Experience"
            text="Our financing is open to candidates up to 48 years old, whether experienced or not. Final-year undergraduates are also eligible to apply for the upcoming Fall (September) or Spring (January) semester. Admissions are conducted on a rolling basis for all categories of applicants."
            img={ageLimit}
            list={[
              "Candidates over 32 years: Eligible for applications to the US and Canada.",
              "Candidates under 32 years: Eligible to apply to all 17 countries where our loans are available",
            ]}
          />
          <ReuseableComponent
            number={8}
            title="💰 Loan Repayment"
            text="Repayment begins after graduation and can span between 10 to 20 years, depending on the country and program."
            img={loanRepayment}
          />
          <ReuseableComponent
            number={9}
            title="📊 Interest Rates"
            text="The interest rate on the loan ranges from 9% to 16% per annum. Your credit history determines the final interest rates you get at the time of applying for the loan. Proconnect will handle your loan application process."
            img={interests}
          />
          <ReuseableComponent
            number={10}
            title="🌍 Visa Support Information"
            smallTitle={"What Proconnect Provides:"}
            text="While we do not offer visa counseling services, Proconnect support your application by providing a Letter of Financial Support. This letter, issued by our financial institution partner, confirms that your education is being financed and can be used as part of your visa application."
            otherTitle={"💡 What You Should Do:"}
            list={[
              "Consult with immigration experts or consultants for personalized visa guidance.",
              "Discuss your specific visa requirements with your school's admission officers and immigration consultants to ensure a smooth process.",
            ]}
            img={visa}
          />
          <ReuseableComponent
            number={11}
            title="➡️ Next Steps"
            smallTitle={"💼 Join the Proconnect Global Education Community:"}
            text="Sign up by paying the Proconnect Service Fee to unlock access to:"
            list={[
              "Annual Membership Perks: Mentoring and career guidance.",
              "Value-Added Services: Comprehensive support for admission and financing processes",
            ]}
            img={steps}
            footer={"📧 After Payment:"}
            footerText={
              "Send an email to info@proconnectpay.com to confirm your registration and activate your benefits"
            }
          />
          <ReuseableComponent
            number={12}
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
    </MainLayout>
  );
};

export default GlobalFinancing;
