import Image from "next/image";

import { TechnologiesSectionTitle } from "./SharedTextgroups";

const RowSpanGrid = (props) => {
  const { children, data } = props;

  return (
    <div className="py-10 xl:py-16">
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="mt-6 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 2xl:gap-6">
        {data.map(
          ({ id, title, title2, subTitle, subTitle2, img, benefits }) => {
            return (
              <div
                key={id}
                className={`xl:text-center ${
                  id === 0 ? "xl:row-span-2 2xl:pt-10" : "2xl:pt-16"
                } bg-white rounded-[10px] md:rounded-2xl xl:rounded-[20px] p-5 2xl:p-10  border-[1px] border-[#393E50]/10`}
              >
                <div className="bg-blue-200 h-10 xl:h-12 2xl:h-16 w-10 xl:w-12 2xl:w-16 rounded-full flex items-center justify-center xl:mx-auto">
                  <div className="h-5 w-5 2xl:h-8 2xl:w-8 relative">
                    <Image src={img} layout="fill" alt="" />
                  </div>
                </div>
                <p
                  className={`text-lg xl:text-xl 2xl:text-2xl 3xl:text-[32px] font-semibold text-gray-800 leading-7 xl:leading-[48px] my-2.5 xl:my-3 3xl:my-6 ${
                    id === 0 && "3xl:mt-8 3xl:mb-4"
                  }`}
                >
                  {title}
                </p>
                <p className="text-gray-300 text-sm xl:text-base">{subTitle}</p>
                {subTitle2 && (
                  <p className="text-gray-300 text-sm xl:text-base mt-4 hidden xl:block">
                    {subTitle2}
                  </p>
                )}
                {title2 && (
                  <div className="mt-4 3xl:mt-8 hidden xl:block">
                    <p className="text-start text-xl font-bold text-gray-800 pb-1">
                      {title2}
                    </p>
                    {benefits.map((item, i) => (
                      <div key={i} className="flex items-center mt-1 3xl:mt-3">
                        <Image
                          src="/images/items_icon.svg"
                          alt=""
                          height={24}
                          width={24}
                        />
                        <p className="text-gray-300 ml-3">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default RowSpanGrid;
