import Footer from "../components/navigation/Footer";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";
import CompanySummary from "../components/shared/CompanySummary";
import IconCardGroup4 from "../components/shared/IconCardGroup4";
import PageTitle from "../components/shared/PageTitle";
import { TextGradient } from "../components/shared/SharedTextgroups";
import ARVRBanner from "../components/technologies_pages/ar_vr_technologies/ARVRBanner";
import ARVRFeatures from "../components/technologies_pages/ar_vr_technologies/ARVRFeatures";
import HowItWorks from "../components/technologies_pages/ar_vr_technologies/HowItWorks";
import {
  arVrServicesData,
  arVrWorldData,
} from "../public/data/arVrTechnologiesData";

const ARVRTechnologies = () => {
  return (
    <div className="bg-gray-50">
      <PageTitle title="AR/VR Technologies" />
      <ResponsiveNavbar />
      <ARVRBanner />
      <div className="box">
        <IconCardGroup4 data={arVrServicesData} type="Services">
          Discover The <TextGradient text="Reality" />
          <br />
          As You Like
        </IconCardGroup4>
        <TriangleCardBanner
          data={arVrWorldData}
          img="/images/technologies/ar_vr/ar_vr_services.gif"
          black={true}
          padding={true}
        >
          Building your Own <TextGradient text="World" />
          <br />
          With us
        </TriangleCardBanner>

        <ARVRFeatures />
        <HowItWorks />
        <CompanySummary />
      </div>
      <Footer />
    </div>
  );
};

export default ARVRTechnologies;
 