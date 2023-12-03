import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import { MiltonLogo } from "../assets/Logo";
const Footer = () => {
  return (
    <footer className="bg-[#F1F2F4] text-[#6B6B78] py-16">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row">
            <MiltonLogo className="h-6" />
            <h3 className="text-[#2D2D2D] text-lg font-semibold">Milton</h3>
          </div>
          <p>A short text explaining why my startup is so cool</p>
          <p>© My super start-up</p>
          <div className="flex gap-4">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg text-[#2D2D2D] font-semibold">Products</h3>
          <a href="#" className="hover:text-gray-300">
            Features
          </a>
          <a href="#" className="hover:text-gray-300">
            Testimonials
          </a>
          <a href="#" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-300">
            FAQs
          </a>
          {/* Add more links as needed */}
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className=" text-[#2D2D2D] text-lg font-semibold">Resources</h3>
          <a href="#" className="hover:text-gray-300">
            Change log
          </a>
          <a href="#" className="hover:text-gray-300">
            Help center
          </a>
          <a href="#" className="hover:text-gray-300">
            Blog
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
          {/* Add more links as needed */}
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-[#2D2D2D] text-lg font-semibold">Others</h3>
          <a href="#" className="hover:text-gray-300">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms
          </a>
          <a href="#" className="hover:text-gray-300">
            Affiliation
          </a>
          <a href="#" className="hover:text-gray-300">
            Press
          </a>
          {/* Add more links as needed */}
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 max-w-[20rem]">
          <h3 className=" text-[#2D2D2D] text-lg font-semibold">
            From the blog
          </h3>
          <p>
            Mastering Your Schedule: Top Time Management Techniques for
            Balancing Work and Life
          </p>
          <p>Organizing Your Calendar for Enhanced Productivity and Focus</p>
          <p>
            The Power of Prioritization: Effective Strategies for Managing Your
            Time and Tasks
          </p>
          <p>
            Maximizing Your Minutes: Essential Tips for Streamlining Your Daily
            Routine and Calendar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
