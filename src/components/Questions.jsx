export default function Questions() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-red-600">
        Questions?
      </h2>
      <p className="flex gap-2 text-xl md:text-2xl font-bold text-center md:text-left italic">
        Have questions before registering?
      </p>
      <p className="text-black font-semibold uppercase mb-1 md:tracking-[0.6em] text-sm text-center">
        SEND AN EMAIL TO
      </p>
      <div className="border-t-0 items-center flex flex-col p-4 rounded-lg md:w-1/2 transition-all duration-300 hover:shadow-xl hover:scale-105 gap-2 bg-transparent border py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border  border-b-2 shadow-[0_4px_0px_rgba(0,0,0,0.25)]">
        <a
          href="mailto:sales@proconnectpay.com"
          className="text-red-600 hover:text-red-700 transition-all duration-300 hover:underline font-bold"
        >
          sales@proconnectpay.com
        </a>
      </div>
    </div>
  );
}
