
import {FaClock, FaLocationDot } from "react-icons/fa6";
import hall from "../assets/hall.png";
import { BsCalendar2MonthFill } from "react-icons/bs";


export default function EventDetails() {
  return (
    <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:p-0 p-5 gap-10 items-center w-full">
            {/* Left side */}
            <div className="flex-1 relative">
              <img src={hall} alt="" className="object-cover w-full" />
            </div>
            {/* Right side */}
            <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-red-600">
            EVENT DETAILS RECAP{" "}
            </h1>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <span className="bg-red-600 p-3 rounded-full">
                    <BsCalendar2MonthFill className="text-white text-3xl font-extrabold" />
                  </span>
                  <p className="text-xl">Get remote jobs that pay in dollars</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-600 p-3 rounded-full">
                    <FaLocationDot className="text-white text-3xl font-extrabold" />
                  </span>
                  <p className="text-xl">
                    Land fully funded fellowships and internships
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-red-600 p-3 rounded-full">
                    <FaClock className="text-white text-3xl font-extrabold" />
                  </span>
                  <p className="text-xl">Apply for freelance or startup visas</p>
                </div>
                <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded-full p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">Participation Fee</h2>
                  <p className="text-2xl font-bold tracking-tight">#20,000</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
