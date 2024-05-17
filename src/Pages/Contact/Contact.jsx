import { Helmet } from "react-helmet-async";
import PageTitleSection from "../../Components/Shared/PageTitleSection/PageTitleSection";
import AppointmentForm from "../../Components/ApopointmentForm/AppointmentForm";
import CallNow from "../../Components/CallNow/CallNow";
import { useEffect, useState } from "react";

const Contact = () => {
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
        <title>NiN Washing | Contact</title>
      </Helmet>

      {loading ? (
        <div className="skeleton w-full h-[100vh]"></div>
      ) : (
        <div>
          <PageTitleSection
            title="Contact Us"
            subTitle="Need to book an appointment or an emergency help? Get in touch with us now and our representative will help you soon."
          />
          <div className="my-10 shadow-xl">
            <AppointmentForm />
            <CallNow />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;


