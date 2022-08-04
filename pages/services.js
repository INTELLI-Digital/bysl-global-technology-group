import BasicLayout from "../layouts/BasicLayout";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceITServices from "../components/services/ServiceITServices";
// import ServiceResources from "../components/services/ServiceResources";
import ServiceTimeline from "../components/services/ServiceTimeline";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import BlogLayout from "../components/shared/BlogLayout";
import { TextGradient } from "../components/shared/SharedTextgroups";
import {
  serviceBlogsData,
  servicesFeaturesData,
  servicesServiceData,
  serviceTimelineData,
} from "../public/data/servicesData";

const Services = ({
  banner,
  servicesFeatures,
  servicesService,
  serviceBlogs,
  serviceTimeline,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IT Services">
      {/* banner section  */}
      <PrimaryBanner
        title="IT Services"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
        img={banner}
      >
        Creating Value Through True
        <TextGradient text=" Convergence" />
      </PrimaryBanner>

      {/* features section  */}
      <ServiceFeatures data={servicesFeatures} />

      {/* services section  */}
      <ServiceITServices data={servicesService} />

      {/* timeline section  */}
      <ServiceTimeline data={serviceTimeline} />

      {/* resources section  */}
      {/* <ServiceResources /> */}

      {/* blogs section  */}
      <BlogLayout data={serviceBlogs} type="Resources">
        Read Our
        <TextGradient text=" Latest " />
        Tips & Tricks
      </BlogLayout>
    </BasicLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/services_banner.svg",
      servicesFeatures: servicesFeaturesData,
      servicesService: servicesServiceData,
      serviceBlogs: serviceBlogsData,
      serviceTimeline: serviceTimelineData,
    },
  };
}

export default Services;
