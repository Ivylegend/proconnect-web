import React, { useState } from "react";
import AccordionItem from "../components/AccordionItem";
import { faqs } from "../constants";
import MainLayout from "../layouts/MainLayout";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <MainLayout>
    <div className="mx-auto flex flex-col justify-between items-center max-w-[800px] p-10">
      <h2 className="text-center sm:px-10 font-bold text-2xl sm:text-4xl mb-4">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          isOpen={openIndex === index}
          key={index}
          question={faq.question}
          answer={faq.answer}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
    </MainLayout>
  );
};

export default FAQs;
