import CTAButton from "./Button";
import checkmark from "../../assets/checkmark.png";

const PricingCard = ({ props }) => {
  const {
    name,
    price,
    billingFrequency,
    description,
    trial,
    features,
    featureHeading,
  } = props;
  return (
    <div className="flex flex-col gap-y-4 bg-[#FFFF] p-8">
      <div
        className={`bg-[#FEE9CB] text-[#333333] px-6 py-3 rounded-[6.25rem] w-fit font-semibold text-base`}
      >
        {name}
      </div>
      <div className="text-[#6B6B78] font-medium pb-4">{description}</div>
      <div className="text-[#000000] text-6xl font-bold tracking-tighter">
        {price.split("/")[0]}
        <span className="text-[#79797A] tracking-tighter text-base">
          /{price.split("/")[1]}
        </span>
      </div>
      <div className="text-base font-normal tracking-tighter text-[#333333]">
        {billingFrequency}
      </div>
      <div className="flex flex-col items-center justify-center">
        <CTAButton active={false}> Get Started </CTAButton>
        <div className="text-xs	text-[#000000] mt-[7px]">{trial}</div>
      </div>
      <div className="mt-12">
        <div className="font-medium	">{featureHeading}</div>
        <div>
          {features.map((feature) => {
            return (
              <div className="flex items-center gap-x-2 mt-4">
                <div className="w-[20px] h-[20px]">
                  <img src={checkmark} alt="Check" />
                </div>
                <div className="text-[#6B6B78]">{feature}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
