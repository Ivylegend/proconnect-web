import smileMan from "../assets/smileMan.png";
import smile_Lady from "../assets/smile_lady.png";
import redArrow from "../assets/redArrow.png";
export default function Testimonial() {
  return (
    <div className="flex flex-col items-center gap-4 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-red-600 uppercase">
            Testimonial
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-5xl m-auto">
            <div className="flex flex-col items-center gap-4 ">
                <div className="flex flex-col gap-1 items-center">
                <img src={smileMan} alt="" />
                <img src={redArrow} alt="" />
                </div>
                <p className="text-center text-lg font-semibold text-gray-600">
                “I was stuck in a loop of visa denials - this program gave me a new path I didn’t even know existed.”
                </p>
                <span className="italic text-sm">
                – Bolaji A., Lagos
                </span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-1 items-center">
                <img src={smile_Lady} alt="" />
                <img src={redArrow} alt="" />
                </div>
                <p className="text-center text-lg font-semibold text-gray-600">
                “After the session, I landed my first $1,200/month remote writing job. Thank you Proconnect!” 
                </p>
                <span className="italic text-sm">– Ezinne O., Enugu</span>
            </div>
        </div>
    </div>
  )
}
