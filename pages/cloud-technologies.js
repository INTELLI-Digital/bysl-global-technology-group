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
        sub="Write a success story by harnessing the infinite potential of the next-generation cloud technology utilizing the power of the internet.             "
      >
        Start Your&nbsp;
        <TextGradient text="Cloud" />
        <br className="hidden md:block" />
        <TextGradient text=" Journey" />
      </PrimaryBanner>

      {/* services section  */}
      <TriangleCardBanner
        type="Platforms"
        data={cloudServicesData}
        img="/images/technologies/cloud/services/services.svg"
      >
        Create new opportunities <br className="hidden xs:block" /> to make
        <TextGradient text=" innovation " />
        more <TextGradient text=" accessible" />
      </TriangleCardBanner>

      {/* features section  */}
      <IconCardGroup3 data={cloudFeaturesData} type="Features">
        Powerful Control <TextGradient text="Panel" />
        <br />
        and <TextGradient text="APIs" />
      </IconCardGroup3>

      {/* support section  */}
      <BannerWithBullets data={cloudSupportData} reversed={true}>
        We Lead & Support our
        <br className="hidden xs:block" /> Customer&apos;s
        <TextGradient text=" Cloud" />
      </BannerWithBullets>
    </BasicLayout>
  );
};

export default CloudTechnologies;
