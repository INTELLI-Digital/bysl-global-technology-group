import Image from "next/image";

import { getPath } from "../../utils/paths";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const ImageShowcase = (props) => {
  const { children, sub, img, type } = props;

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      {sub && (
        <p className="xs:px-4 sm:w-4/5 lg:w-3/5 3xl:w-1/2 mx-auto text-center mt-4 xl:mt-5 text-gray-300 text-sm md:text-base">
          {sub}
        </p>
      )}
      <div
        className={`relative mx-auto mt-10 xl:mt-16 h-48 sm:h-64 md:h-80 lg:h-[400px] 2xl:h-[500px] 3xl:h-[600px] w-full ${
          getPath("/ites") ||
          (getPath("/data-science") && "shadow-2xl shadow-blue-500/25")
        } rounded-[20px] overflow-hidden`}
      >
        <Image
          src={img}
          layout="fill"
          objectFit={getPath("/data-science") && "cover"}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageShowcase;
