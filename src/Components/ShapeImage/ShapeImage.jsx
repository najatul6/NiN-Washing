import image from "../../assets/CardImage/p1.jpg";

const ShapeImage = () => {
    
  return (
       <div className="relative">
        <img 
          src={image}
          alt="Your Alt Text" 
          style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}
          className="w-full h-auto"
        />
      </div>
  );
};



export default ShapeImage;
