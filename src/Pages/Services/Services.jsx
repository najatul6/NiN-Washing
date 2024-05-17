import { Helmet } from "react-helmet-async";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import { useEffect, useState } from "react";

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="">
      <Helmet>
        <title>NiN Washing | Services</title>
      </Helmet>
      {loading ? (
        <div className="skeleton w-full h-[100vh]"></div>
      ) : (
        <div>
          <PageTitleSection
            title="Our Services"
            subTitle="We pride ourselves on being able to handle all types of exterior cleaning projects for both residential and commercial properties."
          />
          <div className="p-2 md:p-10">
            <h2 className="text-deep-blue font-bold text-xl md:text-xl lg:text-3xl my-5">
              What We Offer
            </h2>
            <ServicesCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
