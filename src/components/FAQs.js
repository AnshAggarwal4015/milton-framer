import Accordion from "../core/HomePage/Accordian";
import { faqData } from "../utils/constants";

const FAQs = () => {
  return (
    <div className="flex flex-col items-center mt-60 max-w-[75rem] mx-auto">
      <div className="bg-[#F1F2F4] rounded-[6.25rem] py-3 px-6 font-semibold">
        Relevant stuff, bla bla 📣
      </div>
      <div className="mt-2 my-10 text-5xl font-extrabold text-[#2E2E2E]">
        Frequently asked questions
      </div>
      {
        faqData.map((item) => {
          return <Accordion props={item} key={item.id} />;
        })
      }
    </div>
  );
};

export default FAQs;
