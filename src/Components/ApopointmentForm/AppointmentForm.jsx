import GetAQuote from "../GetAQutoe/GetAQuote";
import Appointment from "./Appointment/Appointment";

const AppointmentForm = () => {
    return (
        <div className=" border-red-600 border-2 flex justify-center items-center">
            <div className="border-blue-700 border-2">
            <Appointment/>
            </div>
            <div className="w-full h-full border-green-700 border-2">
            <GetAQuote/>
            </div>
        </div>
    );
};

export default AppointmentForm;