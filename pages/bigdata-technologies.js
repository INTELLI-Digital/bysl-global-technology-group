import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BigdataOverview from "../components/technologies_pages/bigdata_technologies/BigdataOverview";
import BigdataServices from "../components/technologies_pages/bigdata_technologies/BigdataServices";
import WhyBigdata from "../components/technologies_pages/bigdata_technologies/WhyBigdata";
import BasicLayout from "../layouts/BasicLayout";
import {
  bigdataBannerData,
  bigdataFeaturesData,
} from "../public/data/bigdataTechnologiesData";

const BigdataTechnologies = () => {
  return (
    <BasicLayout title="Big Data Technologies" noMargin={true}>
      <div className="box">
        <SecondaryLargeBanner data={bigdataBannerData}>
          <TextGradient text="Big Data" /> & Analytics
        </SecondaryLargeBanner>
        <BigdataOverview />
      </div>
      <WhyBigdata />
      <div className="box">
        <BigdataServices />
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
