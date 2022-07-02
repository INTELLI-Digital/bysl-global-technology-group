import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import Overview3Items from "../components/shared/Overview3Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BigdataServices from "../components/technologies_pages/bigdata_technologies/BigdataServices";
import WhyBigdata from "../components/technologies_pages/bigdata_technologies/WhyBigdata";
import BasicLayout from "../layouts/BasicLayout";
import {
  bigdataBannerData,
  bigdataFeaturesData,
  bigdataOverviewData,
} from "../public/data/bigdataTechnologiesData";

const BigdataTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Big Data Technologies" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <SecondaryLargeBanner data={bigdataBannerData}>
          <TextGradient text="Big Data" /> & Analytics
        </SecondaryLargeBanner>

        {/* overview section  */}
        <Overview3Items data={bigdataOverviewData} />
      </div>

      {/* WhyBigdata section  */}
      <WhyBigdata />
      <div className="box">
        {/* services section  */}
        <BigdataServices />

        {/* features section  */}
        <IconCardGroup3 data={bigdataFeaturesData} type="Features">
          Powerful Control <TextGradient text="Panel" />
          <br />
          and <TextGradient text="APIs" />
        </IconCardGroup3>
      </div>
    </BasicLayout>
  );
};

export default BigdataTechnologies;
