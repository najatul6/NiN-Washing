import GetAQuote from "../GetAQutoe/GetAQuote";
import Appointment from "./Appointment/Appointment";

const AppointmentForm = () => {
  return (
    <div className="flex flex-col md:flex-row">
        <Appointment />
        <GetAQuote />
    </div>
  );
};

export default AppointmentForm;
