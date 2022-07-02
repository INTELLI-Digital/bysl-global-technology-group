import BannerWithBullets from "../components/shared/banners/BannerWithBullets";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextBanner } from "../components/shared/banners/SharedBanner";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";
import Overview3Items from "../components/shared/Overview3Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import {
  iotAppDevelopmentBannerData,
  iotServicesData,
  iotSolutionsData,
  iotSupportData,
} from "../public/data/iotTechnologiesData";

const IotTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IOT Technologies" noMargin={true}>
      <div className="box">
        {/* banner section  */}
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

        {/* services section  */}
        <Overview3Items data={iotServicesData} type="Services">
          Incredible <TextGradient text="Service" />,
          <br />
          Incredible <TextGradient text="right" />
        </Overview3Items>
      </div>

      {/* App Development section  */}
      <div className="bg-blue-300">
        <div className="box">
          <TextBanner data={iotAppDevelopmentBannerData}>
            App <TextGradient text="Development" /> for Connected
            <TextGradient text=" Devices" />
          </TextBanner>
        </div>
      </div>

      <div className="box">
        {/* solutions section  */}
        <TriangleCardBanner
          type="Solutions"
          data={iotSolutionsData}
          img="/images/technologies/iot/solutions/iot_solutions_banner.svg"
          reversed={true}
          padding={true}
        >
          Smart Solutions in Full
          <br />
          <TextGradient text="System Design." />
        </TriangleCardBanner>

        {/* innovative solution section  */}
        <BannerWithBullets data={iotSupportData}>
          We Create innovative solution that works
          <TextGradient text=" Pragmatically" />
        </BannerWithBullets>
      </div>
    </BasicLayout>
  );
};

export default IotTechnologies;
