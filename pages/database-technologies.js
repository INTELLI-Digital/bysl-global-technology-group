import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
import DatabaseFeatures from "../components/technologies_pages/database_technologies/DatabaseFeatures";
import BasicLayout from "../layouts/BasicLayout";
import {
  databaseBannerData,
  databaseSolutionsData,
  managingDatabaseData,
} from "../public/data/databaseTechnologiesData";
import { TextGradient } from "../components/shared/SharedTextgroups";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import BannerWithBullets from "../components/shared/banners/BannerWithBullets";

const BigdataTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Database Technologies">
      {/* banner section  */}
      <SecondaryLargeBanner data={databaseBannerData}>
        <TextGradient text="Database" />: Build, Connect, Deploy
      </SecondaryLargeBanner>

      {/* features section  */}
      <DatabaseFeatures />

      {/* Solutions section  */}
      <IconCardGroup3 data={databaseSolutionsData} type="Solutions">
        Increased productivity for
        <br />
        developers & data
      </IconCardGroup3>

      {/* Managing databases section  */}
      <BannerWithBullets data={managingDatabaseData}>
        Managing databases with
        <br /> top-tier solutions
      </BannerWithBullets>
    </BasicLayout>
  );
};

export default BigdataTechnologies;
