import { TextGradient } from "../components/shared/SharedTextgroups";
import CompanyInfoLayout from "../layouts/CompanyInfoLayout";
import { cultureButtonData } from "../public/data/buttonGroupData";
import { cultureBannerData } from "../public/data/companyInfoBannerData";
import { cultureCardData } from "../public/data/companyInfoCardData";

const CompanyCulture = () => {
  return (
    <CompanyInfoLayout
      title="Culture"
      bannerData={cultureBannerData}
      cardData={cultureCardData}
      buttonData={cultureButtonData}
    >
      Our mission is to serve the world with exceptional
      <TextGradient text=" Products & Services" />
    </CompanyInfoLayout>
  );
};

export default CompanyCulture;
