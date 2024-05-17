import Button from "../Shared/Button/Button";
import { FaPhoneAlt } from "react-icons/fa";
import backgroundImage from "../../assets/Slider/1.jpg"

const WhyChoseUs = () => {
  return (
    <div className="w-full bg-cover bg-fixed px-5 py-10 md:p-36" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col gap-6 justify-center items-center bg-deep-blue rounded-2xl py-5 px-7 md:py-20 md:px-10">
        <h2 className="text-base md:text-xl lg:text-3xl font-bold text-white-coffee">
          Why Choose Us?
        </h2>
        <p className="text-center font-bold text-white text-xs md:text-base">
          When you hire us for your exterior cleaning needs you are getting a
          professional, dependable and insured company that is committed to
          getting the best results possible for our customers.
        </p>
        <Button
          afterIcn={<FaPhoneAlt />}
          btnText="contact us"
          extraClass="bg-white-coffee text-white hover:bg-transparent border-2 hover:border-white py-2 px-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default WhyChoseUs;
