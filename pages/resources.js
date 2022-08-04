import BasicLayout from "../layouts/BasicLayout";
import BusinessBanner from "../components/shared/banners/BusinessBanner";
import BlogLayout from "../components/shared/BlogLayout";
import ServiceWhyUs from "../components/individual_service/ServiceWhyUs";
import { TextGradient } from "../components/shared/SharedTextgroups";
import { resourcesData } from "../public/data/resourcesData";
import { serviceWhyChooseUsData } from "../public/data/individualServiceData";

const Resources = ({ serviceWhyChooseUs, resources }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Resources" noMargin={true}>
      {/* banner section  */}
      <BusinessBanner />

      <div className="box">
        {/* why us section  */}
        <ServiceWhyUs data={serviceWhyChooseUs} />

        {/* resources section  */}
        <BlogLayout data={resources} type="Resources">
          Proud projects that <TextGradient text="make us stand out" />
        </BlogLayout>
      </div>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      serviceWhyChooseUs: serviceWhyChooseUsData,
      resources: resourcesData,
    },
  };
}

export default Resources;
