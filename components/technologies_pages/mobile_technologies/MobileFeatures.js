import {
  mobileFeaturesData1,
  mobileFeaturesData2,
} from "../../../public/data/mobileTechnologiesData";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const MobileFeatures = () => {
  const Features = ({ data }) => {
    return (
      <div className="flex flex-row lg:flex-col gap-x-10 gap-y-20 place-self-center">
        {data.map(({ id, title, subTitle, img }) => {
          return (
            <div key={id} className="flex flex-col xl:flex-row gap-5">
              <div className="xl:w-1/4 3xl:w-2/12 flex justify-center order-1 xl:order-2">
                <div className="h-10 lg:h-16 w-10 lg:w-16 rounded-full bg-blue-300 flex justify-center items-center">
                  <img src={img} alt="" className="w-4 lg:w-7" />
                </div>
              </div>
              <div className="text-center xl:text-end xl:w-3/4 3xl:w-10/12 order-2 xl:order-1">
                <p className="text-sm md:text-base lg:text-lg 2xl:text-xl font-medium text-gray-800">
                  {title}
                </p>
                <p className="text-sm lg:text-base xl:text-lg mt-1 text-gray-300 hidden lg:block">
                  {subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Features" />
      <TechnologiesSectionTitle>
        Explore Premium <TextGradient text="Features" />
      </TechnologiesSectionTitle>
      <div className="mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Features data={mobileFeaturesData1} />
        <div className="flex justify-center">
          <img
            src="/images/technologies/mobile/features/mobile_features.svg"
            alt=""
            className="w-44 lg:w-52 2xl:w-60"
          />
        </div>
        <Features data={mobileFeaturesData2} />
      </div>
    </div>
  );
};

export default MobileFeatures;
