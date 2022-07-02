import Image from "next/image";
import { bigdataServicesData } from "../../../public/data/bigdataTechnologiesData";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const BigdataServices = () => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Services" />
      <TechnologiesSectionTitle>
        Discover The <TextGradient text="Reality" />
        <br />
        As You Like
      </TechnologiesSectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 w-full mt-10 xl:mt-20">
        {bigdataServicesData.map(({ id, img, title }) => {
          return (
            <div
              key={id}
              className="bg-white rounded-[20px] flex flex-col justify-center items-center text-center px-2 py-3 lg:px-5 xs:py-5 sm:py-8 3xl:py-14 w-full self-center"
            >
              <div className="h-14 xl:h-20 w-14 xl:w-20 mb-5 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25">
                <div className="relative h-6 w-6 xl:h-12 xl:w-12">
                  <Image src={img} layout="fill" alt="" />
                </div>
              </div>
              <p className="text-sm xl:text-base 3xl:text-2xl font-bold text-gray-800">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BigdataServices;
