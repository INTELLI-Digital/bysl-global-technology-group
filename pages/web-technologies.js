import FeaturedBanner from "../components/shared/banners/FeaturedBanner";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextBanner } from "../components/shared/banners/SharedBanner";
import Overview4Items from "../components/shared/Overview4Items";
import RowSpanGrid from "../components/shared/RowSpanGrid";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import {
  businessValuesData,
  webBannerData,
  webFeaturesData,
  webProcessData,
  webServicesBannerData,
} from "../public/data/webTechnologiesData";

const WebTechnologies = ({
  banner,
  businessValues,
  webServicesBanner,
  webProcess,
  webFeatures,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Web Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Web Technologies"
        sub="Unlock the true potential of your business using cutting-edge web technologies. "
        img={banner}
      >
        <TextGradient text="Powerful " />
        web solutions to scale exponentially
      </PrimaryBanner>

      {/* business values section  */}
      <RowSpanGrid data={businessValues}>
        Flexible, secure & dynamic
        <br />
        <TextGradient text=" web soloutions " />
      </RowSpanGrid>

      {/* services section  */}
      <TextBanner data={webServicesBanner}>
        Create impact <TextGradient text=" unlocking " /> the
        <TextGradient text=" power " /> of web technologies
      </TextBanner>

      {/* process section  */}
      <Overview4Items
        type="Continuous Development"
        data={webProcess}
        large={true}
      >
        A never-ending <TextGradient text=" persuit" />
      </Overview4Items>

      {/* features section  */}
      <FeaturedBanner data={webFeatures}>
        Advanced features serving
        <TextGradient text=" specific busniess needs " />
      </FeaturedBanner>
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      banner: webBannerData,
      businessValues: businessValuesData,
      webServicesBanner: webServicesBannerData,
      webProcess: webProcessData,
      webFeatures: webFeaturesData,
    },
  };
}

export default WebTechnologies;
