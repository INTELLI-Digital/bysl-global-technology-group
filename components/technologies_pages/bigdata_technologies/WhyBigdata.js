import { whyBigdataData } from "../../../public/data/bigdataTechnologiesData";
import BannerWithBullets from "../../shared/banners/BannerWithBullets";
import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const WhyBigdata = () => {
  return (
    <div className="pt-10 xl:pt-16 bg-blue-300">
      <div className="box">
        <div className="mb-10 xl:mb-16">
          <TechnologiesSectionTitle>
            Why <TextGradient text="Big Data" />?
          </TechnologiesSectionTitle>
        </div>
        {whyBigdataData.map((item) => (
          <BannerWithBullets
            key={item.id}
            data={item}
            reversed={item.reversed}
            group={true}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyBigdata;
