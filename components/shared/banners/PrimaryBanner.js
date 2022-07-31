import Image from "next/image";

import { getPath } from "../../../utils/paths";
import WebBanner from "../../technologies_pages/web_technologies/WebBanner";
import { SectionTitleGradient, TextGradient } from "../SharedTextgroups";

const PrimaryBanner = ({ title, sub, img, children }) => {
  const webPath = getPath("/web-technologies");
  const aiMlPath = getPath("/ai-ml-technologies");
  const cloudPath = getPath("/cloud-technologies");
  const iotPath = getPath("/iot-technologies");
  const ictPath = getPath("/ict");
  const itesPath = getPath("/ites");
  const foodTechPath = getPath("/food-tech");
  const dataSciencePath = getPath("/data-science");
  const informationPath = getPath("/information-security");
  const blockchainPath = getPath("/blockchain-technologies");
  const cyberPath = getPath("/cyber-security-technologies");

  return (
    <div
      className={`${aiMlPath ? "items-center" : "py-10 xl:py-16"} ${
        cyberPath && "!pb-0"
      } ${itesPath && "!pb-0"} md:flex justify-between gap-6 max-h-max`}
    >
      <div
        className={`${
          ictPath ? "md:w-[50%]" : "md:w-[55%]"
        } mb-10 md:my-0 md:pt-10 ${
          webPath && "md:pt-5 lg:pt-10 xl:pt-12 2xl:pt-16"
        } ${aiMlPath && "mt-0"} ${
          (iotPath && "!pt-20") ||
          (cloudPath && "!pt-20") ||
          (blockchainPath && "!pt-20")
        }`}
      >
        <div className="text-center md:text-start">
          <p className="text-sm sm:text-base lg:text-lg font-bold mb-2">
            <TextGradient text={title} />
          </p>
          <SectionTitleGradient>{children}</SectionTitleGradient>
          <p
            className={`${
              !aiMlPath && "xl:w-5/6"
            } mt-4 text-gray-600 text-sm sm:text-base xl:text-xl`}
          >
            {sub}
          </p>
        </div>
      </div>
      <div
        className={`${ictPath || foodTechPath ? "md:w-[55%]" : "md:w-[45%]"}`}
      >
        {webPath ? (
          <WebBanner />
        ) : (
          <div
            className={`h-56 xs:h-[40vh] max-h-[600px] w-full relative ${
              webPath ? "lg:h-[50vh] 2xl:h-[60vh]" : "xl:h-[50vh]"
            } ${ictPath && "xl:h-[40vh]"} ${dataSciencePath && "xl:h-[40vh]"} ${
              informationPath && "xl:h-[280px]"
            }`}
          >
            <Image
              src={`/images/banners/${img}_banner.svg`}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/images/banners/${img}_banner.svg`}
              priority
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrimaryBanner;
