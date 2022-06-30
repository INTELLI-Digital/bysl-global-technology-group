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
    <BasicLayout title="Digital Commerce">
      <PrimaryBanner
        title="Digital Commerce - Division"
        img="digital_commerce_division"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
      >
        Manage Your <TextGradient text="Sales " /> &
        <br />
        <TextGradient text="Marketing " /> Together
      </PrimaryBanner>
      <Overview4Items data={digitalCommerceOverviewData} />
      <ImageShowcase
        sub="Get a kick off on building your pages and bulletins! Pick a plan that accommodates your business needs and make it your own. Our drag and drop editors make it very simple for anybody to tweak formats like an ace."
        img="/images/divisions/digital_commerce/digital_commerce_app.svg"
      >
        Full Operational <TextGradient text=" E-Commerce" />
        <br />
        <TextGradient text="Application " />
        is Ready to Serve
      </ImageShowcase>
      <BannerWithBulletSingle
        data={digitalCommerceSolutionsData}
        reversed={true}
      >
        <TextGradient text="Automated Business " /> Solutions <br />
        when you need it.
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export default FoodTech;
