import { arVrFeaturesData } from "../../../public/data/arVrTechnologiesData";
import FeaturesCard from "../../shared/FeaturesCard";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const ARVRFeatures = () => {
  return (
    <div className="py-10 xl:py-16 lg:flex items-center gap-6">
      <div>
        <SectionTitleType title="Features" start={true} />
        <TechnologiesSectionTitle start={true}>
          VR studio is into your
          <br />
          <TextGradient text="Service" />
        </TechnologiesSectionTitle>
        <FeaturesCard data={arVrFeaturesData} />
      </div>
      <img
        src="/images/technologies/ar_vr/features/ar_vr_features.svg"
        alt=""
        className="lg:w-1/2 h-52 sm:h-64 xl:h-80 mx-auto"
      />
    </div>
  );
};

export default ARVRFeatures;
