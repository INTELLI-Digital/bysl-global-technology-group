import FeaturedBanner from "../components/shared/banners/FeaturedBanner";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextBanner } from "../components/shared/banners/SharedBanner";
import Overview4Items from "../components/shared/Overview4Items";
import RowSpanGrid from "../components/shared/RowSpanGrid";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import {
  businessValuesData,
  webFeaturesData,
  webProcessData,
  webServicesBannerData,
} from "../public/data/webTechnologiesData";

const WebTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Web Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Web Technologies"
        img="web_technologies"
        sub="BYSL Global Technology Group stands on four core values regarded as
            the fundamental ideological constants to govern the organization."
      >
        Powerful solutions for Your&nbsp;
        <TextGradient text="Business" />
      </PrimaryBanner>

      {/* business values section  */}
      <RowSpanGrid data={businessValuesData}>
        Best Web Technologies Grow <br />
        <TextGradient text="Business Values" />
      </RowSpanGrid>

      {/* services section  */}
      <TextBanner data={webServicesBannerData}>
        Best soluation with required
        <TextGradient text=" Services" />
      </TextBanner>

      {/* process section  */}
      <Overview4Items type="Process" data={webProcessData} large={true}>
        Good <TextGradient text="Process " />
        Drives
        <br />
        Good <TextGradient text=" Results" />
      </Overview4Items>

      {/* features section  */}
      <FeaturedBanner data={webFeaturesData}>
        Powerful Solutions for Your
        <TextGradient text=" Business " />
        Needs
      </FeaturedBanner>
    </BasicLayout>
  );
};

export default WebTechnologies;
