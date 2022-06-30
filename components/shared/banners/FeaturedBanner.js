import Image from "next/image";

import FeaturesCard from "../FeaturesCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const FeaturedBanner = (props) => {
  const { children, data } = props;
  const { img, type, features, subTitle } = data;

  return (
    <div className="py-10 xl:py-16 lg:flex items-center gap-6">
      <div className="lg:w-1/2">
        {type && <SectionTitleType title={type} start={true} />}
        <TechnologiesSectionTitle start={true}>
          {children}
        </TechnologiesSectionTitle>
        {subTitle && (
          <p className="my-4 lg:my-6 text-gray-300 text-justify lg:w-11/12 text-sm lg:text-base">
            {subTitle}
          </p>
        )}
        <FeaturesCard data={features} />
      </div>
      {/* <img
        src={img}
        alt=""
        className="lg:w-1/2 h-52 sm:h-64 xl:h-full mx-auto"
      /> */}
      <div className="lg:w-1/2 mx-auto">
        <Image src={img} height={419} width={687} alt="" />
      </div>
    </div>
  );
};

export default FeaturedBanner;
