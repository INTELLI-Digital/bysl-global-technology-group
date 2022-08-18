import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import SupplyChainSliderLayout from "./SupplyChainSliderLayout";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const SupplyChainSolutionsSolution = ({ type, children, data }) => {
  const SolutionSlide = ({ data }) => {
    const { problem, solution, solutionImg, solutionPoints } = data;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative pb-10 lg:pb-14">
        <div className="xl:mt-10">
          <p className="text-gray-800 font-semibold text-lg xl:text-xl 2xl:text-2xl mb-4">
            {problem}
          </p>
          <p className="text-gray-600 xl:text-lg mb-6">{solution}</p>
          <div className="grid grid-cols-1 xs:grid-cols-2 my-5 xl:mt-6 lg:mb-0 gap-y-2.5 lg:gap-x-2 xl:gap-x-0">
            {solutionPoints.map((item, i) => (
              <div key={i} className="flex items-start">
                <Image
                  src="/images/items_icon.svg"
                  alt=""
                  height={24}
                  width={24}
                />
                <p className="text-gray-300 text-sm xl:text-base ml-3 w-full">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center lg:text-start">
          <Image
            src={solutionImg}
            placeholder="blur"
            blurDataURL={solutionImg}
            height={313}
            width={537}
            className="!rounded-[20px]"
            alt=""
          />
        </div>
      </div>
    );
  };

  return (
    <div id="solutions" className="py-10 xl:py-16 relative">
      <SectionTitleType title={type} />
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="mt-10 max-w-[1093px] mx-auto supplySliderBtn">
        <SupplyChainSliderLayout size={1}>
          {data.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <SolutionSlide data={item} />
              </SwiperSlide>
            );
          })}
        </SupplyChainSliderLayout>
        <div className="flex justify-between lg:justify-start gap-5 absolute bottom-[4%] lg:bottom-[7%] w-full lg:w-max z-30">
          <p className="h-8 xl:h-10 w-8 xl:w-10 rounded-full text-blue-900 hover:bg-blue-500/10 transition duration-500 flex justify-center items-center border border-blue-900 hover:cursor-pointer solutionSlidePrev-btn ">
            <MdKeyboardArrowLeft className="text-2xl" />
          </p>
          <p className="h-8 xl:h-10 w-8 xl:w-10 rounded-full text-blue-900 hover:bg-blue-500/10 transition duration-500 flex justify-center items-center border border-blue-900 hover:cursor-pointer solutionSlideNext-btn ">
            <MdKeyboardArrowRight className="text-2xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainSolutionsSolution;
