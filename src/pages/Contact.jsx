import React from "react";
import contactImg from "../assets/contact-img.png";
import Phone from "../assets/phone.png";
import LocationImg from "../assets/location-img.png";

const ContactInfo = [
  {
    location: "Global HQ(United States)",
    street: "8 The Green Ste, Dover County,Delaware, United States of America",
    number: "+1 678 431 5310",
  },
  {
    location: "Canada Office",
    street: "Downtown Toronto, Ontario,Canada",
    number: "+1 437 661 6895",
  },
  {
    location: "African HQ (Nigeria)",
    street:
      "111/114, Oshodi Apapa Expressway, Off International Airport Road, Lagos State, Nigeria",
    number: "+234 708 590 4631",
  },
  {
    location: "Ghana",
    street: "10, Banana Avenue, East Legon,Accra, Ghana",
    number: "+233 53 525 6044",
  },
  {
    location: "Uganda",
    street: "MU, Kampala, Uganda",
    number: "+256 759 524308",
  },
  {
    location: "Kenya",
    street: "TechHub Nairobi County,Nairobi, Kenya",
    number: "+2**************",
  },
  {
    location: "Rwanda",
    street: "TechHub,Kigali City, Kigali, Rwanda",
    number: "+2**************",
  },
];

const Contact = () => {
  return (
    <div className="px-10 md:pl-20 py-10 flex gap-8">
      <div className="w-full md:w-1/2">
        <p className="font-bold text-3xl mb-6">Contact Information</p>

        {ContactInfo.map((info) => {
          return (
            <div className="border-b py-4 flex flex-col justify-start gap-2 border-b-gray-400">
              <div className="flex items-center gap-2">
                <img src={LocationImg} alt="location-image" />
                <p className="font-bold text-[#323232]">{info.location}</p>
              </div>
              <p className="font-normal ml-8 text-sm text-[#323232]">
                {info.street}
              </p>
              <div className="flex items-center gap-2">
                <img src={Phone} alt="phone" />
                <p className="text-[#214780] font-bold">{info.number}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden md:flex md:w-1/2">
        <img className="h-full object-cover" src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
