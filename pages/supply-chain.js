import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import Overview4Items from "../components/shared/Overview4Items";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BannerWithBulletSingle from "../components/shared/banners/BannerWithBulletSingle";
import BasicLayout from "../layouts/BasicLayout";
import {
  supplyChainConnectivityData,
  supplyChainOverviewData,
  supplyChainPerceivabilityData,
} from "../public/data/supplyChainData";
import TriangleCardBanner from "../components/shared/banners/TriangleCardBanner";

const SupplyChain = () => {
  return (
    <BasicLayout title="Supply Chain">
      <PrimaryBanner
        title="Supply Chain - Division"
        img="supply_chain_division"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
      >
        Operations through
        <br />
        <TextGradient text="Evolution" />,<TextGradient text=" Innovation" />.
      </PrimaryBanner>
      <TriangleCardBanner
        data={supplyChainConnectivityData}
        img="/images/divisions/supply_chain/connectivity/connectivity_banner.svg"
        black={true}
        padding={true}
      >
        Worldwide Connectivity &
        <br />
        <TextGradient text="Compliance" />
      </TriangleCardBanner>
      <Overview4Items data={supplyChainOverviewData} />
      <BannerWithBulletSingle data={supplyChainPerceivabilityData}>
        PERCEIVABILITY. <TextGradient text="INSIGHT." />
        <br />
        FORESIGHT
      </BannerWithBulletSingle>
    </BasicLayout>
  );
};

export default SupplyChain;
