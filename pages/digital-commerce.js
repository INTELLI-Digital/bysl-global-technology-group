import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import ImageShowcase from "../components/shared/ImageShowcase";
import Overview4Items from "../components/shared/Overview4Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import BasicLayout from "../layouts/BasicLayout";
import {
  digitalCommerceOverviewData,
  digitalCommerceSolutionsData,
} from "../public/data/digitalCommerceData";

const FoodTech = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Digital Commerce">
      {/* banner section  */}
      <PrimaryBanner
        title="Digital Commerce - Division"
        img="digital_commerce_division"
        sub="Transforming the way businesses engage, interact, transact and serve in the multi-channel landscape with integrated applications on top of existing complex frameworks that adjust and scale to the dynamic business needs. "
      >
        Manage your <TextGradient text=" sales " /> &
        <br />
        <TextGradient text="marketing " /> together
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={digitalCommerceOverviewData} />

      {/* e-commerce app section  */}
      <ImageShowcase
        sub="Ever-evolving smart applications to securely engage, interact, converse, transact & operate across platforms to deliver value."
        img="/images/divisions/digital_commerce/digital_commerce_app.svg"
      >
        Cutting edge e-commerece applications
        <br />
        ready to serve
      </ImageShowcase>

      {/* solutions section  */}
      <BannerWithBulletSingle
        data={digitalCommerceSolutionsData}
        reversed={true}
      >
        Conferring a <TextGradient text=" continuum " /> of
        <TextGradient text=" possibilities " /> for businesses with
        <TextGradient text=" AI-driven automation" />
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export default FoodTech;
