import Image from "next/image";

import { getPath } from "../../../utils/paths";
import { TechnologiesSectionTitle, TextGradient } from "../SharedTextgroups";

const BannerWithBulletSingle = (props) => {
  const { data, reversed, children } = props;
  const { title, colored, subTitle, img, features, newLine } = data;

  return (
    <div
      className={`py-10 xl:py-16 lg:flex ${
        reversed && "lg:flex-row-reverse"
      } gap-6`}
    >
      <div className={`lg:w-[55%] lg:pt-10`}>
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
        <p className="my-4 2xl:mb-8 text-gray-300 leading-5 text-sm md:text-base text-center lg:text-start">
          {subTitle}
        </p>
        <div className="w-fit mx-auto lg:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-5 mt-5 sm:mt-0">
          {features.map((item, i) => (
            <div key={i} className="flex items-center mt-1 3xl:mt-4">
              <Image
                src="/images/items_icon.svg"
                alt=""
                height={24}
                width={24}
              />
              <p className="text-gray-300 text-sm xl:text-base ml-3 break-words">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-full xs:w-4/5 lg:w-[45%] mx-auto flex justify-center items-start mt-10 lg:mt-0 ${
          getPath("/ites") && "lg:px-8 2xl:px-16"
        }`}
      >
        <Image src={img} height={450} width={588} alt="" />
      </div>
    </div>
  );
};

export default BannerWithBulletSingle;
