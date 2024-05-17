import { Helmet } from "react-helmet-async";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import SomeFacts from "../../Components/SomeFacts/SomeFacts";
import { useEffect, useState } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <Helmet>
        <title>NiN Washing | About</title>
      </Helmet>
      {loading ? (
        <div className="skeleton w-full h-[100vh]"></div>
      ) : (
        <div>
          <PageTitleSection
            title="About Us"
            subTitle="We are a locally-owned and family-owned Wesley Chapel business fully insured and licensed."
          />
          <WhatWeDo />
          <SomeFacts />
        </div>
      )}
    </div>
  );
};

export default About;
