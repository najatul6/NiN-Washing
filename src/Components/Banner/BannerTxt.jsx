import { Link } from "react-router-dom";
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
      <Link to="/">
      <Button
        btnText="Get A Free Quote"
        btnIcon={<FaUpRightFromSquare />}
        extraClass="bg-white text-deep-blue hover:text-white-coffee hover:bg-deep-blue p-3 shadow-none rounded-xl duration-500"
        />
        </Link>
    </div>
  );
};

export default BannerTxt;
