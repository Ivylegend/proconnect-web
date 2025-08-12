import DIYButton from "./DIYButton";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-center md:text-left text-red-600">
        CALL TO ACTION
      </h2>
      <p className="text-xl md:text-3xl font-bold italic text-center md:text-left">
        🚀 Ready to Start Your Global Career Journey?
      </p>
      <div className="max-w-2xl mx-auto text-center md:text-xl font-medium">
        <p className="text-[#323232]">
          👉🏽 Click the button below to secure your slot.
        </p>
        <p> Limited spots available to ensure personalized guidance.</p>
      </div>
      <DIYButton btnText={"Register Now"} />
    </div>
  );
}
