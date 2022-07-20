import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const Slider = ({ size }) => {
  return (
    <Swiper
      slidesPerView={size}
      // spaceBetween={50}
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
          <SwiperSlide key={i}>
            <div className="h-[260px] xl:h-80 w-[120px] xxs:w-[150px] md:w-[120px] xl:w-[150px] rounded-[20px] overflow-hidden mx-auto drop-shadow-3xl relative mobileTechImg">
              <Image
                src={`/images/technologies/mobile/slider/mobileTechnologies_slider_${i}.svg`}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;
