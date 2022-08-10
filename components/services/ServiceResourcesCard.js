import { SwiperSlide } from "swiper/react";
import BlogCard from "../shared/BlogCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../shared/SharedTextgroups";
import SliderLayout from "../shared/SliderLayout";
import ServiceSlider from "./ServiceSlider";

const ServiceResourcesCard = (props) => {
  const { data, type, children } = props;

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="mt-5 lg:mt-10 card-slider service-blog-slider relative">
        <div className="sm:hidden">
          <ServiceSlider size={1} data={data} />
        </div>
        <div className="hidden sm:block lg:hidden">
          <ServiceSlider size={2} data={data} />
        </div>
        <div className="hidden lg:block xl:hidden">
          <ServiceSlider size={3} data={data} />
        </div>
        <div className="hidden xl:block">
          <ServiceSlider size={4} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ServiceResourcesCard;
