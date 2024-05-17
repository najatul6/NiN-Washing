import { Link } from "react-router-dom";
import Button from "../../Shared/Button/Button";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Appointment = () => {
  return (
    <div className="bg-deep-blue text-white p-5 w-full">
      <div className="w-full">
        <h4 className="text-lg font-bold">Get Started</h4>
        <h2 className="text-2xl font-bold">Book Your Appointment</h2>
        <p className="text-white-coffee">
          Ready to get started? Call us today or fill out our form for a fast,
          no hassle, no pressure cleaning quote.
        </p>

        {/* Social Links  */}
        <div className="flex justify-center items-center gap-6">
          <Link to="https://www.facebook.com/najatul6/" target="_blank">
            <Button
              extraClass="bg-white-coffee border-2 hover:bg-transparent p-2 rounded-xl text-white"
              afterIcn={<FaFacebook />}
            />{" "}
          </Link>
          <Link to="https://twitter.com/MNajatul" target="_blank">
            <Button
              extraClass="bg-white-coffee border-2 hover:bg-transparent p-2 rounded-xl text-white"
              afterIcn={<AiFillTwitterCircle />}
            />{" "}
          </Link>
          <Link to="https://www.instagram.com/najatulislam1/" target="_blank">
            <Button
              extraClass="bg-white-coffee border-2 hover:bg-transparent p-2 rounded-xl text-white"
              afterIcn={<RiInstagramFill />}
            />{" "}
          </Link>
          <Link
            to="https://www.youtube.com/@mdnajatulislam8347/featured"
            target="_blank"
          >
            <Button
              extraClass="bg-white-coffee border-2 hover:bg-transparent p-2 rounded-xl text-white"
              afterIcn={<TiSocialYoutubeCircular />}
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
