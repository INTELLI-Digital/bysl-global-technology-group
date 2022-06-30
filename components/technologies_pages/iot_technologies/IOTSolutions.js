import { iotSolutionsData } from "../../../public/data/iotTechnologiesData";
import ServicesCard from "../../shared/ServicesCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const IOTSolutions = () => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Solutions" />
      <TechnologiesSectionTitle>
        Smart Solutions in Full
        <br />
        <TextGradient text="System Design." />
      </TechnologiesSectionTitle>
      <div className="md:flex items-center mt-10 xl:mt-20 gap-5">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <ServicesCard data={iotSolutionsData} padding={true} />
        </div>
        <img
          src="/images/technologies/iot/solutions/iot_solutions_banner.svg"
          alt=""
          className="md:w-1/2 max-h-80 lg:max-h-[440px] mx-auto"
        />
      </div>
    </div>
  );
};

export default IOTSolutions;
