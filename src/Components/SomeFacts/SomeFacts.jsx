import { MdOutlineDeselect } from "react-icons/md";

const SomeFacts = () => {
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-10 gap-5 md:gap-10 justify-between items-center">
      <div className="text-deep-blue flex-1 p-5">
        <h2 className="font-bold text-xl">We Are Reliable & Affordable</h2>
        <p className="text-wrap text-justify">
          Not all pressure washing providers are the same and there is a huge
          difference in results when you compare results from a DIY pressure
          washing service with the results of a true professional pressure
          washing company like The Pressure Is On Us. When you hire us for your
          exterior cleaning needs you are getting a professional, dependable and
          insured company that is committed to getting the best results possible
          for our customers.
        </p>
      </div>
      <div className="text-deep-blue flex-1 p-5">
        <h2 className="text-xl font-bold text-deep-blue">Some Facts</h2>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          Insured Up To $2 Million
        </p>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          Commercial Grade Equipment
        </p>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          Expert Cleaning Detergent Knowledge
        </p>
        <p className="flex gap-3 justify-start items-center font-bold">
          <MdOutlineDeselect />
          High & Low Pressure Washing Capabilities
        </p>
      </div>
    </div>
  );
};

export default SomeFacts;
