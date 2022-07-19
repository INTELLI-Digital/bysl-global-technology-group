import Link from "next/link";

import { aboutUsData } from "../../public/data/aboutUsData";
import { summaryData } from "../../public/data/summaryData";
import {
  SectionTitleGradient,
  SectionTitleType,
  TextGradient,
} from "../shared/SharedTextgroups";

const AboutUs = () => {
  return (
    <div className="text-center pb-10 pt-0 xs:pt-5 sm:pt-10 lg:py-16">
      <SectionTitleType title="About Us" />
      <div className="mx-4 lg:mx-12 2xl:mx-20 mb-6 lg:mb-12 2xl:mb-20">
        <SectionTitleGradient>
          Serve the world with exceptional
          <br className="hidden xs:block" />
          <TextGradient text=" products and services" />
        </SectionTitleGradient>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 3xl:gap-6">
        <div className="col-span-2 row-span-2 py-4 2xl:py-10 bg-gradient-to-r from-blue-900 to-blue-700 max-h-max p-2 2xl:p-8 text-center text-white rounded-lg lg:rounded-2xl 2xl:rounded-[20px]">
          <p className="break-words leading-10 text-lg md:text-2xl 3xl:text-4xl font-bold">
            EXPLORE. INNOVATE. INVEST.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between 3xl:mt-6 pt-0 3xl:pt-5">
            {summaryData.map(({ id, number, title }) => {
              return (
                <div key={id} className="w-1/2 my-3 3xl:my-5">
                  <p className="text-xl 3xl:text-[40px] font-bold">{number}</p>
                  <p className="text-base 3xl:text-2xl mt-1 3xl:mt-4">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {aboutUsData?.map(({ id, path, title, description }) => {
          return (
            <Link passHref key={id} href={path}>
              <div
                key={id}
                className="bg-white h-full rounded-[20px] border border-gray-200/75 hover:cursor-pointer"
              >
                <p
                  className={`pb-0 md:pb-2 3xl:pb-6 pt-3 3xl:pt-8 leading-10 text-lg md:text-2xl 3xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                    (id === 0 && "from-[#4363D6] to-[#0C58A6]") ||
                    (id === 1 && "from-[#4361EE] to-[#60EFFF]") ||
                    (id === 2 && "from-[#3A12A9] to-[#425CE9]") ||
                    (id === 3 && "from-[#72B5E8] to-[#214997]")
                  }`}
                >
                  {title}
                </p>
                <p className="pb-3 3xl:pb-5 px-3 3xl:px-4 text-xs md:text-base 2xl:text-lg leading-5 text-gray-300">
                  {description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
