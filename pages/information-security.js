import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import Overview3Items from "../components/shared/Overview3Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import BasicLayout from "../layouts/BasicLayout";
import {
  informationSecurityOverviewData,
  informationSecurityServicesData,
  informationSecurityShortcomingsData,
} from "../public/data/informationSecurityData";
import BannerWithBullets from "../components/shared/banners/BannerWithBullets";

const InformationSecurity = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Information Security" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="Information Security - Division"
          img="information_security_division"
          sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        >
          Your Data Security is
          <br />
          our <TextGradient text="Priority" />
        </PrimaryBanner>

        {/* overview section  */}
        <Overview3Items data={informationSecurityOverviewData} />
      </div>

      {/* services section  */}
      <div className="pt-10 xl:pt-16 bg-blue-300">
        <div className="box">
          <BannerWithBullets
            data={informationSecurityServicesData}
            reversed={true}
          >
            Overseen <TextGradient text="Security Services " />
            with a
            <br />
            Difference
          </BannerWithBullets>
        </div>
      </div>

      {/* shortcomings section  */}
      <div className="box">
        <BannerWithBulletSingle data={informationSecurityShortcomingsData}>
          Track Down your <TextGradient text="Shortcomings" />
          <br />
          before Hackers do
        </BannerWithBulletSingle>
      </div>
    </BasicLayout>
  );
};

export default InformationSecurity;
