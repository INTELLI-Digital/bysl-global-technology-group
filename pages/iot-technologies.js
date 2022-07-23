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
          sub="Next-generation IOT technologies using data, sensors and connectivity  "
        >
          <TextGradient text="Interconnectivity " /> <br />
          of smart devices
        </PrimaryBanner>

        {/* services section  */}
        <Overview3Items data={iotServicesData} type="Platforms">
          Joining the IoT revolution
          <br />
          with smart <TextGradient text=" connectivity" />
        </Overview3Items>
      </div>

      {/* App Development section  */}
      <div className="bg-blue-300">
        <div className="box">
          <TextBanner data={iotAppDevelopmentBannerData}>
            Catering to the most demanding
            <br className="hidden xxs:block lg:hidden xl:block" />
            <TextGradient text=" IoT software" /> needs
          </TextBanner>
        </div>
      </div>

      <div className="box">
        {/* solutions section  */}
        <TriangleCardBanner
          type="Applications"
          data={iotSolutionsData}
          img="/images/technologies/iot/solutions/iot_solutions_banner.svg"
          reversed={true}
          padding={true}
        >
          Full system <TextGradient text=" design " /> and
          <br />
          <TextGradient text="development" />
        </TriangleCardBanner>

        {/* innovative solution section  */}
        <BannerWithBullets data={iotSupportData} reversed={true}>
          Introducing <TextGradient text=" innovative " /> &
          <TextGradient text=" pragmatic " />
          solutions to old problems
        </BannerWithBullets>
      </div>
    </BasicLayout>
  );
};

export default IotTechnologies;
