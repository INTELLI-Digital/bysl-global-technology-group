import ServiceBlogs from "../components/services/ServiceBlogs";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceITServices from "../components/services/ServiceITServices";
import ServiceResources from "../components/services/ServiceResources";
import ServiceTimeline from "../components/services/ServiceTimeline";
import PrimaryBanner from "../components/shared/banners/PrimaryBanner";
import { TextGradient } from "../components/shared/SharedTextgroups";
import BasicLayout from "../layouts/BasicLayout";

const Services = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IT Services">
      {/* banner section  */}
      <PrimaryBanner
        title="IT Services"
        img="services"
        sub="Coordinate applications on top of existing frameworks that can adjust and scale to your business needs. Coordinate applications on top of existing frameworks that can adjust and scale to your business needs."
      >
        Creating Value Through True
        <TextGradient text=" Convergence" />
      </PrimaryBanner>

      {/* features section  */}
      <ServiceFeatures />

      {/* services section  */}
      <ServiceITServices />

      {/* timeline section  */}
      <ServiceTimeline />

      {/* resources section  */}
      <ServiceResources />

      {/* blogs section  */}
      <ServiceBlogs />
    </BasicLayout>
  );
};

export default Services;
