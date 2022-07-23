import Image from "next/image";

import HoverImage from "./HoverImage";

const OverviewCard = (props) => {
  const { data, large } = props;

  return (
    <>
      {data.map(({ id, title, subTitle, img, hoverImg }) => {
        return (
          <div
            key={id}
            className="p-3 xl:p-4 text-center my-2 group hover:cursor-pointer"
          >
            <div
              className={`mx-auto relative ${
                large
                  ? "h-16 2xl:h-[88px] w-16 2xl:w-[88px]"
                  : "h-10 2xl:h-16 w-10 2xl:w-16"
              }`}
            >
              {hoverImg ? (
                <HoverImage img1={img} img2={hoverImg} />
              ) : (
                <Image src={img} layout="fill" alt="" />
              )}
            </div>
            <p className="2xl:text-xl font-medium text-gray-800 mt-5">
              {title}
            </p>
            {subTitle && (
              <p className="hidden md:block text-gray-300 2xl:text-lg font-medium mt-5">
                {subTitle}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default OverviewCard;

// {img2 ? (
//   <HoverImage img1={img} img2={img2} />
// ) : (
//   // <img
//   //   src={img}
//   //   alt=""
//   //   className="mx-auto h-10 2xl:h-16 w-10 2xl:w-16"
//   // />
//   <div className="mx-auto h-10 2xl:h-16 w-10 2xl:w-16 relative">
//     <Image src={img} layout="fill" alt="" />
//   </div>
// )}
