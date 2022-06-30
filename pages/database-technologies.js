import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import DatabaseFeatures from "../components/technologies_pages/database_technologies/DatabaseFeatures";
import DatabaseSolutions from "../components/technologies_pages/database_technologies/DatabaseSolutions";
import BasicLayout from "../layouts/BasicLayout";
import {
  databaseBannerData,
  databaseSolutionsData,
  managingDatabaseData,
} from "../public/data/databaseTechnologiesData";
import { TextGradient } from "../components/shared/SharedTextgroups";
import IconCardGroup3 from "../components/shared/IconCardGroup3";

const BigdataTechnologies = () => {
  return (
    <BasicLayout title="Database Technologies">
      <SecondaryLargeBanner data={databaseBannerData}>
        <TextGradient text="Database" /> Build, Connect, Deploy
      </SecondaryLargeBanner>
      <DatabaseFeatures />
      <DatabaseSolutions />
      <IconCardGroup3 data={databaseSolutionsData} type="Solutions">
        Scalable Solutions for
        <br />
        <TextGradient text="Industries" />
      </IconCardGroup3>
      <BannerWithBulletSingle data={managingDatabaseData}>
        Managing databases is easy with
        <br />
        our <TextGradient text="Solution" />
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export default BigdataTechnologies;
