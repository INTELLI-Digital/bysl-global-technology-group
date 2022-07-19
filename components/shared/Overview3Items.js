import Image from "next/image";

import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const Overview3Items = (props) => {
  const { data, children, type } = props;

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div
        className={`w-full lg:w-4/5 mx-auto flex flex-wrap md:flex-nowrap justify-evenly gap-6 ${
          children && "mt-10 md:mt-16 xl:mt-20 "
        }`}
      >
        {data.map(({ id, title, img, subTitle }) => {
          return (
            <div
              key={id}
              className="p-3 xl:p-5 text-center max-w-[100px] xxs:max-w-none lg:w-max"
            >
              <div className="mx-auto h-10 2xl:h-16 w-10 2xl:w-16 relative">
                <Image src={img} layout="fill" alt="" />
              </div>
              <p className="2xl:text-xl font-medium text-gray-800 mt-5">
                {title}
              </p>
              {subTitle && (
                <p className="hidden md:block text-gray-300 2xl:text-lg font-medium mt-5 3xl:w-5/6 mx-auto">
                  {subTitle}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview3Items;
