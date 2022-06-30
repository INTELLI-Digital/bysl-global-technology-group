import { databaseSolutionsData } from "../../../public/data/databaseTechnologiesData";
import IconCard from "../../shared/IconCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const DatabaseSolutions = () => {
  return (
    <div className="py-10 xl:py-16">
      <SectionTitleType title="Solutions" />
      <TechnologiesSectionTitle>
        Scalable Solutions for
        <br />
        <TextGradient text="Industries" />
      </TechnologiesSectionTitle>
      <div className="grid grid-cols-2 xl:grid-cols-3 mt-10 xl:mt-20 gap-5">
        <IconCard data={databaseSolutionsData} />
      </div>
    </div>
  );
};

export default DatabaseSolutions;
