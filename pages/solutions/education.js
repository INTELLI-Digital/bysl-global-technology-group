import SolutionsLayout from "../../layouts/SolutionsLayout";
import EducationSolutionsBanner from "../../components/solutions/education/EducationSolutionsBanner";
import EducationSolutionsOverview from "../../components/solutions/education/EducationSolutionsOverview";
import EducationSolutions from "../../components/solutions/education/EducationSolutions";
import EducationProblems from "../../components/solutions/education/EducationProblems";
import { educationProblemsAndSolutionsData } from "../../public/data/solutions/educationSolutionData";
import { SolutionsResourcesData } from "../../public/data/solutions/blogData";

const Education = ({
  SolutionsResources,
  banner,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Education"
      data={SolutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <EducationSolutionsBanner banner={banner} />

      {/* overview section  */}
      <EducationSolutionsOverview />
      <div className="box">
        {/* problems section  */}
        <EducationProblems data={problemsAndSolutionsData} />

        {/* solutions section  */}
        <EducationSolutions data={problemsAndSolutionsData} />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/education_solutions_banner.png",
      SolutionsResources: SolutionsResourcesData,
      problemsAndSolutionsData: educationProblemsAndSolutionsData,
    },
  };
}

export default Education;
