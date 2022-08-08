import BasicLayout from "../layouts/BasicLayout";
import ITServices from "../components/individual_service/ITServices";
import ServiceWhyUs from "../components/individual_service/ServiceWhyUs";
import ServiceTimeline from "../components/services/ServiceTimeline";
import {
  individualServiceITServicesData,
  serviceWhyChooseUsData,
} from "../public/data/individualServiceData";
import {
  serviceBlogsData,
  serviceResourceBlogData,
  serviceTimelineData,
} from "../public/data/servicesData";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import ServiceResourcesCard from "../components/services/ServiceResourcesCard";

const Service = ({
  banner,
  individualServiceITServices,
  serviceWhyChooseUs,
  serviceTimeline,
  serviceResourceBlog,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IT Service">
      {/* banner section  */}
      <PrimaryBanner
        title="Services"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        img={banner}
      >
        DISCOVER BETTER VALUE. FASTER.
      </PrimaryBanner>

      {/* IT services section  */}
      <ITServices data={individualServiceITServices} />

      {/* why us section  */}
      {/* <ServiceWhyUs data={serviceWhyChooseUs} /> */}

      {/* resources section  */}
      <ServiceResourcesCard data={serviceResourceBlog} type="Resources">
        Read Our Latest Tips & Tricks
      </ServiceResourcesCard>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/service_banner.svg",
      individualServiceITServices: individualServiceITServicesData,
      serviceWhyChooseUs: serviceWhyChooseUsData,
      serviceTimeline: serviceTimelineData,
      serviceResourceBlog: serviceResourceBlogData,
    },
  };
}

export default Service;
