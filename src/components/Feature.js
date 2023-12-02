import { featureTemplate, featureCards } from "../utils/constants";
import FeatureCard from "../core/HomePage/FeatureCard";
import FeatureTemplate from "../core/HomePage/FeatureTemplate";

const Feature = () => {
  return (
    <div className="flex flex-col items-center mt-60 max-w-[75rem] mx-auto">
      <div className="bg-[#F1F2F4] rounded-[6.25rem] py-3 px-6 font-semibold">
        Our main features 🦸
      </div>
      <div className="mt-2 my-10 text-5xl font-extrabold text-[#2E2E2E]">
        Discover your new superpowers
      </div>

      <div className="mt-10">
        {featureTemplate.map((item) => {
          return <FeatureTemplate props={item} key={item.id} />;
        })}
      </div>

      <div className="bg-[#F1F2F4] rounded-[6.25rem] py-3 px-6 font-semibold">
        And so much more... 💼
      </div>
      <div className="text-center mt-2 my-10 text-5xl font-extrabold text-[#2E2E2E] px-40 max-w-[70rem]">
        Our features to make your life easier
      </div>

      <div className="flex flex-wrap overflow-hidden gap-5">
        {featureCards.map((item) => {
          return <FeatureCard props={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Feature;
