import BasicLayout from "../layouts/BasicLayout";
import ITServices from "../components/individual_service/ITServices";
import ServiceWhyUs from "../components/individual_service/ServiceWhyUs";
import ServiceTimeline from "../components/services/ServiceTimeline";
import BusinessBanner from "../components/shared/banners/BusinessBanner";
import { individualServiceITServicesData, serviceWhyChooseUsData } from "../public/data/individualServiceData";
import { serviceTimelineData } from "../public/data/servicesData";

const Service = ({
  individualServiceITServices,
  serviceWhyChooseUs,
  serviceTimeline,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="IT Service" noMargin={true}>
      {/* banner section  */}
      <BusinessBanner />

      <div className="box">
        {/* IT services section  */}
        <ITServices data={individualServiceITServices} />

        {/* why us section  */}
        <ServiceWhyUs data={serviceWhyChooseUs} />

        {/* timeline section  */}
        <ServiceTimeline data={serviceTimeline} />
      </div>
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      banner: "/images/banners/services_banner.svg",
      individualServiceITServices: individualServiceITServicesData,
      serviceWhyChooseUs: serviceWhyChooseUsData,
      serviceTimeline: serviceTimelineData,
    },
  };
}

export default Service;
