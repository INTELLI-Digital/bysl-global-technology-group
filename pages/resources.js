import ServiceWhyUs from "../components/individual_service/ServiceWhyUs";
import BasicLayout from "../layouts/BasicLayout";
import BusinessBanner from "../components/shared/banners/BusinessBanner";
import BlogLayout from "../components/shared/BlogLayout";
import { resourcesData } from "../public/data/resourcesData";
import { TextGradient } from "../components/shared/SharedTextgroups";

const Resources = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Resources" noMargin={true}>
      {/* banner section  */}
      <BusinessBanner />

      <div className="box">
        {/* why us section  */}
        <ServiceWhyUs />

        {/* resources section  */}
        <BlogLayout data={resourcesData} type="Resources">
          Proud projects that <TextGradient text="make us stand out" />
        </BlogLayout>
      </div>
    </BasicLayout>
  );
};

export default Resources;
