import { SwiperSlide } from "swiper/react";

import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";
import SliderLayout from "../shared/SliderLayout";

const ServiceBlogs = () => {
  const BlogCard = ({ i }) => {
    return (
      <div className="bg-white rounded-md shadow-sm shadow-gray-200/50 max-w-sm lg:max-w-lg mx-auto">
        <img
          src={`/images/services/home/resources/services_resource_${i}.svg`}
          alt=""
          className="rounded-t-md w-full h-52 object-cover"
        />
        <div className="px-5 pt-10 pb-6">
          <p className="text-xs font-medium">
            <TextGradient text="#E-commerce Solution" />
          </p>
          <p className="text-xl font-bold text-gray-800 pt-1 pb-4">
            Lorem ipsum dolor sit
          </p>
          <p className="text-sm text-gray-400 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            risus nibh magnis habitant lectus aliquam amet, enim.
          </p>
        </div>
        <div className="bg-gradient-from-white h-[50px] border-t-2 hover:border-transparent hover:cursor-pointer flex justify-center items-center group">
          <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r group-hover:from-white from-blue-900 group-hover:to-white to-blue-700 ">
            View Case Study
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Blogs" />
      <TechnologiesSectionTitle>
        Read Our
        <TextGradient text=" Latest " />
        Tips & Tricks
      </TechnologiesSectionTitle>
      <div
        className={`hidden sm:grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 mt-10 xl:mt-16 gap-6`}
      >
        {[...Array(4)].map((item, i) => (
          <div key={i}>
            <BlogCard i={i} />
          </div>
        ))}
      </div>
      <div className="sm:hidden mt-10 xl:mt-20 card-slider pb-10">
        <SliderLayout size={1}>
          {[...Array(4)].map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <BlogCard i={i} />
              </SwiperSlide>
            );
          })}
        </SliderLayout>
      </div>
    </div>
  );
};

export default ServiceBlogs;
