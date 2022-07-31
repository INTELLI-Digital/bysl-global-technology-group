import Image from "next/image";

import { getPath } from "../../../utils/paths";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../SharedTextgroups";

const BannerWithBulletSingle = (props) => {
  const { data, reversed, children, type } = props;
  const { title, colored, subTitle, img, features, newLine } = data;

  const itesPath = getPath("/ites");
  const informationPath = getPath("/information-security");
  const mobilePath = getPath("/mobile-technologies");

  return (
    <div
      className={`py-10 xl:py-16 lg:flex ${
        reversed && "lg:flex-row-reverse"
      } gap-6`}
    >
      <div
        className={`${informationPath ? "lg:w-[50%]" : "lg:w-[55%]"}  lg:pt-10`}
      >
        {type && <SectionTitleType title={type} start={true} />}
        <TechnologiesSectionTitle start={true}>
          {children ? (
            children
          ) : (
            <>
              {title}
              <br />
              {newLine && newLine}
              <TextGradient text={colored} />
            </>
          )}
        </TechnologiesSectionTitle>
        <p className="mt-4 text-gray-300 leading-5 text-sm md:text-base text-center lg:text-start">
          {subTitle}
        </p>
        <div className="mx-auto lg:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-2.5 gap-x-5 mt-6">
          {features.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Image
                src="/images/items_icon.svg"
                alt=""
                height={24}
                width={24}
              />
              <p className="text-gray-300 text-sm xl:text-base break-words w-full">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-full relative xs:w-4/5 lg:w-[45%] h-48 xs:h-64 sm:h-80 lg:h-[350px] xl:h-[450px] mx-auto flex justify-center items-start mt-10 lg:mt-0 ${
          itesPath && "lg:px-8 2xl:px-16"
        }`}
      >
        <Image
          src={img}
          placeholder="blur"
          blurDataURL={img}
          layout="fill"
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerWithBulletSingle;
