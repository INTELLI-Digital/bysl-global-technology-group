import Image from "next/image";

import { getPath } from "../../../utils/paths";
import ServicesCard from "../../shared/ServicesCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../../shared/SharedTextgroups";

const TriangleCardBanner = (props) => {
  const { children, data, img, black, padding, type, reversed } = props;
  const iotPath = getPath("/iot-technologies");

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div className="md:flex items-center mt-10 xl:mt-20 gap-5 3xl:gap-8">
        <div
          className={`w-full md:w-1/2 mb-10 md:mb-0 order-1 ${
            !reversed && "md:order-2"
          }`}
        >
          <ServicesCard data={data} black={black} padding={padding} />
        </div>
        <div
          className={`${
            iotPath
              ? "md:w-1/2 h-80 lg:h-[440px] mx-auto"
              : "md:w-1/2 h-40 xs:h-56 sm:h-80 md:h-52 lg:h-64 xl:h-80 3xl:h-[440px]"
          } mx-auto order-2 ${
            !reversed && "md:order-1"
          } rounded-xl 2xl:rounded-[20px] overflow-hidden relative`}
        >
          <Image src={img} layout="fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TriangleCardBanner;
