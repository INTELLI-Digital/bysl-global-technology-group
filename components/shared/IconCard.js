import HoverImage from "./HoverImage";

const IconCard = ({ data }) => {
  return (
    <>
      {data.map(({ id, img, title, subTitle }) => {
        return (
          <div
            key={id}
            className={`group gradient-bg p-5 ${!subTitle && "sm:py-10"}`}
          >
            <div className="h-10 lg:h-16 w-10 lg:w-16 mx-auto relative ">
              <HoverImage
                img1={img}
                img2="/images/technologies/cloud/features/cloud_features_1.svg"
              />
            </div>
            <p className="text-sm lg:text-base 2xl:text-xl 3xl:text-2xl text-gray-800 group-hover:text-white transition-all duration-500 font-bold text-center my-3 2xl:my-5">
              {title}
            </p>
            {subTitle && (
              <div className="text-sm 2xl:text-base text-gray-500 group-hover:text-white/75 hidden sm:block transition-all duration-500">
                {subTitle}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default IconCard;
