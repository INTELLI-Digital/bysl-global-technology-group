import { getPath } from "../../../utils/paths";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const SectionBanner = ({ data }) => {
  const { title, subTitle1, subTitle2 } = data;

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center py-10 xl:py-16 gap-4 2xl:gap-6">
      <div className="md:w-3/5 lg:w-1/2 order-2 md:order-1">
        <p className="text-gray-800 2xl:leading-[76px] text-lg md:text-2xl lg:text-4xl xl:text-5xl 3xl:text-[64px] font-bold uppercase mb-1 md:mb-2 lg:mb-3 3xl:mb-5">
          {title}
        </p>
        <p className="text-gray-600 leading-5 text-xs sm:text-sm 2xl:text-base text-justify">
          <span >{subTitle1}</span>
          {subTitle2 && (
            <span className="mt-2 2xl:mt-3 block">{subTitle2}</span>
          )}
        </p>
      </div>
      <img
        src={`/images/banners/${title}_banner.svg`}
        alt=""
        className={`h-48 lg:h-52 2xl:h-64 3xl:h-72 w-4/5 sm:w-1/2 mx-auto order-1 md:order-2 ${getPath("/culture") && "px-4 2xl:px-12"}`}
      />
    </div>
  );
};

const TextBanner = (props) => {
  const { children, data, reversed } = props;
  const { type, subTitle, img } = data;

  return (
    <div className="py-10 xl:py-16 lg:flex justify-between gap-6">
      <div
        className={`lg:w-1/2 3xl:pt-10 pb-10 lg:pb-0 ${
          reversed && "lg:order-2"
        }`}
      >
        {type && <SectionTitleType title={type} start={true} />}
        <TechnologiesSectionTitle start={true}>
          {children}
        </TechnologiesSectionTitle>
        <p className="mt-5 text-gray-300 leading-5 text-sm md:text-base text-justify lg:w-11/12">
          {subTitle}
        </p>
      </div>
      <img
        src={img}
        alt=""
        className={`lg:w-1/2 mx-auto max-h-52 xl:max-h-72 2xl:max-h-96 ${
          reversed && "lg:order-1"
        }`}
      />
    </div>
  );
};

export { SectionBanner, TextBanner };
