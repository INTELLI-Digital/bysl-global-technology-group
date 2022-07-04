import ServiceWhyUs from "../components/individual_service/ServiceWhyUs";
import BasicLayout from "../layouts/BasicLayout";
import BusinessBanner from "../components/shared/banners/BusinessBanner";
import ResourcesDemo from "../components/resources/ResourcesDemo";

const Resources = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Resources" noMargin={true}>
      {/* banner section  */}
      <BusinessBanner />

      <div className="box">
        {/* why us section  */}
        <ServiceWhyUs />

        {/* resources demo section  */}
        <ResourcesDemo />
      </div>
    </BasicLayout>
  );
};

export default Resources;
