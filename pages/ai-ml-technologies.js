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
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="AI/ML Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="AI/ML Technologies"
        img="ai-ml_technologies"
        sub="Innovating in next-generation AI systems development adapting data-driven supervised, unsupervised, reinforced learnings using self-replicating artificial neural networks & ML artifacts to handle & simplify the massive complexity of data patterns & open new horizons for businesses. "
      >
        Intelligent <TextGradient text=" Systems " />
        <br />
        to make <TextGradient text=" Life " /> Better
        {/* AI-based <TextGradient text="Traffic" /> and
        <TextGradient text="City Mobility" /> solutions */}
      </PrimaryBanner>

      {/* overview items section  */}
      <Overview4Items data={aimlFeaturesData} />

      {/* services section  */}
      <AIMLServices />

      {/* Solutions section  */}
      <ImageShowcase
        type="Applications"
        video="/images/technologies/ai_ml/aiml_solutions.mp4"
      >
        <TextGradient text="AI-driven " /> technology to unlock
        <br />
        the potential of
        <TextGradient text=" health data" />
      </ImageShowcase>

      {/* Big Data Analysis section  */}
      <BannerWithBulletSingle data={aimlUserExperienceData} type="Features" />
    </BasicLayout>
  );
};

export default AIMLTechnologies;
