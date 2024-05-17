// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay  } from "swiper/modules";
import { slideImages } from "../../Utils/slideImage";

const Banner = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slideImages?.map((image) => (
          <SwiperSlide key={image?.id}>
            <img
              src={image?.image}
              alt="Banner is here"
              className="w-full object-cover h-[250px] md:h-[400px] lg:h-[600px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
