import { BiSolidPhoneCall } from "react-icons/bi";
import image from "../../assets/Slider/1.jpg";
import Button from "../Shared/Button/Button";

const CallNow = () => {
  return (
    <div>
      <div>
        <img src={image} alt="Our cleaning experts are only a call away!" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Our cleaning experts are only a call away!</h2>
        <Button url="https://www.youtube.com" afterIcn={<BiSolidPhoneCall/>} btnText="Call Now" extraClass="bg-deep-blue py-3 px-3 text-white border-2 hover:text-white-coffee hover:bg-transparent hover:border-white-coffee"/>
      </div>
    </div>
  );
};

export default CallNow;
