import { BiSolidPhoneCall } from "react-icons/bi";


const CallNowButton = ({ phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`}>
      <button className="bg-deep-blue py-3 px-3 text-white border-2 hover:text-white-coffee hover:bg-transparent flex justify-center gap-2 items-center text-lg uppercase font-bold hover:border-white-coffee">
      <BiSolidPhoneCall />  Call Now
      </button>
    </a>
  );
};

export default CallNowButton;
