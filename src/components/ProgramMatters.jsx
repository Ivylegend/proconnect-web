import manGlasses from "../assets/man_glasses.png";
import { FaToolbox } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { BsGlobeEuropeAfrica } from "react-icons/bs";

export default function ProgramMatters() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-red-600">
        WHY THIS PROGRAM MATTERS
      </h2>
      <h1 className="md:text-2xl text-gray-500 font-bold max-w-6xl text-center mb-10 mt-5">
        If you have been searching for a way to go global without depending on
        school admission, agents, or JAPA stress, this mentorship program is
        built for you.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-0 gap-10 items-center w-full">
        {/* Left side */}
        <div className="relative w-full">
          <img src={manGlasses} alt="" className="object-cover w-full" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-white" />
        </div>
        {/* Right side */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold">
            DIY Going Global is a practical, one-day mentorship session showing
            Nigerian professionals how to:
          </h2>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaToolbox className="text-white text-xl font-extrabold" />
              </span>
              <p className="text-base md:text-xl">
                Get remote jobs that pay in dollars
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaArrowTrendUp className="text-white text-xl font-extrabold" />
              </span>
              <p className="text-base md:text-xl">
                Land fully funded fellowships and internships
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaArrowUpFromBracket className="text-white text-xl font-extrabold" />
              </span>
              <p className="text-base md:text-xl">
                Apply for freelance or startup visas
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <BsGlobeEuropeAfrica className="text-white text-xl font-extrabold" />
              </span>
              <p className="text-base md:text-xl">
                Build a global personal brand from right here in Nigeria
              </p>
            </div>
            <p className="text-xl md:text-2xl font-bold">
              You don&apos;t need to leave the country first - you just need a
              roadmap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
