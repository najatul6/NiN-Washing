import Button from "../Shared/Button/Button";
import { FaUpRightFromSquare } from "react-icons/fa6";

const BannerTxt = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white-coffee">
        Quality Pressure Washing At An Affordable Cost!
      </h1>
      <p className="text-xs md:text-lg text-justify text-white">
        First impressions matter and how your home looks on the outside is how
        you will feel on the inside. The Pressure Is On Us will give you that
        peace of mind.
      </p>
      <Button
        btnText="Get A Free Quote"
        btnIcon={<FaUpRightFromSquare />}
        url="/"
        extraClass="bg-white text-deep-blue border-2 hover:border-white-coffee hover:bg-transparent hover:text-white-coffee  p-3 shadow-none rounded-xl duration-500"
        />
    </div>
  );
};

export default BannerTxt;
