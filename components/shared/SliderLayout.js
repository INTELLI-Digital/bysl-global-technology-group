import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const SliderLayout = ({ size, children }) => {
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
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
export default SliderLayout;
