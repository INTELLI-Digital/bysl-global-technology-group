import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import BannerWithBullets from "../components/shared/banners/BannerWithBullets";
import {
  cloudFeaturesData,
  cloudServicesData,
  cloudSupportData,
} from "../public/data/cloudTechnologiesData";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";

const CloudTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Cloud Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Cloud Technologies"
        img="cloud_technologies"
        sub="BYSL Global Technology Group stands on four core values regarded as the fundamental ideological constants to govern the organization."
      >
        Start Your&nbsp;
        <TextGradient text="Cloud Journey" />
        &nbsp;Here
      </PrimaryBanner>

      {/* services section  */}
      <TriangleCardBanner
        type="Services"
        data={cloudServicesData}
        img="/images/technologies/cloud/services/services.svg"
      >
        Best soluation with required
        <br />
        <TextGradient text="Services" />
      </TriangleCardBanner>

      {/* features section  */}
      <IconCardGroup3 data={cloudFeaturesData} type="Features">
        Powerful Control <TextGradient text="Panel" />
        <br />
        and <TextGradient text="APIs" />
      </IconCardGroup3>

      {/* support section  */}
      <BannerWithBullets data={cloudSupportData} reversed={true} />
    </BasicLayout>
  );
};

export default CloudTechnologies;
