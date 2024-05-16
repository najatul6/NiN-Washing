import { Helmet } from "react-helmet-async";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>NiN Washing | About</title>
      </Helmet>
      <PageTitleSection
        title="About Us"
        subTitle="We are a locally-owned and family-owned Wesley Chapel business fully insured and licensed."
      />
      <WhatWeDo />
    </div>
  );
};

export default About;
