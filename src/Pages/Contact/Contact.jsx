import { Helmet } from "react-helmet-async";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import AppointmentForm from "../../Components/ApopointmentForm/AppointmentForm";
import CallNow from "../../Components/CallNow/CallNow";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>NiN Washing | Contact</title>
      </Helmet>
      <PageTitleSection
        title="Contact Us"
        subTitle="Need to book an appointment or an emergency help? Get in touch with us now and our representative will help you soon."
      />
      <div className="my-5 shadow-xl">
        <AppointmentForm/>
        <CallNow/>
      </div>
    </div>
  );
};

export default Contact;
