import BannerWithBullets from "../components/shared/banners/BannerWithBullets";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import Overview3Items from "../components/shared/Overview3Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import {
  cyberBenefitsData,
  cyberFeaturesData,
  cyberProtectionData,
  cyberSolutionsData,
} from "../public/data/cyberSecurityTechnologiesData";

const CyberSecurityTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Cyber Security Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Cyber Security Technologies"
        img="cyber-security_technologies"
        sub="BYSL Global Technology Group stands on four core values regarded as the fundamental ideological constants to govern the organization."
      >
        Solution for all
        <br />
        <TextGradient text="Cyber Protection" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview3Items data={cyberBenefitsData} />

      {/* features section  */}
      <TriangleCardBanner
        type="Features"
        data={cyberFeaturesData}
        img="/images/technologies/cyber_security/features/cyber_security_features_banner.svg"
        black={true}
        padding={true}
      >
        World Class <TextGradient text="Protection" />
      </TriangleCardBanner>

      {/* Solutions section  */}
      <IconCardGroup3 data={cyberSolutionsData} type="Solutions">
        <TextGradient text="Cyber Security" /> Services
      </IconCardGroup3>

      {/* protection data  */}
      <BannerWithBullets data={cyberProtectionData} />
    </BasicLayout>
  );
};

export default CyberSecurityTechnologies;
