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
          sub="We understand, analyze and harness the power of data using the best of data science and drive growth for enterprizes."
        >
          Translating data into key growth factors
        </PrimaryBanner>

        {/* control panel section  */}
        <IconCardGroup3 data={dataScienceControlPanelData}>
          AI/ML-based
          <br />
          application development
        </IconCardGroup3>
      </div>

      {/* data analysis section  */}
      <div className="bg-[#ECF1F8]">
        <div className="box">
          <ImageShowcase img="/images/divisions/data_science/data_analysis_banner.svg">
            Sales forecasting with
            <br />
            big data analytics
          </ImageShowcase>
        </div>
      </div>

      {/* real time data analysis section  */}
      <div className="box">
        <FeaturedBanner data={dataScienceAnalysisData}>
          Real-time data analytics
        </FeaturedBanner>
      </div>
    </BasicLayout>
  );
};

export default DataScience;
