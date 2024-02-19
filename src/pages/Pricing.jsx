import React from "react";
import Botswana from "../assets/twemoji_flag-botswana.png";
import nigeria from "../assets/twemoji_flag-nigeria.png";
import ghana from "../assets/twemoji_flag-ghana.png";
import zimbabwe from "../assets/twemoji_flag-zimbabwe.png";
import zambia from "../assets/twemoji_flag-zambia.png";
import uganda from "../assets/twemoji_flag-uganda.png";
import rwanda from "../assets/twemoji_flag-rwanda.png";
import malawi from "../assets/twemoji_flag-malawi.png";
import blueLine from "../assets/blue-line.png";

const TABLE_HEADERS = ["Countries", "Loan Amounts"];
const TABLE_BODY = [
  {
    country: "NIGERIA",
    flag: nigeria,
    amount: "₦300,000 (Naira)",
  },
  {
    country: "GHANA",
    flag: ghana,
    amount: "₵ 4,000.00 (Ghanaian Cedi)",
  },
  {
    country: "ZIMBABWE",
    flag: zimbabwe,
    amount: "Z$ 180,000 (Zimbabwean Dollar)",
  },
  {
    country: "BOTSWANA",
    flag: Botswana,
    amount: "P 7,000 (Botswanan Pula)",
  },
  {
    country: "ZAMBIA",
    flag: zambia,
    amount: "ZK 13,000.00 (Zambian Kwacha)",
  },
  {
    country: "UGANDA",
    flag: uganda,
    amount: "USh 1,800,000 (Ugandan Shilling)",
  },
  {
    country: "RWANDA",
    flag: rwanda,
    amount: "R₣ 650,000 (Rwandan Franc)",
  },
  {
    country: "MALAWI",
    flag: malawi,
    amount: "MK 800,000 (Malawian Kwaoha)",
  },
];

const Pricing = () => {
  return (
    <div className="px-10 lg:px-20 lg:py-10 flex flex-col items-center justify-center">
      <span className="relative my-12">
        <p className="font-bold text-center text-3xl text-[#323232]">
          Membership Pricing in Other International Currencies
        </p>
        <img src={blueLine} alt="line" className="hidden sm:flex absolute right-0 top-10" />
      </span>
      <div>
        <table className="w-full border border-[#1E4580] rounded-2xl overflow-hidden">
          {/* TABLE HEAD */}
          <thead className="bg-[#1E4580]">
            <tr className="">
              {TABLE_HEADERS.map((head, index) => (
                <th
                  key={index}
                  className={`text-white p-4 text-left ${
                    index === 0 ? "border-tl rounded-tl-2xl" : ""
                  } ${
                    index === TABLE_HEADERS.length - 1
                      ? "border-tr rounded-tr-2xl"
                      : ""
                  }`}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody className="border border-[#1E4580]">
            {TABLE_BODY.map((body, index) => (
              <tr key={index}>
                <td className="flex p-4 pr-8 md:pr-24 gap-2 items-center text-left">
                  <img src={body.flag} alt={body.flag} />
                  <p className="font-bold text-xl text-[#1E4580]">
                    {body.country}
                  </p>
                </td>
                <td className="text-left bg-[#D8D8D8] border-l border-[#1E4580] px-4 font-bold text-xl text-[#1E4580]">
                  {body.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
