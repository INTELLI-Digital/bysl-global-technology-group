import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import IconCardGroup4 from "../components/shared/IconCardGroup4";
import ImageShowcase from "../components/shared/ImageShowcase";
import Overview4Items from "../components/shared/Overview4Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import {
  foodTechAreasData,
  foodTechOverviewData,
} from "../public/data/foodTechData";

const FoodTech = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Food Tech">
      {/* banner section  */}
      <PrimaryBanner
        title="Food Tech - Division"
        img="food_tech_division"
        sub="Multi-platform tech integration to digitize operations and supply chain of food service industry"
      >
        Revolutionizing the <TextGradient text=" food service industry " /> with
        advanced
        <TextGradient text=" tech" />
      </PrimaryBanner>

      {/* overview section  */}
      <Overview4Items data={foodTechOverviewData}>
        Tech-based catering
        <br />
        to maximize efficiency
      </Overview4Items>

      {/* app section  */}
      <ImageShowcase
        sub="Intuitively designed applications aimed to simplify your food journey."
        img="/images/divisions/food_tech/food_tech_delivery_app.svg"
      >
        Outstanding experience
        <br />
        of food surfing
      </ImageShowcase>

      {/* areas section  */}
      <IconCardGroup4 data={foodTechAreasData}>
        We provide advanced
        <br />
        systems
      </IconCardGroup4>
    </BasicLayout>
  );
};

export default FoodTech;
