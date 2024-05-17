import { Helmet } from "react-helmet-async";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";

const Services = () => {
  return (
    <div className="">
      <Helmet>
        <title>NiN Washing | Services</title>
      </Helmet>
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
  );
};

export default Services;
