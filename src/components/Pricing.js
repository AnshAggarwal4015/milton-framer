import PricingCard from "../core/HomePage/PricingCard";
import { monthlyPriceCards } from "../utils/constants";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center mt-60 max-w-[75rem] mx-auto">
      <div className="bg-[#F1F2F4] rounded-[6.25rem] py-3 px-6 font-semibold">
        Pricing and plans 💰
      </div>
      <div className="mt-2 my-10 text-5xl font-extrabold text-[#2E2E2E]">
        Find the best plan for your needs
      </div>

      <div className="flex flex-row flex-wrap gap-x-6">
        {monthlyPriceCards.map((item) => {
          return <PricingCard props={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Pricing;
