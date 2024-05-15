// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";
import { slideImages } from "../../Utils/slideImage";

const ImageCard = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        loop={true}
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        className="mySwiper p-2 md:p-10"
      >
        {slideImages?.map((image) => (
          <SwiperSlide key={image?.id}>
            <img
              src={image?.image}
              alt="Banner is here"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageCard;
