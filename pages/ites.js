import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import ImageShowcase from "../components/shared/ImageShowcase";
import Overview4Items from "../components/shared/Overview4Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import { itesOverviewData, itesUpdateData } from "../public/data/itesData";
import BannerWithBullets from "../components/shared/banners/BannerWithBullets";

const ITeS = ({ banner }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="ITeS">
      {/* banner section  */}
      <PrimaryBanner
        title="ITeS Division"
        img={banner}
        sub="Navigate your journey of digital transformation through unparalleled ITeS products and services"
      >
        Digitize business with
        <br />
        <TextGradient text="Integrated technology" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={itesOverviewData} />

      {/* updates section  */}
      <BannerWithBullets data={itesUpdateData} reversed={true}>
        Creating comprehensive solutions combining
        <TextGradient text=" data, insights & technology" />
      </BannerWithBullets>

      {/* Team Management section */}
      <ImageShowcase
        img="/images/divisions/ites/ites_team_management.svg"
        sub="Applying the right strategy, structure, and necessary to build lasting relationships with clients. "
      >
        <TextGradient text="Next-gen " />
        CRM applications
        <br />
      </ImageShowcase>
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      banner: "/images/banners/ites_division_banner.svg",
    },
  };
}

export default ITeS;
