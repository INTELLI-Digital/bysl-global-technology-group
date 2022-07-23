import { getPath } from "../../utils/paths";
import HoverImage from "./HoverImage";

const IconCard = (props) => {
  const { data, padding } = props;

  return (
    <>
      {data.map(({ id, img, title, hoverImg, subTitle }) => {
        return (
          <div
            key={id}
            className={`group gradient-bg p-5  ${
              !getPath("/ar-vr-technologies") && "sm:py-10"
            }`}
          >
            <div className="h-10 w-10 lg:h-16 lg:w-16 gradient-bg-sm flex justify-center items-center rounded-lg mx-auto">
              <div
                className={`h-5 w-5 z-50 ${
                  !padding && "lg:h-9 lg:w-9"
                } mx-auto relative`}
              >
                <HoverImage
                  img1={img}
                  img2={hoverImg ? hoverImg : "/images/icon_hover.svg"}
                />
              </div>
            </div>
            <p
              className={`text-sm lg:text-base 2xl:text-xl 3xl:text-2xl text-gray-800 group-hover:text-white transition-all duration-500 font-bold text-center ${
                padding ? "mt-6 xl:mt-10" : "my-3 2xl:my-5"
              }`}
            >
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
// bg-gradient-to-r from-blue-900 to-blue-700 group-hover:from-white group-hover:to-white transition-all duration-500
