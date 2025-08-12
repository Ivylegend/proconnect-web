import manGreen from "../assets/man_green.png";
import circle1 from "../assets/img-1.png";
import circle2 from "../assets/img-2-mobile.png";
import circle3 from "../assets/img-3.png";
import bgCircle from "../assets/bg-circle.svg";
import ProgramMatters from "../components/ProgramMatters";
import WhatYouWillLearn from "../components/WhatYouWillLearn";
import WhoShouldAttend from "../components/WhoShouldAttend";
import WhatYouCanget from "../components/WhatYouCanget";
import Testimonial from "../components/Testimonial";
import EventDetails from "../components/EventDetails";
import CallToAction from "../components/CallToAction";
import PersonalDetailsForm from "../components/PersonalDetailsForm";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import DIYButton from "../components/DIYButton";
import DIYNavBar from "../components/DIYNavBar";

export default function DoItYourself() {
  return (
    <>
      <div className="bg-[url('/src/assets/world.svg')] w-full min-h-screen bg-cover bg-no-repeat">
        <DIYNavBar />
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 py-12 px-0 lg:pl-12 xl:pl-20 pr-0">
            {/* Left Side */}
            <div className="flex-1 z-10 px-6 lg:pr-8">
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 justify-center lg:justify-start">
                <span className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                  ✅ Remote Jobs
                </span>
                <span className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
                  🎓 Fellowships
                </span>
                <span className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                  ✈️ Visa-Free Pathways
                </span>
                <span className="flex items-center gap-1 bg-purple-100 px-3 py-1 rounded-full">
                  💼 Global Talent Branding
                </span>
              </div>

              <h1 className="mt-4 text-4xl text-center md:text-left md:text-6xl lg:text-5xl xl:text-7xl font-extrabold leading-tight text-gray-900">
                <span className="text-red-600">DO IT YOURSELF</span> <br />
                GOING GLOBAL
              </h1>

              <p className="md:mt-4 text-center md:text-left md:text-xl text-gray-500 max-w-2xl font-bold italic">
                ...Unlock Global Opportunities from Nigeria - No Agents. Just
                Strategy.
              </p>

              <div className="mt-6 space-y-3 text-gray-800">
                <div className="flex items-center gap-2 font-bold">
                  📅 Saturday, August 16th, 2025
                </div>
                <div className="flex items-center gap-2 font-bold">📍 ZOOM</div>
                <div className="flex items-center gap-2 font-bold">
                  ⏰ 10:00AM - 2:00PM
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                <button className="bg-[#db251A] min-w-60 py-2 text-left flex flex-col items-center justify-center rounded-full text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <p className="text-sm font-medium">Participation Fee</p>
                  <p className="text-2xl font-bold">#20,000</p>
                </button>
                <div className="flex-1">
                  <DIYButton btnText={"Register Now"} />
                </div>
              </div>
            </div>

            {/* Right Side - Full width to edge */}
            <div className="relative flex-1 h-[600px] min-h-[600px] lg:h-[700px] lg:min-h-[700px] max-w-none w-full sm:w-1/2 lg:w-1/2">
              {/* Background circle */}
              <img
                src={bgCircle}
                alt="circle"
                className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full max-w-lg z-0 opacity-20"
              />

              {/* Main man image */}
              <img
                src={manGreen}
                alt="Man"
                className="absolute object-contain bottom-0 left-[60%] transform -translate-x-1/2 h-[120%] w-full max-w-none z-10"
              />

              {/* Decorative circles - positioned like in reference image */}
              <img
                src={circle1}
                alt="img in a circle"
                className="absolute z-20 left-8 lg:left-16 top-1/2 transform -translate-y-1/2 w-16 h-16 lg:w-28 lg:h-28 object-contain"
              />
              <img
                src={circle2}
                alt="img in a circle"
                className="absolute z-20 top-16 lg:top-24 right-8 lg:right-0 w-16 h-16 lg:w-28 lg:h-28 object-contain"
              />
              <img
                src={circle3}
                alt="img in a circle"
                className="absolute z-40 bottom-20 lg:bottom-24 right-8 lg:right-36 w-16 h-16 lg:w-28 lg:h-28 object-contain"
              />

              {/* Half-length overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30" />
            </div>
          </div>
        </section>
      </div>

      {/* Content sections */}
      <div className="max-w-4xl xl:max-w-7xl mx-auto md:space-y-10 space-y-6 w-full mt-16 mb-12 px-4">
        <section className="flex flex-col gap-10">
          <ProgramMatters className="animate-fade-in" />
          <WhatYouWillLearn className="animate-slide-up" />
          <WhatYouCanget className="animate-fade-in" />
          <WhoShouldAttend className="animate-slide-up" />
        </section>
        <section>
          <Testimonial />
        </section>
        <section className="w-full flex flex-col gap-10">
          <EventDetails />
          <CallToAction />
          <div id="register">
            <PersonalDetailsForm />
          </div>
          <Questions />
        </section>
      </div>
      <Footer />
    </>
  );
}
