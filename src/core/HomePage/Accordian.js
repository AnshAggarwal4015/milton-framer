import React, { useState } from "react";

const Accordion = ({ props }) => {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hs-accordion-group mb-10">
      <div
        className={`hs-accordion ${
          isOpen ? "hs-accordion-active:border-gray-200 active" : ""
        } bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 bg-[#F1F2F4] dark:border-transparent w-[60rem]`}
        id="hs-active-bordered-heading-two"
      >
        <button
          onClick={toggleAccordion}
          className={`hs-accordion-toggle ${
            isOpen ? "hs-accordion-active:text-blue-600" : ""
          } inline-flex text-lg	 text-[#2D2D2D] text-bold justify-between items-center gap-x-3 w-full font-semibold text-start py-4 px-5 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none`}
          aria-controls="hs-basic-active-bordered-collapse-two"
        >
          {question}
          <svg
            className={`hs-accordion-active:hidden block w-3.5 h-3.5 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <svg
            className={`hs-accordion-active:block hidden w-3.5 h-3.5 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
          </svg>
        </button>
        <div
          id="hs-basic-active-bordered-collapse-two"
          className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          aria-labelledby="hs-active-bordered-heading-two"
        >
          <div className="pb-4 px-5">
            <p className="text-gray-700">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
