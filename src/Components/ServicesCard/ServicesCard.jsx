import { useLocation } from "react-router-dom";
import { servicesItem } from "../../Utils/servicesItem";

const ServicesCard = () => {
    const location = useLocation()
    console.log(location.pathname);
  return (
    <div className="grid grid-cols-3 gap-6">
        {location.pathname ==="/" ? servicesItem?.slice(0,3).map((service) => (
        <div
          key={service?.serviceTitle}
          className="card bg-deep-blue shadow-xl rounded-none"
        >
            <img src={service?.serviceImage} alt={service?.serviceTitle} className="h-96"/>
          <div className="card-body">
            <h2 className="card-title text-white-coffee capitalize font-bold">{service?.serviceTitle}</h2>
            <p className="text-white text-justify">{service?.serviceDescription}</p>
          </div>
        </div>
      )) :servicesItem?.map((service) => (
        <div
          key={service?.serviceTitle}
          className="card bg-deep-blue shadow-xl rounded-none"
        >
            <img src={service?.serviceImage} alt={service?.serviceTitle} className="h-96"/>
          <div className="card-body">
            <h2 className="card-title text-white-coffee capitalize font-bold">{service?.serviceTitle}</h2>
            <p className="text-white text-justify">{service?.serviceDescription}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ServicesCard;
