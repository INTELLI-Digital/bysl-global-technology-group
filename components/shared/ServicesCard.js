import Image from "next/image";

import { TextGradient } from "./SharedTextgroups";

const ServicesCard = (props) => {
  const { data, black, padding } = props;

  return (
    <div className="grid grid-cols-2 grid-rows-2 place-content-center gap-3 lg:gap-5 w-full">
      {data.map(({ id, img, title, title2, subTitle }) => {
        return (
          <div
            key={id}
            className={`bg-white rounded-[20px] flex flex-col justify-center items-center text-center px-2 py-8 lg:px-5 w-full self-center
            ${id === 0 && "row-span-2"}
            ${id !== 0 && "h-full"}
            ${padding && "3xl:py-16"} `}
          >
            <div className="h-14 xl:h-20 w-14 xl:w-20 mb-1 md:mb-5 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25">
              <div className="h-8 w-8 xl:h-12 xl:w-12 relative">
                <Image src={img} layout="fill" alt="" />
              </div>
            </div>
            <div className="text-sm lg:text-base 3xl:text-2xl font-bold">
              {black ? (
                <span className="text-gray-800">{title}</span>
              ) : (
                <TextGradient text={title} />
              )}
            </div>
            <div className="hidden xl:block">
              {title2 && (
                <p className="text-xl mt-5 font-semibold text-gray-300">
                  {title2}
                </p>
              )}
              {subTitle && (
                <p className="text-sm text-gray-300 mt-5">{subTitle} </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCard;
