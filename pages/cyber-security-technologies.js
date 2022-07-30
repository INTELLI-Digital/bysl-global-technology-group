import BannerWithBullets from "../components/shared/banners/BannerWithBullets";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import Overview4Items from "../components/shared/Overview4Items";
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
        sub="Designing next-generation security landscapes with end-to-end encryption, integraged AI-based threat analysis, persistent vulnerablity check, rigorus stress-testings, real time responses and timely security updates"
      >
        <TextGradient text="Full-scale" /> cyber protection through
        <TextGradient text=" holistic security architecture" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={cyberBenefitsData} />

      {/* features section  */}
      <TriangleCardBanner
        type="Features"
        data={cyberFeaturesData}
        img="/images/technologies/cyber_security/features/cyber_security_features_banner.svg"
        black={true}
        padding={true}
      >
        World Class Protection
      </TriangleCardBanner>

      {/* Solutions section  */}
      <IconCardGroup3 data={cyberSolutionsData} type="Solutions">
        Cyber Security Services
      </IconCardGroup3>

      {/* protection data  */}
      <BannerWithBullets data={cyberProtectionData}>
        360° <TextGradient text=" Protection " /> from APTs, DDoS & SQL
        injections
      </BannerWithBullets>
    </BasicLayout>
  );
};

export default CyberSecurityTechnologies;
