import { databaseFeaturesData } from "../../../public/data/databaseTechnologiesData";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const DatabaseFeatures = () => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Features" />
      <TechnologiesSectionTitle>
        Best soluation with required
        <br />
        <TextGradient text="Services" />
      </TechnologiesSectionTitle>
      <div className="md:flex items-center mt-10 xl:mt-20 gap-5">
        <img
          src="/images/technologies/database/features/database_features_banner.svg"
          alt=""
          className="md:w-1/2 xl:w-2/5 3xl:w-1/2"
        />
        <div className="grid grid-cols-2 grid-rows-2 place-content-center gap-3 lg:gap-5 w-full mt-10 md:mt-0 xl:w-3/5 3xl:w-1/2">
          {databaseFeaturesData.map(({ id, img, title, subTitle }) => {
            return (
              <div
                key={id}
                className="bg-white rounded-[20px] flex flex-col justify-center items-center text-center px-2 py-8 lg:px-5 w-full self-center h-full"
              >
                <div className="h-14 xl:h-20 w-14 xl:w-20 mb-5 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25">
                  <img src={img} alt="" className="h-6 w-6 xl:h-12 xl:w-12" />
                </div>
                <div className="text-sm lg:text-base 3xl:text-2xl font-bold">
                  <TextGradient text={title} />
                </div>
                <div className="hidden xl:block">
                  {subTitle && (
                    <p className="text-sm text-gray-300 mt-5">{subTitle} </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatabaseFeatures;
