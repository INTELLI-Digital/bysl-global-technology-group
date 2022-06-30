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
    <BasicLayout title="Food Tech">
      <PrimaryBanner
        title="Food Tech - Division"
        img="food_tech_division"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
      >
        Simplify one-stop
        <br />
        <TextGradient text="Restaurant " /> System
      </PrimaryBanner>
      <Overview4Items data={foodTechOverviewData}>
        <TextGradient text="Proficiency " />
        is only the start
      </Overview4Items>
      <ImageShowcase
        sub="Medical care systems in each nation  are battling with the issue of information siloes, implying that patients and their medical services"
        img="/images/divisions/food_tech/food_tech_delivery_app.svg"
      >
        Full Operational
        <TextGradient text=" Delivery App" />
        <br /> is Burning
      </ImageShowcase>
      <IconCardGroup4 data={foodTechAreasData}>
        We Targeted those
        <br />
        <TextGradient text="Areas" />
      </IconCardGroup4>
    </BasicLayout>
  );
};

export default FoodTech;
