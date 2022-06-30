import Image from "next/image";

const FeaturesCard = ({ data }) => {
  return (
    <div className="flex lg:block mb-12 lg:mb-0 gap-4 mt-12 3xl:mt-16 w-full">
      {data.map(({ id, title, subTitle, img }) => {
        return (
          <div
            key={id}
            className={`lg:flex justify-start ${
              !subTitle && "items-center"
            } my-3 xl:my-5 gap-5 w-10/12`}
          >
            <div
              className={`h-12 w-12 ${
                subTitle && "2xl:h-16 2xl:w-16"
              } mx-auto relative`}
            >
              <Image src={img} layout="fill" alt="" />
            </div>
            <div className="w-full">
              <p className="mt-2 md:mt-0 text-sm lg:text-base 2xl:text-xl 3xl:text-2xl text-gray-800 font-bold text-center lg:text-start">
                {title}
              </p>
              {subTitle && (
                <p className="text-gray-300 hidden lg:block text-sm 2xl:text-base mt-2 2xl:mt-5">
                  {subTitle}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesCard;
