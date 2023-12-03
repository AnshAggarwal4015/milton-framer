import TestimonialReviewCard from "../core/HomePage/TestimonialReviewCard";
import { reviews } from "../utils/constants";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center mt-60 w-full	">
      <div className="bg-[#F1F2F4] rounded-[6.25rem] py-3 px-6 font-semibold">
        They already love our products 😍
      </div>
      <div className="mt-2 my-10 text-5xl font-extrabold text-[#2E2E2E]">
        See what our users say about us
      </div>
      <div className="flex flex-wrap overflow-hidden justify-around">
        {reviews.map((item) => {
          return <TestimonialReviewCard props={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Testimonial;
