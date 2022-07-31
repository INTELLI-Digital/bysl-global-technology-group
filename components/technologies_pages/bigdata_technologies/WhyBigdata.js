import { whyBigdataData } from "../../../public/data/bigdataTechnologiesData";
import BannerWithBullets from "../../shared/banners/BannerWithBullets";
import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../../shared/SharedTextgroups";

const WhyBigdata = () => {
  return (
    <div className="pt-10 xl:pt-16">
      <div className="mb-10 xl:mb-16">
        <TechnologiesSectionTitle>Why Big Data?</TechnologiesSectionTitle>
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
  );
};

export default WhyBigdata;
