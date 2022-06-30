import Overview4Items from "../components/shared/Overview4Items";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import AIMLServices from "../components/technologies_pages/ai_ml_technologies/AIMLServices";
import BasicLayout from "../layouts/BasicLayout";
import {
  aimlFeaturesData,
  aimlUserExperienceData,
} from "../public/data/aimlTechnologiesData";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextGradient } from "../components/shared/SharedTextgroups";
import ImageShowcase from "../components/shared/ImageShowcase";

const AIMLTechnologies = () => {
  return (
    <BasicLayout title="AI/ML Technologies">
      <PrimaryBanner
        title="AI/ML Technologies"
        img="ai-ml_technologies"
        sub="BYSL Global Technology Group stands on four core values regarded as the fundamental ideological constants to govern the organization."
      >
        AI-based <TextGradient text="Traffic" /> and
        <br />
        <TextGradient text="City Mobility" /> solutions
      </PrimaryBanner>
      <Overview4Items data={aimlFeaturesData} />
      <AIMLServices />
      <BannerWithBulletSingle data={aimlUserExperienceData} />
      <ImageShowcase
        type="Solutions"
        img="/images/technologies/ai_ml/aiml_solutions.svg"
      >
        Smart Solutions for <br />
        <TextGradient text="Health data visualization" />
      </ImageShowcase>
    </BasicLayout>
  );
};

export default AIMLTechnologies;
