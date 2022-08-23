import SolutionsLayout from "../../layouts/SolutionsLayout";
import MarketingBanner from "../../components/solutions/marketing/Marketingbanner";
import MarketingOverview from "../../components/solutions/marketing/MarketingOverview";
import MarketingProblemsAndSolutions from "../../components/solutions/marketing/MarketingProblemsAndSolutions";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  marketingBannerData,
  marketingOverviewData,
  marketingProblemsAndSolutionsData,
} from "../../public/data/solutions/marketingSolutionsData";

const Marketing = ({
  banner,
  solutionsResources,
  marketingOverview,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Marketing"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <MarketingBanner data={banner} />

      <div className="box">
        {/* overview section  */}
        <MarketingOverview data={marketingOverview} />

        {/* problems and solutions section  */}
        <MarketingProblemsAndSolutions data={problemsAndSolutionsData} />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: marketingBannerData,
      solutionsResources: solutionsResourcesData,
      marketingOverview: marketingOverviewData,
      problemsAndSolutionsData: marketingProblemsAndSolutionsData,
    },
  };
}

export default Marketing;
