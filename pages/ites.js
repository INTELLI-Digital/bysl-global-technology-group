import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import ImageShowcase from "../components/shared/ImageShowcase";
import Overview4Items from "../components/shared/Overview4Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import BasicLayout from "../layouts/BasicLayout";
import { itesOverviewData, itesUpdateData } from "../public/data/itesData";

const ITeS = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="ITeS">
      {/* banner section  */}
      <PrimaryBanner
        title="IT Enabled Service - Division"
        img="ites_division"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
      >
        Building future with
        <br />
        <TextGradient text="Gear " />&<TextGradient text=" Software" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={itesOverviewData} />

      {/* updates section  */}
      <BannerWithBulletSingle data={itesUpdateData} reversed={true} />

      {/* Team Management section */}
      <ImageShowcase img="/images/divisions/ites/ites_team_management.svg">
        Team Management is <TextGradient text="Easy" />
        <br /> and
        <TextGradient text=" Trustworthy" />
      </ImageShowcase>
    </BasicLayout>
  );
};

export default ITeS;
