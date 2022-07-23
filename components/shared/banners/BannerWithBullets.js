import Image from "next/image";

import { getPath } from "../../../utils/paths";
import { TechnologiesSectionTitle } from "../SharedTextgroups";

const BannerWithBullets = (props) => {
  const { data, reversed, group, children } = props;
  const { subTitle, img, features, title } = data;

  return (
    <div
      className={`lg:flex items-center gap-6 ${
        reversed && "lg:flex-row-reverse"
      }
      ${group ? "pb-20 xl:pb-16" : "py-10 xl:py-16"}`}
    >
      <div className="lg:w-[55%]">
        <TechnologiesSectionTitle start={true}>
          {children ? children : title}
        </TechnologiesSectionTitle>
        {subTitle && <p className="mt-5 text-gray-300">{subTitle}</p>}
        <div className="grid grid-cols-1 xxs:grid-cols-2 my-5 sm:my-10 lg:mb-0">
          {features.map((item, i) => (
            <div key={i} className="flex items-center mt-1 3xl:mt-3">
              <Image
                src="/images/items_icon.svg"
                alt=""
                height={24}
                width={24}
              />
              <p className="text-gray-300 text-sm lg:text-base 3xl:text-xl ml-3">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`relative lg:w-[45%] mx-auto h-48 xs:h-64 sm:h-80 lg:h-[350px] ${
          !getPath("/cloud-technologies") && "xl:h-[500px]"
        } mt-5 lg:mt-0`}
      >
        <Image src={img} layout="fill" alt="" />
      </div>
    </div>
  );
};

export default BannerWithBullets;
