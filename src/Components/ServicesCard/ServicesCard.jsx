import { useLocation } from "react-router-dom";
import { servicesItem } from "../../Utils/servicesItem";

const Services = () => {
    const location = useLocation()
    console.log(location.pathname);
  return (
    <div className="grid grid-cols-3 gap-6">
        {location.pathname ==="/" ? servicesItem?.slice(0,3).map((service) => (
        <div
          key={service?.serviceTitle}
          className="card bg-base-100 shadow-xl rounded-none"
        >
            <img src={service?.serviceImage} alt={service?.serviceTitle} />
          <div className="card-body">
            <h2 className="card-title">{service?.serviceTitle}</h2>
            <p>{service?.serviceDescription}</p>
          </div>
        </div>
      )) :servicesItem?.map((service) => (
        <div
          key={service?.serviceTitle}
          className="card bg-base-100 shadow-xl rounded-none"
        >
            <img src={service?.serviceImage} alt={service?.serviceTitle} />
          <div className="card-body">
            <h2 className="card-title">{service?.serviceTitle}</h2>
            <p>{service?.serviceDescription}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Services;
