import Image from "next/image";

import { getPath } from "../../utils/paths";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const ImageShowcase = (props) => {
  const { children, sub, img, type } = props;
  const arVrPath = getPath("/ar-vr-technologies");
  const itesPath = getPath("/ites");
  // const adminPath = getPath("/administration");
  const dataSciencePath = getPath("/data-science");

  return (
    <div className="py-10 xl:py-16">
      {type && <SectionTitleType title={type} />}
      <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      {sub && (
        <p className="xs:px-4 sm:w-4/5 lg:w-3/5 3xl:w-1/2 mx-auto text-center mt-4 xl:mt-5 text-gray-300 text-sm md:text-base">
          {sub}
        </p>
      )}
      <div className="mt-10 xl:mt-16 w-full rounded-[20px] overflow-hidden max-w-[1080px] mx-auto">
        {arVrPath ? (
          <video
            className="h-48 sm:h-64 md:h-80 lg:h-[400px] 2xl:h-[500px] w-full rounded-[20px] object-cover"
            src="/images/technologies/ar_vr/demo.mp4"
            autoPlay
            muted
            loop
          />
        ) : (
          <div
            className={`relative mx-auto h-48 sm:h-64 md:h-80 lg:h-[400px] 2xl:h-[500px] 3xl:h-[600px] rounded-[20px] overflow-hidden ${
              (itesPath && "3xl:h-[735px] shadow-2xl shadow-blue-500/25") ||
              // (adminPath && "3xl:h-[735px] bg-blue-900") ||
              (dataSciencePath && "3xl:h-[528px] shadow-2xl shadow-blue-500/25")
            }`}
          >
            <Image src={img} layout="fill" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageShowcase;
// shadow-2xl shadow-blue-500/25
