import FAQAllQuestions from "../components/faq/FAQAllQuestions";
import FAQBanner from "../components/faq/FAQBanner";
import IconCardGroup4 from "../components/shared/IconCardGroup4";
import CommonLayout from "../layouts/CommonLayout";
import { faqCategoriesData } from "../public/data/faqData";

const FAQ = () => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <CommonLayout title="FAQ" noMargin={true}>
      {/* banner section  */}
      <FAQBanner />
      <div className="box">
        {/* categories section  */}
        <IconCardGroup4
          data={faqCategoriesData}
          padding={true}
          title="Here you can find categories for common asked question."
        />

        {/* questions section  */}
        <FAQAllQuestions />
      </div>
    </CommonLayout>
  );
};

export default FAQ;
