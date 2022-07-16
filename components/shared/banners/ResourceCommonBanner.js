import Image from "next/image";
import { TextGradient } from "../SharedTextgroups";

const ResourceCommonBanner = (props) => {
  const { data, reversed } = props;
  const { icon, img, type, title, subTitle1, subTitle2 } = data;

  return (
    <div className="py-10 xl:py-16 md:flex items-center gap-12 xl:gap-20 3xl:gap-28">
      <div className={`${reversed && "md:order-2"}`}>
        <div className="relative h-10 w-10 2xl:h-16 2xl:w-16">
          <Image src={icon} layout="fill" alt="" />
        </div>
        <p className="mt-1 mb-5 md:my-6 text-xs lg:text-sm uppercase font-medium">
          <TextGradient text={type} />
        </p>
      </div>
      <div
        className={`px-4 md:px-0 md:w-1/2 md:-ml-16 xl:-ml-24 3xl:-ml-32 ${
          reversed && "md:order-1"
        }`}
      >
        <Image src={img} height={736} width={996} alt="" />
      </div>
    </div>
  );
};

export default ResourceCommonBanner;
