import FeaturedBanner from "../components/shared/banners/FeaturedBanner";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";
import IconCardGroup4 from "../components/shared/IconCardGroup4";
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
        <IconCardGroup4 data={arVrServicesData} type="Applications">
          Recreate <TextGradient text=" reality " /> the way you like it
        </IconCardGroup4>

        {/* Own World section  */}
        <TriangleCardBanner
          type="Research & Development"
          data={arVrWorldData}
          img="/images/technologies/ar_vr/ar_vr_services.gif"
          black={true}
          padding={true}
        >
          Building your Own <TextGradient text="World" />
          <br />
          With us
        </TriangleCardBanner>

        {/* features section  */}
        <FeaturedBanner data={arVrFeaturesData}>
          <TextGradient text="Interactive " /> VR Studio
        </FeaturedBanner>

        {/* How does it works */}
        <ImageShowcase img="/images/technologies/ar_vr/ar_vr_slider.gif">
          How does it <TextGradient text="works" />?
        </ImageShowcase>
      </div>
    </BasicLayout>
  );
};

export default ARVRTechnologies;
