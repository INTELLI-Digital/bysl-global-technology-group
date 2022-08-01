import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextGradient } from "../components/shared/SharedTextgroups";
import MobileFeatures from "../components/technologies_pages/mobile_technologies/MobileFeatures";
import MobileTechSlider from "../components/technologies_pages/mobile_technologies/MobileTechSlider";
import BasicLayout from "../layouts/BasicLayout";
import {
  mobileFeaturesData1,
  mobileFeaturesData2,
  mobileSliderData,
  userExperienceData,
} from "../public/data/mobileTechnologiesData";

const MobileTechnologies = ({ mobileFeaturesData, mobileTechData }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Mobile Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Mobile Technologies"
        img="mobile_technologies"
        sub="In a world of oversaturated mobile apps, we pioneer disruptive ideas to break trends and introduce the next big thing.  "
      >
        <TextGradient text="Empowering" />,
        <br />
        <TextGradient text="accessible " /> &
        <TextGradient text=" futuristic" />
      </PrimaryBanner>

      {/* features section  */}
      <MobileFeatures featuresData={mobileFeaturesData} />

      {/* user experience section  */}
      <BannerWithBulletSingle data={userExperienceData} />

      {/* slider section  */}
      <MobileTechSlider mobileTechData={mobileTechData} />
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  const mobileFeaturesData = {
    data1: mobileFeaturesData1,
    data2: mobileFeaturesData2,
    img: "/images/technologies/mobile/features/mobile_features.svg",
  };

  const mobileTechData = {
    frame:
      "/images/technologies/mobile/slider/mobileTechnologies_slider_frame.webp",
    mobileSliderData,
  };

  return {
    props: { mobileFeaturesData, mobileTechData },
  };
}

export default MobileTechnologies;
