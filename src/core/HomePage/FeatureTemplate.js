const FeatureTemplate = ({ props }) => {
  const {
    id,
    title,
    heading,
    description,
    imageLink,
    review,
    reviewName,
    reviewPosition,
    reviewImage,
  } = props;
  return (
    <div
      className={`flex ${
        id % 2 === 0 ? "flex-row-reverse" : "flex-row"
      } items-center justify-end gap-x-60 pl-36 pr-20 mb-48`}
    >
      <div className="max-w-[300px]">
        <div className="text-[#2E2E2E] text-xs	font-bold	rounded-[100px] bg-[#DDF4E4] max-w-[9rem] px-3 py-1">
          {title}
        </div>
        <div className="text-[#2E2E2E] text-xl	font-extrabold">{heading}</div>
        <div className="gap-1 text-[#6B6B78] mt-5 font-medium mb-24 text-[0.625rem] leading-2">
          {description}
        </div>
        <div className="review flex">
          <img
            src={reviewImage}
            alt="Reviewer"
            width={50}
            height={40}
            className="flex-shrink-0 rounded-[3.75rem] relative top-6"
          />
          <div className="text-xs bg-[#2E2E2E] text-[#FEFEFE] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-sm p-2">
            <div className="mb-[0.38rem]">{review}</div>
            <div className="text-[#90909E]">
              {reviewName}, {reviewPosition}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[50%]">
        <img
          src={imageLink}
          alt="Feature"
          className="rounded-xl flex-shrink-0 -rotate-45 width={100} height={100} max-h-[324px]"
        />
      </div>
    </div>
  );
};

export default FeatureTemplate;
