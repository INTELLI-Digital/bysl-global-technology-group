import Image from "next/image";

import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const PrimaryBanner = ({ title, sub, img, children }) => {
  return (
    <div className="py-10 xl:py-16 md:flex justify-between gap-6 max-h-max">
      <div className="md:w-[55%] mb-10 md:my-0 md:pt-10">
        <div className="text-center md:text-start">
          <p className="text-sm md:text-base xl:text-lg font-bold">
            <TextGradient text={title} />
          </p>
          <SectionTitleGradient>{children}</SectionTitleGradient>
          <p className="2xl:w-3/4 mt-5 text-gray-300 leading-5 text-sm md:text-base">
            {sub}
          </p>
        </div>
      </div>
      <div className="md:w-[45%]">
        <div className="h-[40vh] lg:h-[50vh] w-full relative">
          <Image
            src={`/images/banners/${img}_banner.svg`}
            layout="fill"
            priority
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryBanner;
