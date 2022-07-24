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
  const arVrPath = getPath("/ar-vr-technologies");

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      <div
        className={`md:flex ${
          !reversed && "md:flex-row-reverse"
        } items-center mt-10 xl:mt-20 gap-5 3xl:gap-8`}
      >
        <div className={`w-full md:w-1/2 mb-10 md:mb-0`}>
          <ServicesCard data={data} black={black} padding={padding} />
        </div>
        <div className="rounded-xl 2xl:rounded-[20px] overflow-hidden w-full md:w-1/2 mx-auto">
          {arVrPath ? (
            <video
              className="object-cover rounded-lg aspect-[3/2] h-40 xs:h-56 sm:h-80 md:h-52 lg:h-64 xl:h-80 3xl:h-[440px] w-full"
              src="/images/technologies/ar_vr/research.mp4"
              autoPlay
              muted
              loop
            />
          ) : (
            <div
              className={`${
                iotPath
                  ? "md:h-80 lg:h-[440px] xl:h-[530px]"
                  : "h-40 xs:h-56 sm:h-80 md:h-52 lg:h-64 xl:h-80 3xl:h-[440px]"
              } relative`}
            >
              <Image src={img} layout="fill" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TriangleCardBanner;
