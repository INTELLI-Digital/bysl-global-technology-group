import ITServices from "../components/individual_service/ITServices";
import ServiceWhyUs from "../components/individual_service/ServiceWhyUs";
import ServiceTimeline from "../components/services/ServiceTimeline";
import BasicLayout from "../layouts/BasicLayout";
import BusinessBanner from "../components/shared/banners/BusinessBanner";

const Service = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IT Service" noMargin={true}>
      {/* banner section  */}
      <BusinessBanner />

      <div className="box">
        {/* IT services section  */}
        <ITServices />

        {/* why us section  */}
        <ServiceWhyUs />

        {/* timeline section  */}
        <ServiceTimeline />
      </div>
    </BasicLayout>
  );
};

export default Service;
