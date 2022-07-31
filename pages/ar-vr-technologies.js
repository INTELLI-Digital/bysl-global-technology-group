import FeaturedBanner from "../components/shared/banners/FeaturedBanner";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import ImageShowcase from "../components/shared/ImageShowcase";
import { TextGradient } from "../components/shared/SharedTextgroups";
import ARVRBanner from "../components/technologies_pages/ar_vr_technologies/ARVRBanner";
import BasicLayout from "../layouts/BasicLayout";
import {
  arVrFeaturesData,
  arVrServicesData,
  arVrWorldData,
} from "../public/data/arVrTechnologiesData";

const ARVRTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="AR/VR Technologies" noMargin={true}>
      {/* banner section  */}
      <ARVRBanner />

      <div className="box">
        {/* services section  */}
        <IconCardGroup3 data={arVrServicesData} type="Applications">
          Create immersive worlds
        </IconCardGroup3>

        {/* Own World section  */}
        <TriangleCardBanner
          type="Research & Development"
          data={arVrWorldData}
          black={true}
          padding={true}
        >
          Building your own world with us
        </TriangleCardBanner>

        {/* features section  */}
        <FeaturedBanner data={arVrFeaturesData}>
          Interactive VR Studio
        </FeaturedBanner>

        {/* How does it works */}
        <ImageShowcase video="/images/technologies/ar_vr/demo.mp4">
          How does it <TextGradient text="works" />?
        </ImageShowcase>
      </div>
    </BasicLayout>
  );
};

export default ARVRTechnologies;
