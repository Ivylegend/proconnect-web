import DIYButton from "./DIYButton";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
         <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-red-600">
            EVENT DETAILS RECAP{" "}
            </h1>
            <div className="flex gap-2 text-xl md:text-3xl font-bold text-center md:text-left">
                <span>🚀</span>
                <h1>Ready to Start Your Global Career Journey?</h1>
            </div>
           <div className="max-w-2xl mx-auto text-center text-xl font-bold">
           <p className="text-gray-500">
            👉🏽 Click the button below to secure your slot.
            <p> Limited spots available to ensure personalized guidance.</p>
            </p>
            
           </div>
           <DIYButton btnText={"Register Now"} linkTo={"/#"}/>
    </div>
  )
}
