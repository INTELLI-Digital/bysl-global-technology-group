import Image from "next/image";
import { Link as Scroll } from "react-scroll";

import {
  SectionTitleGradient,
  TextGradient,
} from "../../shared/SharedTextgroups";

const MarketingBanner = () => {
  return (
    <div className="marketing-box lg:items-center pt-6 md:pt-0 md:flex justify-between gap-6">
      <div className="md:w-4/5 2xl:w-3/5 mb-6 md:mt-10 lg:py-10 xl:py-16">
        <div className="text-center md:text-start">
          <p className="text-sm sm:text-base lg:text-lg font-bold mb-2">
            <TextGradient text="Marketing" />
          </p>
          <SectionTitleGradient>
            Innovation Solutions forward your business
          </SectionTitleGradient>
          <p className="mt-4 text-gray-500 text-sm sm:text-base xl:text-xl 2xl:w-4/5 mx-4 md:mx-0">
            Coordinate applications on top of existing frameworks that can
            adjust and scale to your business needs. Coordinate applications on
            top of existing frameworks that can adjust and scale to your
            business needs.
          </p>
        </div>
        <div className="w-full mt-6 lg:mt-8 xl:mt-10 flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center">
          <Scroll smooth={true} offset={-80} duration={500} to="overview">
            <div className="h-max text-center rounded-md text-sm font-medium py-2 xl:py-3 w-52 md:w-[137px] hover:cursor-pointer text-white bg-gradient-to-r hover:from-blue-700 hover:to-blue-700  from-blue-900 to-blue-700">
              Overview
            </div>
          </Scroll>
          <Scroll
            smooth={true}
            offset={-80}
            duration={500}
            to="problems&solutions"
          >
            <div className="h-max text-center rounded-md text-sm font-medium py-2 xl:py-3 w-52 hover:cursor-pointer bg-white scrollBtn">
              <TextGradient text="Problems & Solutions" />
            </div>
          </Scroll>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/images/banners/marketing_solutions_banner.svg"
          placeholder="blur"
          blurDataURL="/images/banners/marketing_solutions_banner.svg"
          objectFit="contain"
          height={616}
          width={748}
          priority
          alt=""
        />
      </div>
      <div className="md:hidden text-center">
        <Image
          src="/images/banners/marketing_solutions_banner_sm.svg"
          placeholder="blur"
          blurDataURL="/images/banners/marketing_solutions_banner_sm.svg"
          objectFit="contain"
          height={275}
          width={328}
          priority
          alt=""
        />
      </div>
    </div>
  );
};

export default MarketingBanner;
