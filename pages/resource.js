import BasicLayout from "../layouts/BasicLayout";
import SingleResourceBanner from "../components/resources/singleResources/SingleResourceBanner";
import ResourceCommonBanner from "../components/shared/banners/ResourceCommonBanner";
import {
  resourceAppData,
  resourceServiceData,
  resourceSolutionData,
  resourceWorkData,
} from "../public/data/resourcesData";
import BlogLayout from "../components/shared/BlogLayout";
import SingleResourceGoal from "../components/resources/singleResources/SingleResourceGoal";
import SingleResourceProblemFraming from "../components/resources/singleResources/SingleResourceProblemFraming";
import SingleResourceOverview from "../components/resources/singleResources/SingleResourceOverview";

const Resource = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <BasicLayout title="Resource" noMargin={true}>
      {/* banner section  */}
      <SingleResourceBanner />

      {/* problem framing section  */}
      <SingleResourceOverview />

      {/* problem framing section  */}
      <SingleResourceProblemFraming />

      {/* single app section  */}
      <ResourceCommonBanner data={resourceAppData} reversed={true} />

      {/* goal section  */}
      <SingleResourceGoal />

      {/* what we do section  */}
      <ResourceCommonBanner data={resourceServiceData} full={true} />

      {/* solution section  */}
      <ResourceCommonBanner data={resourceSolutionData} reversed={true} />

      {/* more work section  */}
      <div className="box">
        <BlogLayout data={resourceWorkData}>More Work</BlogLayout>
      </div>
    </BasicLayout>
  );
};

export default Resource;
