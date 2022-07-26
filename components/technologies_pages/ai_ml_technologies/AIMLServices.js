import Image from "next/image";

import { aimlServicesData } from "../../../public/data/aimlTechnologiesData";
import { getPath } from "../../../utils/paths";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const AIMLServices = () => {
  const aimlPath = getPath("/ai-ml-technologies");

  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Services" />
      <TechnologiesSectionTitle>
        Building your Own <TextGradient text="World" />
        <br />
        With us
      </TechnologiesSectionTitle>
      <div className="md:flex items-center mt-10 xl:mt-20 gap-5 3xl:gap-8">
        <div className="w-full md:w-1/2">
          {aimlPath ? (
            <video
              className="w-full h-full bg-white object-cover"
              src="/images/technologies/ai_ml/services/aiml_services_banner.mp4"
              autoPlay
              muted
              loop
            />
          ) : (
            <div className="h-80 lg:h-[440px] 2xl:h-[626px] mx-auto rounded-xl 2xl:rounded-[20px] relative">
              <Image
                src="/images/technologies/ai_ml/services/aiml_services_banner.svg"
                layout="fill"
                alt=""
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div className="grid grid-cols-2 gap-3 2xl:gap-5 w-full">
            {aimlServicesData.map(({ id, img, title }) => {
              return (
                <div
                  key={id}
                  className={`bg-white ${
                    (id === 0 && "md:mt-40") ||
                    (id === 3 && "md:-mt-40 custom-gap")
                  } rounded-[10px] xl:rounded-[20px] flex flex-col justify-center items-center text-center px-2 py-4 lg:py-8 lg:px-3 2xl:px-8 3xl:px-10 w-full h-full md:h-auto self-center`}
                >
                  <div className="h-14 xl:h-20 w-14 xl:w-20 mb-5 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25">
                    <div className="h-6 w-6 xl:h-12 xl:w-12 relative">
                      <Image src={img} layout="fill" alt="" />
                    </div>
                  </div>
                  <div className="text-sm lg:text-base 3xl:text-2xl font-bold text-gray-800">
                    {title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLServices;
