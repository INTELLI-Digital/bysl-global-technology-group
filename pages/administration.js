import BannerWithBullets from "../components/shared/banners/BannerWithBullets";
import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
import { TextBanner } from "../components/shared/banners/SharedBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import {
  administrationBannerData,
  administrationControlPanelData,
  administrationMangementData,
  workplaceBannerData,
} from "../public/data/administrationData";

const Administration = () => {
  return (
    <BasicLayout title="Administration">
      <SecondaryLargeBanner data={administrationBannerData}>
        Integrated, Smart, Customizable
        <br />
        <TextGradient text="Administration Software" />
      </SecondaryLargeBanner>
      <IconCardGroup3 data={administrationControlPanelData}>
        Powerful Control <TextGradient text="Panel" />
        <br />
        and <TextGradient text="APIs" />
      </IconCardGroup3>
      <BannerWithBullets data={administrationMangementData}>
        Financial <TextGradient text="Management" />
      </BannerWithBullets>
      <TextBanner data={workplaceBannerData} reversed={true}>
        Manage your Workpalce
        <TextGradient text=" Anywhere" />
      </TextBanner>
    </BasicLayout>
  );
};

export default Administration;
