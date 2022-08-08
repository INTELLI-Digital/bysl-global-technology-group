import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import BlogCard from "../shared/BlogCard";

const ServiceSlider = ({ size, data }) => {
  return (
    <Swiper
      slidesPerView={size}
      spaceBetween={20}
      slidesPerGroup={1}
      //   centeredSlides={true}
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
      {data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <BlogCard data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default ServiceSlider;
