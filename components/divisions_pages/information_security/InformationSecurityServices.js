import { informationSecurityServicesData } from "../../../public/data/informationSecurityData";
import BannerWithBullets from "../../shared/banners/BannerWithBullets";
import { TextGradient } from "../../shared/SharedTextgroups";

const InformationSecurityServices = () => {
  return (
    <div className="pt-10 xl:pt-16 bg-blue-300">
      <div className="box">
        <BannerWithBullets
          data={informationSecurityServicesData}
          reversed={true}
        >
          Overseen <TextGradient text="Security Services " />
          with a
          <br />
          Difference
        </BannerWithBullets>
      </div>
    </div>
  );
};

export default InformationSecurityServices;
