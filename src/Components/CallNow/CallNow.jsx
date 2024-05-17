import image from "../../assets/Slider/1.jpg";
import CallNowButton from "../Shared/CallNowButton/CallNowButton";

const CallNow = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <img src={image} alt="Our cleaning experts are only a call away!" />
      </div>
      <div className="flex flex-col justify-center items-center bg-deep-blue flex-1 gap-6 px-2 py-5 md:p-0">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          Our cleaning experts are only a call away!
        </h2>
        <CallNowButton phoneNumber="+8801773827414" />
      </div>
    </div>
  );
};

export default CallNow;
