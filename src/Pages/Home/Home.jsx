import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BannerTxt from "../../Components/Banner/BannerTxt";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";

const Home = () => {
  return (
    <div className="">
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
            <WhatWeDo/>
      </section>

      {/* Service Section  */}
      <section className="p-5">
        <ServicesCard/>
      </section>
    </div>
  );
};

export default Home;
