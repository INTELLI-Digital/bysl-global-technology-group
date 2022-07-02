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
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Administration">
      {/* banner section  */}
      <SecondaryLargeBanner data={administrationBannerData}>
        Integrated, Smart, Customizable
        <br />
        <TextGradient text="Administration Software" />
      </SecondaryLargeBanner>

      {/* Control Panel section  */}
      <IconCardGroup3 data={administrationControlPanelData}>
        Powerful Control <TextGradient text="Panel" />
        <br />
        and <TextGradient text="APIs" />
      </IconCardGroup3>

      {/* Financial Management section  */}
      <BannerWithBullets data={administrationMangementData}>
        Financial <TextGradient text="Management" />
      </BannerWithBullets>

      {/* Workpalce section  */}
      <TextBanner data={workplaceBannerData} reversed={true}>
        Manage your Workpalce
        <TextGradient text=" Anywhere" />
      </TextBanner>
    </BasicLayout>
  );
};

export default Administration;
