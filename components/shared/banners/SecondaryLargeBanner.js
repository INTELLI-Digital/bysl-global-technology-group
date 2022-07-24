import Image from "next/image";
import { getPath } from "../../../utils/paths";

import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const SecondaryLargeBanner = ({ data, children }) => {
  const { heading, subTitle, img } = data;
  const adminPath = getPath("/administration");

  return (
    <div className="py-10 xl:py-16">
      <p className="text-sm md:text-base xl:text-lg font-bold text-center">
        <TextGradient text={heading} />
      </p>
      <SectionTitleGradient centered={true}>{children}</SectionTitleGradient>
      <p className="xs:px-4 sm:w-4/5 lg:w-3/5 3xl:w-1/2 mx-auto mt-5 text-gray-300 leading-5 text-sm md:text-base text-center">
        {subTitle}
      </p>
      <div
        className={`mt-5 lg:mt-10 2xl:mt-20 flex justify-center max-w-[1080px] mx-auto ${
          adminPath &&
          "shadow-2xl shadow-blue-500/25 rounded-[20px] overflow-hidden"
        }`}
      >
        <Image src={img} alt="" height={735} width={1080} />
      </div>
    </div>
  );
};

export default SecondaryLargeBanner;
