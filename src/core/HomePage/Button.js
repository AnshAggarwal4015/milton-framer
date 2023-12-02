import React from "react";

const Button = ({ children, active }) => {
  return (
    <button>
      <div
        className={`font-plus-jakarta-sans shadow-customHomePageButton text-center text-base px-6 py-3 rounded-xl font-bold
        ${
          active ? "bg-[#F1F2F4] text-[#2E2E2E]" : "bg-[#2E2E2E] text-[#FEFEFE]"
        }
    `}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
