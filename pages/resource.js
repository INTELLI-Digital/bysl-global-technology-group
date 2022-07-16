import BasicLayout from "../layouts/BasicLayout";
import SingleResourceBanner from "../components/resources/singleResources/SingleResourceBanner";
import ResourceCommonBanner from "../components/shared/banners/ResourceCommonBanner";
import {
  resourceAppData,
  resourceServiceData,
  resourceSolutionData,
} from "../public/data/resourcesData";

const Resource = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Resource" noMargin={true}>
      {/* banner section  */}
      <SingleResourceBanner />

      {/* single app section  */}
      <ResourceCommonBanner data={resourceAppData} reversed={true} />
      <ResourceCommonBanner data={resourceServiceData} />
      <ResourceCommonBanner data={resourceSolutionData} reversed={true} />
      <div className="box">{/* resources demo section  */}</div>
    </BasicLayout>
  );
};

export default Resource;
