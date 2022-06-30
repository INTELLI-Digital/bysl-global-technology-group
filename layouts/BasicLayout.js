import Footer from "../components/navigation/Footer";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import CompanySummary from "../components/shared/CompanySummary";
import PageTitle from "../components/shared/PageTitle";

const BasicLayout = (props) => {
  const { title, children, noMargin } = props;

  return (
    <div className="bg-gray-50">
      <PageTitle title={title} />
      <ResponsiveNavbar />
      <div className={`${!noMargin && "box"}`}>{children}</div>
      <div className="box">
        <CompanySummary />
      </div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
