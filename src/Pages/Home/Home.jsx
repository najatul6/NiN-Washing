import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BannerTxt from "../../Components/Banner/BannerTxt";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import ShapeImage from "../../Components/ShapeImage/ShapeImage";
import ShapeDetails from "../../Components/ShapeImage/ShapeDetails";
import WhyChoseUs from "../../Components/WhyChoseUs/WhyChoseUs";
import Button from "../../Components/Shared/Button/Button";
import FrequentlyQuestion from "../../Components/FrequentlyQuestion/FrequentlyQuestion";
import { useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading]=useState(false)
  return (
    <div className="">
      {isLoading && <div className="w-full h-full flex justify-center items-center z-50"><span className="loading loading-ring loading-lg"></span></div>}
      <Helmet>
        <title>NiN Washing | Home</title>
      </Helmet>

      {/* Carousal here */}
      <section className="relative">
        {/* Banner Here  */}
        <div>
          <Banner />
          <div
            className="absolute z-10 top-0 bottom-0 right-0 left-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%,  rgba(0,212,255,0.025647759103641476) 100%)",
            }}
          ></div>
        </div>

        {/* Button Text Here  */}
        <div className="absolute top-0 bottom-0 md:left-10 z-20 p-2 md:w-1/3 flex flex-col justify-center items-start">
          <BannerTxt />
        </div>
      </section>

      {/* What we do  */}
      <section>
        <WhatWeDo />
      </section>

      {/* Service Section  */}
      <section className="p-5 flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl capitalize font-bold text-deep-blue">
            Our Services
          </h1>
          <hr className="border-2 rounded-full border-deep-blue w-full" />
        </div>
        <ServicesCard />
        <Button
          btnIcon="&raquo;"
          url="/services"
          btnText="View All Services"
          extraClass="bg-deep-blue border-2 text-white py-2 px-3 hover:text-white-coffee hover:bg-transparent hover:border-white-coffee "
        />
      </section>

      {/* Best Deal section  */}
      <section className="flex md:flex-row flex-col-reverse justify-center items-center gap-6 p-2 md:p-5">
        <ShapeDetails />
        <ShapeImage />
      </section>

      {/* Why Choose Us Section  */}
      <section className="py-2">
        <WhyChoseUs />
      </section>

      {/* Frequently Questions Section */}
      <section className="p-2 md:p-5">
        <FrequentlyQuestion />
      </section>
    </div>
  );
};

export default Home;
