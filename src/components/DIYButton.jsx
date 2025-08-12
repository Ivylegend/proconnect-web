
export default function DIYButton({ btnText }) {
  const scrollToForm = () => {
    const formElement = document.getElementById("register");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToForm}
      className="rounded-lg text-sm sm:text-base font-medium sm:flex items-center gap-4 justify-center text-[#DB251A] bg-transparent border py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors border-b-2 shadow-[0_4px_0px_rgba(0,0,0,0.25)]"
    >
      {btnText}
    </button>
  );
}
