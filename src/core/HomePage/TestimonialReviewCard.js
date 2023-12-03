import testimonialReview from "../../assets/testimonialReview.png";

const TestimonialReviewCard = ({ props }) => {
  const { text, review, rating, author, occupation } = props;
  return (
    <div className=" rounded-2xl p-2 bg-[#FEFEFE] flex flex-col gap-y-2 gap-x-4 m-4 w-[29rem]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-2">
          <img src={testimonialReview} alt="testimonialReviewUser" />
          <div className="font-bold	">{text}</div>
        </div>
        <div className="">{rating}</div>
      </div>
      <div>{review}</div>
      <div className="flex flex-row justify-between">
        <div>{author}</div>
        <div>{occupation}</div>
      </div>
    </div>
  );
};

export default TestimonialReviewCard;
