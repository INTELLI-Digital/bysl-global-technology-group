import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import InformationSecurityServices from "../components/divisions_pages/information_security/InformationSecurityServices";
import Overview3Items from "../components/shared/Overview3Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import BasicLayout from "../layouts/BasicLayout";
import {
  informationSecurityOverviewData,
  informationSecurityShortcomingsData,
} from "../public/data/informationSecurityData";

const InformationSecurity = () => {
  return (
    <BasicLayout title="Information Security" noMargin={true}>
      <div className="box">
        <PrimaryBanner
          title="Information Security - Division"
          img="information_security_division"
          sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        >
          Your Data Security is
          <br />
          our <TextGradient text="Priority" />
        </PrimaryBanner>
        <Overview3Items data={informationSecurityOverviewData} />
      </div>
      <InformationSecurityServices />
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
