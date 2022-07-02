import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextBanner } from "../components/shared/banners/SharedBanner";
import IconCardGroup3 from "../components/shared/IconCardGroup3";
import ImageShowcase from "../components/shared/ImageShowcase";
import RowSpanGrid from "../components/shared/RowSpanGrid";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";
import {
  blockchainFeaturesData,
  blockchainHealthBannerData,
  blockchainServicesData,
} from "../public/data/blockchainTechnologiesData";

const BlockchainTechnologies = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Blockchain Technologies">
      {/* banner section  */}
      <PrimaryBanner
        title="Blockchain Technologies"
        img="blockchain_technologies"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
      >
        Blockchain for <TextGradient text="Flexibility" /> &&nbsp;
        <TextGradient text="Security" />
      </PrimaryBanner>

      {/* features section  */}
      <RowSpanGrid data={blockchainFeaturesData}>
        Scaleable & Protected
        <br />
        <TextGradient text="Features" />
      </RowSpanGrid>

      {/* health records section  */}
      <TextBanner data={blockchainHealthBannerData}>
        Paitent centric health
        <br />
        <TextGradient text=" Records" />
      </TextBanner>

      {/* services section  */}
      <IconCardGroup3 data={blockchainServicesData} type="Servics">
        Scaleable & Protected
        <br />
        <TextGradient text="Features" />
      </IconCardGroup3>

      {/* Supply Chain section  */}
      <ImageShowcase
        sub="Medical care systems in each nation are battling with the issue of
        information siloes, implying that patients and their medical services
        suppliers have a fragmented perspective on clinical chronicles."
        img="/images/technologies/blockchain/blockchain_supply.svg"
      >
        <TextGradient text="Ensuring" />
        <br />
        Transparent Supply Chain
      </ImageShowcase>
    </BasicLayout>
  );
};

export default BlockchainTechnologies;
