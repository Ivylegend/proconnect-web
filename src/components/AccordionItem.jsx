import React from 'react';

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="w-full mt-8 flex flex-col gap-4">
      <div className="flex justify-between cursor-pointer" onClick={onToggle}>
        <h3 className="font-semibold md:text-lg">{question}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-10px)' }}
      >
        <div className="ml-4 bg-gray-50 p-2 rounded-md transition-opacity duration-200">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
