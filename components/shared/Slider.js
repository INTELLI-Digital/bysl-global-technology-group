import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({ size }) => {
  return (
    <Swiper
      slidesPerView={size}
      spaceBetween={50}
      slidesPerGroup={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mobileTech"
    >
      {[...Array(5)].map((item, i) => {
        return (
          <SwiperSlide key={i} className="">
            <img
              src={`/images/technologies/mobile/slider/mobileTechnologies_slider_${i}.svg`}
              alt=""
              className="h-[260px] xl:h-80 w-[220px] mx-auto drop-shadow-3xl"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;
