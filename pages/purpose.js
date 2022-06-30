import { TextGradient } from "../components/shared/SharedTextgroups";
import CompanyInfoLayout from "../layouts/CompanyInfoLayout";
import { purposeButtonData } from "../public/data/buttonGroupData";
import { purposeBannerData } from "../public/data/companyInfoBannerData";
import { purposeCardData } from "../public/data/companyInfoCardData";

const CompanyPurpose = () => {
  return (
    <CompanyInfoLayout
      title="Purpose"
      bannerData={purposeBannerData}
      cardData={purposeCardData}
      buttonData={purposeButtonData}
    >
      Our purpose is to
      <TextGradient text=" Explore, Innovate and Invest " />
      for a better tomorrow.
    </CompanyInfoLayout>
  );
};

export default CompanyPurpose;
