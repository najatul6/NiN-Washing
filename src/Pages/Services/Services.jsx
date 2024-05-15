import { Helmet } from "react-helmet-async";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";

const Services = () => {
    return (
        <div className="p-5">
            <Helmet>
                <title>NiN Washing | Services</title>
            </Helmet>
            <ServicesCard/>
        </div>
    );
};

export default Services;