import BodyIntro from "../core/HomePage/BodyIntro";
import FAQs from "./FAQs";
import Feature from "./Feature";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

const Body = () => {
  return (
    <div>
      <BodyIntro />
      <Feature />
      <Testimonial />
      <Pricing />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Body;
