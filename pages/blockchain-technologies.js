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
        sub="Exploring the unique potential of blockchain technology for wider accessibility and control of data and greater security.   "
      >
        Blockchain for greater accessibility &
        <br className="hidden sm:block" />
        <TextGradient text=" security" /> of data
      </PrimaryBanner>

      {/* features section  */}
      <RowSpanGrid data={blockchainFeaturesData}>
        One version of truth
        <br />
        always in-sync
      </RowSpanGrid>

      {/* health records section  */}
      <TextBanner data={blockchainHealthBannerData}>
        Towards building the
        <br />
        next-gen fintech
      </TextBanner>

      {/* services section  */}
      <IconCardGroup3 data={blockchainServicesData} type="Servics">
        Scaleable & Protected
        <br />
        Features
      </IconCardGroup3>

      {/* Supply Chain section  */}
      <ImageShowcase
        sub="Our blockchain solutions focus on reducing the cost involved with point-to-point communication and transportation by eliminating the maximum number of middlemen from shipping events, transactions and record keeping by building a comprehensive, decentralized and shared ledger. "
        img="/images/technologies/blockchain/blockchain_supply.svg"
      >
        Ensuring transparency in
        <br />
        supply chain & logistics
      </ImageShowcase>
    </BasicLayout>
  );
};

export default BlockchainTechnologies;
