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

const ICT = () => {
  return (
    <BasicLayout title="ICT">
      <PrimaryBanner
        title="Information & Communication Technologies - Division"
        img="ict_division"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
      >
        Employ tech to drive a
        <br />
        <TextGradient text="Superior" /> Experiences
      </PrimaryBanner>
      <Overview4Items data={ictSectorsData}>
        We are Experts in all
        <br />
        Those <TextGradient text="Sectors" />
      </Overview4Items>
      <TextBanner data={erpBannerData} reversed={true}>
        <div className="3xl:w-11/12">
          Wide range of <TextGradient text="ERP " />
          Application
        </div>
      </TextBanner>
      <PowerfulProducts />
      <BannerWithBulletSingle data={ictSolutionsData} reversed={true}>
        All kind of <TextGradient text=" ICT Solutions " />
        at One Place
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export default ICT;
