import { bodyIntroImageLink } from "../../utils/constants";
import CTAButton from "./Button";
const BodyIntro = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-20">
        <div className="bg-[#F1F2F4] rounded-[6.25rem] px-4 py-2 text-base font-semibold	">
          An other way to manage time
        </div>
        <div className="text-[5rem] leading-[5rem] font-bold	text-[#2E2E2E]">
          Your new favorite
        </div>
        <div className="text-[5rem] leading-[5rem] font-bold	text-[#2E2E2E]">
          calendar 🗓️ app
        </div>
        <div className="text-[#6B6B78] text-xl my-8 w-[34rem]">
          Here you should explain how cool your app is. Remember, focus on the
          benefits for your users, not on the features.
        </div>
        <CTAButton active={false}>Get started, it's free</CTAButton>
        <div className="text-[#6B6B78] text-xs mt-1.5">
          Free 14 days trials,no credit card needed
        </div>
      </div>
      <div className="mt-8">
        <img src={bodyIntroImageLink} alt="Website" width={1200} height={730} />
      </div>
    </div>
  );
};

export default BodyIntro;
