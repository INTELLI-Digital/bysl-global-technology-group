import { TextGradient } from "../components/shared/SharedTextgroups";
import CompanyInfoLayout from "../layouts/CompanyInfoLayout";
import { valuesButtonData } from "../public/data/buttonGroupData";
import { valuesBannerData } from "../public/data/companyInfoBannerData";
import { valuesCardData } from "../public/data/companyInfoCardData";

const CompanyValues = () => {
  return (
    <CompanyInfoLayout
      title="Values"
      bannerData={valuesBannerData}
      cardData={valuesCardData}
      buttonData={valuesButtonData}
    >
      Our core values are our
      <TextGradient text=" Constants " />
      our
      <TextGradient text=" Guidelines " />
      for everything we do.
    </CompanyInfoLayout>
  );
};

export default CompanyValues;
