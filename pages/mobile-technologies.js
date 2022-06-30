import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextGradient } from "../components/shared/SharedTextgroups";
import MobileFeatures from "../components/technologies_pages/mobile_technologies/MobileFeatures";
import MobileTechSlider from "../components/technologies_pages/mobile_technologies/MobileTechSlider";
import BasicLayout from "../layouts/BasicLayout";
import { userExperienceData } from "../public/data/mobileTechnologiesData";

const MobileTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Mobile Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Mobile Technologies"
        img="mobile_technologies"
        sub="BYSL Global Technology Group stands on four core values regarded as the fundamental ideological constants to govern the organization."
      >
        Innovative Solution.
        <br />
        <TextGradient text="Simple" /> & <TextGradient text="Affordable" />
      </PrimaryBanner>

      {/* features section  */}
      <MobileFeatures />

      {/* user experience section  */}
      <BannerWithBulletSingle data={userExperienceData} />

      {/* slider section  */}
      <MobileTechSlider />
    </BasicLayout>
  );
};

export default MobileTechnologies;
