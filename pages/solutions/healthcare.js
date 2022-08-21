import SolutionsLayout from "../../layouts/SolutionsLayout";
import SolutionsOverview from "../../components/solutions/SolutionsOverview";
import HealthcareSolutionBanner from "../../components/solutions/healthcare/HealthcareSolutionBanner";
import HealthcareProblemsAndSolutions from "../../components/solutions/healthcare/HealthcareProblemsAndSolutions";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  healthcareOverviewData,
  healthcareProblemsAndSolutionsData,
  healthcareSolutionsBannerData,
} from "../../public/data/solutions/healthcareSolutionsData";

const HealthCare = ({
  solutionsResources,
  banner,
  overviewData,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Health Care"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <HealthcareSolutionBanner data={banner} />

      <div className="box">
        {/* overview section  */}
        <SolutionsOverview data={overviewData} />
        {/* problems & solutions section  */}
        <HealthcareProblemsAndSolutions data={problemsAndSolutionsData} />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: healthcareSolutionsBannerData,
      overviewData: healthcareOverviewData,
      solutionsResources: solutionsResourcesData,
      problemsAndSolutionsData: healthcareProblemsAndSolutionsData,
    },
  };
}

export default HealthCare;
