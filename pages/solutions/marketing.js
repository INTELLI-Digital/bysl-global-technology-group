import MarketingOverview from "../../components/solutions/marketing/MarketingOverview";
import SolutionsLayout from "../../layouts/SolutionsLayout";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import { marketingProblemsAndSolutionsData } from "../../public/data/solutions/marketingSolutionsData";

const Marketing = ({ solutionsResources, problemsAndSolutionsData }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Marketing"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}

      <div className="box">
        {/* overview section  */}
        <MarketingOverview data="" />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      solutionsResources: solutionsResourcesData,
      problemsAndSolutionsData: marketingProblemsAndSolutionsData,
    },
  };
}

export default Marketing;
