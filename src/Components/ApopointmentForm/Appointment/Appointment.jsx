import Button from "../../Shared/Button/Button";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Appointment = () => {
  return (
    <div className="bg-deep-blue text-white px-2 py-5 md:p-5 w-full flex flex-col justify-center gap-4">
      <h4 className="text-lg font-bold">Get Started</h4>
      <h2 className="text-2xl font-bold">Book Your Appointment</h2>
      <p className="text-white-coffee">
        Ready to get started? Call us today or fill out our form for a fast, no
        hassle, no pressure cleaning quote.
      </p>

      {/* Social Links  */}
      <div className="flex justify-start items-center gap-6">
        <Button
          url="https://www.facebook.com/najatul6/"
          target="_blank"
          extraClass=" border-2 hover:bg-transparent hover:text-white-coffee hover:border-white-coffee p-2 rounded-xl text-white text-2xl md:text-3xl"
          afterIcn={<FaFacebook />}
        />
        <Button
          url="https://twitter.com/MNajatul"
          target="_blank"
          extraClass=" border-2 hover:bg-transparent hover:text-white-coffee hover:border-white-coffee p-2 rounded-xl text-white text-2xl md:text-3xl"
          afterIcn={<AiFillTwitterCircle />}
        />

        <Button
          target="_blank"
          url="https://www.instagram.com/najatulislam1/"
          extraClass=" border-2 hover:bg-transparent hover:text-white-coffee hover:border-white-coffee p-2 rounded-xl text-white text-2xl md:text-3xl"
          afterIcn={<RiInstagramFill />}
        />

        <Button
          target="_blank"
          url="https://www.youtube.com/@mdnajatulislam8347/featured"
          extraClass=" border-2 hover:bg-transparent hover:text-white-coffee hover:border-white-coffee p-2 rounded-xl text-white text-2xl md:text-3xl"
          afterIcn={<TiSocialYoutubeCircular />}
        />
      </div>
    </div>
  );
};

export default Appointment;
