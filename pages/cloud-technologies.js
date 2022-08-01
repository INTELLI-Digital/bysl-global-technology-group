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

const CloudTechnologies = ({ banner }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Cloud Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Cloud Technologies"
        img={banner}
        sub="Write a success story by harnessing the infinite potential of the next-generation cloud technology utilizing the power of the internet.             "
      >
        Start Your&nbsp;
        <TextGradient text="cloud" />
        <br className="hidden md:block" />
        <TextGradient text=" journey" />
      </PrimaryBanner>

      {/* services section  */}
      <TriangleCardBanner
        type="Platforms"
        data={cloudServicesData}
        img="/images/technologies/cloud/services/services.svg"
      >
        Create new opportunities <br className="hidden xs:block" /> to make
        innovation more accessible
      </TriangleCardBanner>

      {/* features section  */}
      <IconCardGroup3 data={cloudFeaturesData} type="Features">
        Powerful control panel & APIs
      </IconCardGroup3>

      {/* support section  */}
      <BannerWithBullets data={cloudSupportData} reversed={true}>
        We <TextGradient text=" lead " /> & <TextGradient text=" support " />
        our
        <br className="hidden xs:block" /> customer&apos;s
      </BannerWithBullets>
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      banner: "/images/banners/cloud_technologies_banner.svg",
    },
  };
}

export default CloudTechnologies;
