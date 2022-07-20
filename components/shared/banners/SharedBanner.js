import Image from "next/image";

import { getPath } from "../../../utils/paths";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const SectionBanner = ({ data }) => {
  const { title, subTitle1, subTitle2 } = data;

  return (
    <div className="flex flex-col md:flex-row-reverse justify-between md:items-center py-10 xl:py-16 gap-4 2xl:gap-6">
      <div
        className={`w-4/5 md:w-1/2 mx-auto flex justify-end ${
          getPath("/culture") && "px-4 2xl:px-12"
        }`}
      >
        <Image
          src={`/images/banners/${title}_banner.svg`}
          height={283}
          width={452}
          alt=""
        />
      </div>
      <div className="md:w-3/5 lg:w-1/2">
        <p className="text-gray-800 text-lg md:text-2xl lg:text-4xl xl:text-5xl 3xl:text-[64px] font-bold uppercase mb-1 md:mb-2 lg:mb-3 3xl:mb-5">
          {title}
        </p>
        <p className="text-gray-600 leading-5 text-xs sm:text-sm 2xl:text-base text-justify">
          <span>{subTitle1}</span>
          {subTitle2 && (
            <span className="mt-2 2xl:mt-3 block">{subTitle2}</span>
          )}
        </p>
      </div>
    </div>
  );
};

const TextBanner = (props) => {
  const { children, data, reversed } = props;
  const { type, subTitle, img } = data;

  return (
    <div
      className={`py-10 xl:py-16 lg:flex justify-between gap-6 w-full ${
        reversed && "flex-row-reverse"
      }`}
    >
      <div className={`lg:w-1/2 3xl:pt-10 pb-10 lg:pb-0`}>
        {type && <SectionTitleType title={type} start={true} />}
        {children && (
          <TechnologiesSectionTitle start={true}>
            {children}
          </TechnologiesSectionTitle>
        )}
        <p className="mt-5 text-gray-300 leading-5 text-sm md:text-base text-center lg:text-start lg:w-11/12">
          {subTitle}
        </p>
      </div>
      <div className={`flex justify-center lg:w-1/2 mx-auto`}>
        <Image src={img} height={379} width={648} alt="" />
      </div>
    </div>
  );
};

export { SectionBanner, TextBanner };
