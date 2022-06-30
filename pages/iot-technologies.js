import BannerWithBullets from "../components/shared/banners/BannerWithBullets";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import Overview3Items from "../components/shared/Overview3Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import IOTAppDevelopment from "../components/technologies_pages/iot_technologies/IOTAppDevelopment";
import IOTSolutions from "../components/technologies_pages/iot_technologies/IOTSolutions";
import BasicLayout from "../layouts/BasicLayout";
import {
  iotServicesData,
  iotSupportData,
} from "../public/data/iotTechnologiesData";

const IotTechnologies = () => {
  return (
    <BasicLayout title="IOT Technologies" noMargin={true}>
      <div className="box">
        <PrimaryBanner
          title="IOT Technologies"
          img="iot_technologies"
          sub="A smart house or office with advance features that you can control a mobile application.
        And save the power consumption at your place"
        >
          Control your <br />
          <TextGradient text="Home" />
          &nbsp;or <TextGradient text="Office" />
        </PrimaryBanner>
        <Overview3Items data={iotServicesData} type="Services">
          Incredible <TextGradient text="Service" />,
          <br />
          Incredible <TextGradient text="right" />
        </Overview3Items>
      </div>
      <IOTAppDevelopment />
      <div className="box">
        <IOTSolutions />
        <BannerWithBullets data={iotSupportData}>
          We Create innovative solution that works
          <TextGradient text=" Pragmatically" />
        </BannerWithBullets>
      </div>
    </BasicLayout>
  );
};

export default IotTechnologies;
