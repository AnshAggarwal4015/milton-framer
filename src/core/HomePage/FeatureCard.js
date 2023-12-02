const FeatureCard = ({ props }) => {
  const { title, description, imageLink } = props;
  return (
    <div className="flex gap-6 flex-col max-w-[24rem]">
      <div className="px-24	py-10 rounded-2xl	bg-[#F1F2F4]">
        <img src={imageLink} alt="Calender"/>
      </div>
      <div className="px-6 py-2 bg-[#CCEAFD] text-[#2D2D2D] w-fit rounded-[6.25rem] text-base	font-semibold	">
        {title}
      </div>
      <div className="text-[#6B6B78] text-base">{description}</div>
    </div>
  );
};

export default FeatureCard;
