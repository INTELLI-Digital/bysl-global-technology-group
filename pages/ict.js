import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import PowerfulProducts from "../components/divisions_pages/ict/PowerfulProducts";
import Overview4Items from "../components/shared/Overview4Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import BasicLayout from "../layouts/BasicLayout";
import {
  erpBannerData,
  ictSectorsData,
  ictSolutionsData,
} from "../public/data/ictData";
import { TextBanner } from "../components/shared/banners/SharedBanner";

const ICT = ({ banner }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="ICT">
      {/* banner section  */}
      <PrimaryBanner
        title="ICT Division"
        img={banner}
        sub="Looking to build a future that makes a difference in the world of buisiness and create opportunities with next-gen ICT products and services.  "
      >
        Lead breakthroughs with a complete
        <TextGradient text=" ICT ecosystem" />
      </PrimaryBanner>

      {/* sectors section  */}
      <Overview4Items data={ictSectorsData}>
        Development that
        <br />
        <TextGradient text="Creates " /> an
        <TextGradient text=" Impact" />
      </Overview4Items>

      {/* erp section  */}
      <TextBanner data={erpBannerData} reversed={true}>
        Rising as a Global Leader in
        <br />
        <TextGradient text="ERP Infrastructure" />
      </TextBanner>

      {/* Powerful product section  */}
      <PowerfulProducts />

      {/* Solutions section  */}
      <BannerWithBulletSingle data={ictSolutionsData} reversed={true}>
        All kind of <TextGradient text=" ICT Solutions " />
        at One Place
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      banner: "/images/banners/ict_division_banner.svg",
    },
  };
}

export default ICT;
