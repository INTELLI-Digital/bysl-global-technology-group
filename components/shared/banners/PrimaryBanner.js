import Image from "next/image";

import { getPath } from "../../../utils/paths";
import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const PrimaryBanner = ({ title, sub, img, children }) => {
  const webPath = getPath("/web-technologies");

  return (
    <div
      className={`${
        webPath ? "py-10 md:py-0" : "py-10 xl:py-16"
      } md:flex justify-between gap-6 max-h-max`}
    >
      <div
        className={`md:w-[55%] mb-10 md:my-0 ${
          webPath ? "md:pt-10 lg:pt-20 xl:pt-24 2xl:pt-32" : "md:pt-10"
        }`}
      >
        <div className="text-center md:text-start">
          <p className="text-sm sm:text-base lg:text-lg font-bold">
            <TextGradient text={title} />
          </p>
          <SectionTitleGradient>{children}</SectionTitleGradient>
          <p className="xl:w-3/4 mt-5 text-gray-300 text-sm sm:text-base">
            {sub}
          </p>
        </div>
      </div>
      <div className="md:w-[45%]">
        <div
          className={`h-56 xs:h-[40vh] max-h-[600px] w-full relative ${
            webPath ? "lg:h-[50vh] 2xl:h-[60vh]" : "xl:h-[50vh]"
          }`}
        >
          <Image
            src={`/images/banners/${img}_banner.svg`}
            layout="fill"
            priority
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PrimaryBanner;
