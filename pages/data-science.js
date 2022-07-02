import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import {
  dataScienceAnalysisData,
  dataScienceControlPanelData,
} from "../public/data/dataScienceData";
import ImageShowcase from "../components/shared/ImageShowcase";
import FeaturedBanner from "../components/shared/banners/FeaturedBanner";

const DataScience = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Data Science" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <PrimaryBanner
          title="Data Science - Division"
          img="data_science_division"
          sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        >
          <TextGradient text="Data Science" />&
          <br />
          Analytics System
        </PrimaryBanner>

        {/* control panel section  */}
        <IconCardGroup3 data={dataScienceControlPanelData}>
          Powerful Control <TextGradient text="Panel" />
          <br />
          and <TextGradient text="APIs" />
        </IconCardGroup3>
      </div>

      {/* data analysis section  */}
      <div className="bg-blue-300">
        <div className="box">
          <ImageShowcase img="/images/divisions/data_science/data_analysis_banner.svg">
            Sales Automation with Big
            <br />
            <TextGradient text="Data Analytics" />
          </ImageShowcase>
        </div>
      </div>

      {/* real time data analysis section  */}
      <div className="box">
        <FeaturedBanner data={dataScienceAnalysisData}>
          We Provide Real Time
          <br />
          <TextGradient text="Data Analytics" />
        </FeaturedBanner>
      </div>
    </BasicLayout>
  );
};

export default DataScience;
