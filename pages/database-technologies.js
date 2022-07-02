import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import DatabaseFeatures from "../components/technologies_pages/database_technologies/DatabaseFeatures";
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
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Database Technologies">
      {/* banner section  */}
      <SecondaryLargeBanner data={databaseBannerData}>
        <TextGradient text="Database" /> Build, Connect, Deploy
      </SecondaryLargeBanner>

      {/* features section  */}
      <DatabaseFeatures />

      {/* Solutions section  */}
      <IconCardGroup3 data={databaseSolutionsData} type="Solutions">
        Scalable Solutions for
        <br />
        <TextGradient text="Industries" />
      </IconCardGroup3>

      {/* Managing databases section  */}
      <BannerWithBulletSingle data={managingDatabaseData}>
        Managing databases is easy with
        <br />
        our <TextGradient text="Solution" />
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export default BigdataTechnologies;
