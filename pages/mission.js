import { TextGradient } from "../components/shared/SharedTextgroups";
import CompanyInfoLayout from "../layouts/CompanyInfoLayout";
import { missionButtonData } from "../public/data/buttonGroupData";
import { missionBannerData } from "../public/data/companyInfoBannerData";
import { missionCardData } from "../public/data/companyInfoCardData";

const CompanyMission = () => {
  return (
    <CompanyInfoLayout
      title="Mission"
      bannerData={missionBannerData}
      cardData={missionCardData}
      buttonData={missionButtonData}
    >
      Our mission is to serve the world with exceptional
      <TextGradient text=" Products & Services" />
    </CompanyInfoLayout>
  );
};

export default CompanyMission;
