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
import Overview4Items from "../components/shared/Overview4Items";

const InformationSecurity = ({ banner }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Information Security" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="Information Security - Division"
          img={banner}
          sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        >
          Managing information with
          <TextGradient text=" confidentiality, integrity " /> &
          <TextGradient text=" availability" />
        </PrimaryBanner>

        {/* overview section  */}
        <Overview4Items data={informationSecurityOverviewData} />
      </div>

      {/* services section  */}
      <div className="pt-10 xl:pt-16 bg-blue-300">
        <div className="box">
          <BannerWithBullets
            data={informationSecurityServicesData}
            reversed={true}
          >
            <TextGradient text="Masterful engineering " /> for higher control,
            improved security and against devaluation of information
          </BannerWithBullets>
        </div>
      </div>

      {/* shortcomings section  */}
      <div className="box">
        <BannerWithBulletSingle data={informationSecurityShortcomingsData}>
          Offering improved <TextGradient text=" systemic efficacy " /> through
          a holistic infosec framework
        </BannerWithBulletSingle>
      </div>
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      banner: "/images/banners/information_security_division_banner.svg",
    },
  };
}

export default InformationSecurity;
