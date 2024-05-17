// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import {  EffectCards } from "swiper/modules";
import { slideImages } from "../../Utils/slideImage";

const ImageCard = () => {
  return (
    <div className="p-2 overflow-hidden">
      <Swiper
        // centeredSlides={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper p-2 md:p-10"
      >
        {slideImages?.map((image) => (
          <SwiperSlide key={image?.id}>
            <img src={image?.image} alt="Banner is here" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCard;
