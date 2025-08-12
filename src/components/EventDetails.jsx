import { FaClock, FaLocationDot } from "react-icons/fa6";
import hall from "../assets/hall.png";
import { BsCalendar2MonthFill } from "react-icons/bs";

export default function EventDetails() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-0 gap-10 items-center w-full">
        {/* Left side */}
        <div className="flex-1 relative">
          <img src={hall} alt="" className="object-cover w-full" />
        </div>
        {/* Right side */}
        <div className="flex-1">
          <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-left text-red-600">
            EVENT DETAILS RECAP
          </h2>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3">
              <span className="bg-red-600 p-3 rounded-full font-bold">
                <BsCalendar2MonthFill className="text-white text-xl font-extrabold" />
              </span>
              <p className="md:text-xl">Saturday, August 16th, 2025</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaLocationDot className="text-white text-xl font-extrabold" />
              </span>
              <p className="md:text-xl">ZOOM</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-red-600 p-3 rounded-full">
                <FaClock className="text-white text-xl font-extrabold" />
              </span>
              <p className="md:text-xl">10:00AM - 2:00PM</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#db251A] min-w-60 py-2 text-left flex flex-col items-center justify-center rounded-full text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <p className="text-sm font-medium">Participation Fee</p>
                <p className="text-2xl font-bold">#20,000</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
