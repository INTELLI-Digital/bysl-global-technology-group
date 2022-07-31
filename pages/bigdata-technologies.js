import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import Overview3Items from "../components/shared/Overview3Items";
import Overview4Items from "../components/shared/Overview4Items";
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
          <TextGradient text="Big Data " /> & <TextGradient text=" Analytics" />
        </SecondaryLargeBanner>
      </div>

      {/* overview section  */}
      <div className="bg-[#ECF1F8] mb-10 xl:mb-16">
        <div className="box">
          <Overview4Items data={bigdataOverviewData} />
        </div>
      </div>

      {/* WhyBigdata section  */}
      <div className="box">
        <WhyBigdata />
        {/* services section  */}
        <BigdataServices />

        {/* features section  */}
        <IconCardGroup3 data={bigdataFeaturesData} type="Features">
          Multi-faceted use of Big Data
        </IconCardGroup3>
      </div>
    </BasicLayout>
  );
};

export default BigdataTechnologies;
//
