import { FaArrowRight } from "react-icons/fa6";
import ImageCard from "../ImageCard/ImageCard";
import Button from "../Shared/Button/Button";
import {  useLocation } from "react-router-dom";

const WhatWeDo = () => {
  const location = useLocation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center p-2 md:p-5">
      <div className="px-2 md:p-5">
        <ImageCard />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-deep-blue">
            What We Do
          </h1>
          <hr className="border-2 border-deep-blue rounded-full" />
        </div>
        <div className="space-y-5 text-wrap">
          <h2 className="text-xl md:text-2xl font-bold">
            Expert Residential & Commercial Pressure Washing
          </h2>
          <p className="text-left md:text-justify">
            Residential Pressure Washing is a service that The Pressure is On Us
            offers to all residents in the Tampa Bay area. We can renew and
            revitalize most surfaces found around your home. Contact us today to
            discuss how we can assist with your home pressure washing needs.
          </p>
          <div>
            {location.pathname === "/about" || (
                <Button
                url="/about"
                  btnText="Learn More"
                  btnIcon={<FaArrowRight />}
                  extraClass="bg-deep-blue hover:bg-white hover:border-2 border-2 hover:border-deep-blue text-white hover:text-deep-blue p-2"
                />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
