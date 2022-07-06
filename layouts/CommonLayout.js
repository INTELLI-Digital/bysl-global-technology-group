import Footer from "../components/navigation/Footer";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import PageTitle from "../components/shared/PageTitle";

const CommonLayout = (props) => {
  const { title, children, noMargin } = props;

  return (
    <div className="bg-gray-50">
      <PageTitle title={title} />
      <ResponsiveNavbar />
      <div className={`${!noMargin && "box"}`}>{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
