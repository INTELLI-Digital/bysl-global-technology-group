import Image from "next/image";

import {
  SectionTitleGradient,
  SectionTitleType,
  TextGradient,
} from "../shared/SharedTextgroups";

const Investments = () => {
  return (
    <div className="text-center py-16">
      <SectionTitleType title="Investments " />
      <div className="mx-4 lg:mx-12 2xl:mx-20 mb-6 lg:mb-12 2xl:mb-20">
        <SectionTitleGradient>
          Serve the world with exceptional
          <br className="hidden xs:block" />
          <TextGradient text=" products and services" />
        </SectionTitleGradient>
      </div>
      <div className="grid grid-cols-2 gap-4 3xl:gap-10">
        <div className="3xl:h-[610px] rounded-[20px] bg-white pb-8 xl:pb-16 flex flex-col justify-between">
          <Image
            src="/images/IT_platform.svg"
            alt=""
            height={373}
            width={640}
          />
          <p className="md:text-xl xl:text-3xl font-bold text-blue-900/75">
            IT platforms
          </p>
        </div>
        <p className="p-5 3xl:h-[610px] rounded-[20px] bg-gradient-to-tr from-[#D4ACFB] to-[#327EC4] text-white leading-6 md:leading-10 lg:leading-[50px] 2xl:leading-[76px] text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 3xl:text-[64px] font-semibold flex justify-center items-center">
          Marketplace platforms
        </p>
      </div>
    </div>
  );
};

export default Investments;
