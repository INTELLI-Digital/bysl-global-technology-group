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
    <BasicLayout title="Cloud Technologies">
      <PrimaryBanner
        title="Cloud Technologies"
        img="cloud_technologies"
        sub="BYSL Global Technology Group stands on four core values regarded as the fundamental ideological constants to govern the organization."
      >
        Start Your&nbsp;
        <TextGradient text="Cloud Journey" />
        &nbsp;Here
      </PrimaryBanner>
      <TriangleCardBanner
        type="Services"
        data={cloudServicesData}
        img="/images/technologies/cloud/services/services.svg"
      >
        Best soluation with required
        <br />
        <TextGradient text="Services" />
      </TriangleCardBanner>
      <IconCardGroup3 data={cloudFeaturesData} type="Features">
        Powerful Control <TextGradient text="Panel" />
        <br />
        and <TextGradient text="APIs" />
      </IconCardGroup3>
      <BannerWithBullets data={cloudSupportData} reversed={true} />
    </BasicLayout>
  );
};

export default CloudTechnologies;
