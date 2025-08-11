
export default function Questions() {
  return (
    <div className="flex flex-col items-center gap-7">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-red-600 uppercase">
            Questions?{" "}
            </h1>
            <h1 className="flex gap-2 text-xl md:text-3xl font-bold text-center md:text-left italic">
            Have questions before registering?
      </h1>
      <div className="border-t-0  items-center flex flex-col p-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:border-red-700 hover:scale-105 gap-2 w-1/2 bg-transparent border py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border  border-b-2 shadow-[0_4px_0px_rgba(0,0,0,0.25)]">
        <h1 className="text-gray-600 font-semibold uppercase mb-1 tracking-widest text-center">SEND AN EMAIL TO</h1>
        <a href="mailto:sales@proconnectpay.com" className="text-red-600 hover:text-red-700 transition-all duration-300 hover:underline font-bold">sales@proconnectpay.com</a>
      </div>
    </div>
  )
}
