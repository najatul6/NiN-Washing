import image from "../../assets/Slider/1.jpg";
import Button from "../Shared/Button/Button";

const CallNow = () => {
  return (
    <div>
      <div>
        <img src={image} alt="Our cleaning experts are only a call away!" />
      </div>
      <div>
        <h2>Our cleaning experts are only a call away!</h2>
        <Button url="https://www.youtube.com" btnText="Call Now" extraClass="bg-deep-blue text-white border-2 hover:text-white-coffee hover:bg-transparent hover:border-white-coffee"/>
      </div>
    </div>
  );
};

export default CallNow;
