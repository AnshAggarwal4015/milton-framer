import { headerMenuItems } from "../utils/constants";
import { MiltonLogo } from "../assets/Logo";
import CTAButton from "../core/HomePage/Button";

const Header = () => {
  return (
    <div className="font-plus-jakarta-sans flex h-20 items-center justify-center border-b-[1px] border-b-blue-300">
      <div
        id="header"
        className="flex w-11/12 max-w-maxContent items-center justify-between h-20"
      >
        <div className="flex">
          <MiltonLogo className="h-6" />
          <div className="h-6 font-bold">Milton</div>
        </div>
        <nav className="flex items-center justify-center gap-x-10">
          {headerMenuItems.map((item) => {
            return (
              <ul
                className="text-[#6B6B78] text-base font-bold leading-8"
                key={item.id}
              >
                {item.name}
              </ul>
            );
          })}
        </nav>
        <div className="flex gap-x-2">
          <CTAButton active={true}>Log in</CTAButton>
          <CTAButton active={false}>Get started</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
