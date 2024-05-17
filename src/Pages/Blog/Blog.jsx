import { Helmet } from "react-helmet-async";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>NiN Washing | Blog</title>
      </Helmet>
      <PageTitleSection
        title="Contact Us"
        subTitle="Need to book an appointment or an emergency help? Get in touch with us now and our representative will help you soon."
      />
    </div>
  );
};

export default Blog;
