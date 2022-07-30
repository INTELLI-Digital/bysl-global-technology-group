import BannerWithBullets from "../components/shared/banners/BannerWithBullets";
import SecondaryLargeBanner from "../components/shared/banners/SecondaryLargeBanner";
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
        Centralized and integrated ERP for
        <br />
        <TextGradient text="finance " /> and <TextGradient text=" business" />
        administration
      </SecondaryLargeBanner>

      {/* Control Panel section  */}
      <IconCardGroup3 data={administrationControlPanelData}>
        Playing the <TextGradient text=" heart " /> of the
        <br />
        organization
      </IconCardGroup3>

      {/* Financial Management section  */}
      <BannerWithBullets data={administrationMangementData}>
        Financial <TextGradient text="Management" />
      </BannerWithBullets>

      {/* Workpalce section  */}
      <BannerWithBullets data={workplaceBannerData} reversed={true} />
    </BasicLayout>
  );
};

export default Administration;
