import PropTypes from 'prop-types';

export default function DIYButton({ btnText, id = 'register' }) {
  const scrollToForm = () => {
    const formElement = document.getElementById(id);
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToForm}
      className="hidden rounded-lg text-sm sm:text-base font-medium sm:flex items-center gap-4 justify-center text-[#DB251A] bg-transparent border py-3 px-6 cursor-pointer hover:bg-white hover:text-[#db251A] hover:border-[#db251A] hover:border transition-colors border-b-2 shadow-[0_4px_0px_rgba(0,0,0,0.25)]"
    >
      {btnText}
    </button>
  );
}

DIYButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  id: PropTypes.string
};