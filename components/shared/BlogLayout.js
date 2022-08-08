import { SwiperSlide } from "swiper/react";

import BlogCard from "./BlogCard";
import SliderLayout from "./SliderLayout";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const BlogLayout = (props) => {
  const { data, type, children } = props;

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="hidden sm:grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 xl:mt-16 gap-x-6 gap-y-12">
        {data.map((item) => (
          <div key={item.id}>
            <BlogCard data={item} />
          </div>
        ))}
      </div>
      <div className="sm:hidden mt-10 xl:mt-20 card-slider pb-10">
        <SliderLayout size={1}>
          {data.map((item) => {
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

export default BlogLayout;
