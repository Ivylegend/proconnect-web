import Check from "../assets/check.png";
import MainLayout from "../layouts/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="py-10 md:px-20 bg-[#F4F4F4]">
        <div className="w-full lg:w-[70%] mx-auto px-10 md:p-0">
          <p className="text-center text-[32px] font-bold leading-normal">
            <span className="text-[#1E4580]">Proconnect</span>
            <span className="text-[#DB251A]">PAY</span>{" "}
            <span className="text-[#323232]">Privacy Policy</span>
          </p>
          <p className="leading-normal font-bold text-center my-6">
            Thank you for choosing Proconnect. We are committed to protecting
            your privacy and ensuring the security of your personal information.
            This Privacy Policy outlines how we collect, use, disclose, and
            protect your information when you use our services, specifically
            focusing on our student financing loan services. Please take a
            moment to review this policy to understand how we handle your data.
          </p>
        </div>

        <div className="bg-white rounded-none md:rounded-2xl px-8 md:px-16 py-8 flex flex-col gap-5 w-full">
          {/* ONE */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[#323232] text-[24px]">
              Information We Collect
            </p>
            <p className="text-normal font-medium">
              We collect both personal and non-personal information to provide
              and improve our services. The information we collect may include,
              but is not limited to:
            </p>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Personal Information: Name, address, email address, phone
                number, Social Security Number, financial information, and other
                relevant details.{" "}
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Educational Information: Academic records, enrollment status,
                and other information necessary for student financing services.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Usage Information: Information about how you interact with our
                website, application, and services.
              </p>
            </span>
          </div>

          {/* TWO */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[#323232] text-[24px]">
              How We Use Your Information{" "}
            </p>
            <p className="text-normal font-medium">
              We use the information we collect for the following purposes:
            </p>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                To provide customer support and address inquiries.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                To communicate with you regarding your loan application and
                account.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                To provide customer support and address inquiries.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                To improve and personalize our services.{" "}
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                To comply with legal and regulatory requirements.{" "}
              </p>
            </span>
          </div>

          {/* THREE */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[#323232] text-[24px]">
              Information Sharing
            </p>
            <p className="text-normal font-medium">
              We may share your information with:
            </p>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Financial institutions and service providers involved in the
                loan application and servicing process.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Government authorities and regulatory bodies as required by law.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Third-party service providers assisting us in operations,
                marketing, and analytics.
              </p>
            </span>
          </div>

          {/* FOUR */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[#323232] text-[24px]">Security</p>
            <p className="text-normal font-medium">
              We take reasonable measures to protect your information from
              unauthorized access, disclosure, alteration, and destruction. This
              includes physical, technical, and administrative safeguards. Your
              Choices! You have the right to:
            </p>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Review and correct your personal information.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Opt-out of promotional communications.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={Check} alt="check image" />
              <p className="font-normal text-sm text-[#323232]">
                Third-party service providers assisting us in operations,
                marketing, and analytics.
              </p>
            </span>
          </div>

          {/* FIVE */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[#323232] text-[24px]">
              Cookies and Tracking
            </p>
            <p className="text-normal font-medium">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. You can manage your cookie preferences
              through your browser settings.
            </p>
          </div>

          {/* SIX */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[#323232] text-[24px]">
              Third-Party Links
            </p>
            <p className="text-normal font-medium">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. You can manage your cookie preferences
              through your browser settings.
            </p>
          </div>

          {/* SEVEN */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[#323232] text-[24px]">
              Changes to Privacy Policy
            </p>
            <p className="text-normal font-medium">
              We may update this Privacy Policy to reflect changes in our
              practices. We will notify you of any significant changes.
            </p>
          </div>

          {/* EIGHT */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[#323232] text-[24px]">Contact Us</p>
            <p className="text-normal font-medium">
              If you have questions or concerns about this Privacy Policy,
              please contact us at info@proconnectpay.com{" "}
            </p>
          </div>

          {/* LAST */}
          <p className="text-[#323232] text-xl font-medium leading-normal">
            By using our services, you agree to the terms outlined in this{" "}
            <span className="text-[#DB251A]">Privacy</span>
            <span className="text-[#1E4580]">Policy</span>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
