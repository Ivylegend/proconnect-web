import DIYNavBar from "../components/DIYNavBar";
import manGreen from "../assets/man_green.png";
import ProgramMatters from "../components/ProgramMatters";
import WhatYouWillLearn from "../components/WhatYouWillLearn";
import DIYButton from "../components/DIYButton";
import WhoShouldAttend from "../components/WhoShouldAttend";
import WhatYouCanget from "../components/WhatYouCanget";
import Testimonial from "../components/Testimonial";
import EventDetails from "../components/EventDetails";

export default function DoItYourself() {
  return (
    <>
      <DIYNavBar />
      <div className="flex flex-col max-w-7xl mx-auto items-center md:gap-10 gap-6 w-full">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-12 lg:py-16 w-full mt-10">
          {/* Left Side */}
          <div className="flex-1">
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 justify-center">
              <span className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Remote Jobs
              </span>
              <span className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Fellowships
              </span>
              <span className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                <svg
                  className="w-4 h-4 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                </svg>
                Visa-Free Pathways
              </span>
              <span className="flex items-center gap-1 bg-purple-100 px-3 py-1 rounded-full">
                <svg
                  className="w-4 h-4 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                Global Talent Branding
              </span>
            </div>
            <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight text-gray-900">
              <span className="text-red-600 ">DO IT YOURSELF</span> <br />
              GOING GLOBAL
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl font-bold italic">
              ... Explore endless opportunities with our DIY approach to global
              career advancement.
            </p>
            <div className="mt-6 space-y-3 text-gray-800">
              <div className="flex items-center gap-2 font-bold">
                📅 Saturday, August 16th, 2025
              </div>
              <div className="flex items-center gap-2 font-bold">📍 ZOOM</div>
              <div className="flex items-center gap-2 font-bold">⏰ 10:00AM – 2:00PM</div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-red-600 text-white rounded-full p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">Participation Fee</h2>
                  <p className="text-2xl font-bold tracking-tight">#20,000</p>
                </div>
              </div>
              <div className="flex-1">
                <DIYButton btnText={"Register Now"} linkTo={"/#"}/>
              </div>
            </div>
            
          </div>
          {/* Right Side */}
          <div className="flex-1 items-center ">
            <div className="relative w-full flex items-center justify-center lg:w-1/2">
              <img
                src={manGreen}
                alt="Man"
                className="object-contain w-full"
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white pointer-events-none" /> 
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-10">
          <ProgramMatters/>
          <WhatYouWillLearn/>
          <WhatYouCanget/>
          <WhoShouldAttend/>
        </section>
        <section>
          <Testimonial/>
        </section>
        <EventDetails/>
      </div>
     
    </>
  );
}
