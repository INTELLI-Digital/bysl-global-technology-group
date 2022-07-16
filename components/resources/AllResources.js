import { SwiperSlide } from "swiper/react";
import { resourcesData } from "../../public/data/resourcesData";
import BlogCard from "../shared/BlogCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";
import SliderLayout from "../shared/SliderLayout";

const AllResources = () => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Resources" />
      <TechnologiesSectionTitle>
        Proud projects that <TextGradient text="make us stand out" />
      </TechnologiesSectionTitle>
      <div
        className={`hidden sm:grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 mt-10 xl:mt-16 gap-6`}
      >
        {resourcesData.map((item) => (
          <div key={item.id}>
            <BlogCard data={item} />
          </div>
        ))}
      </div>
      <div className="sm:hidden mt-10 xl:mt-20 card-slider pb-10">
        <SliderLayout size={1}>
          {resourcesData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <BlogCard data={item} />
              </SwiperSlide>
            );
          })}
        </SliderLayout>
      </div>
    </div>
  );
};

export default AllResources;
