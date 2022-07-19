import LandingPageBanner from "../components/landing_page/LandingPageBanner";
import AboutUs from "../components/landing_page/AboutUs";
import ProjectsShowcase from "../components/landing_page/ProjectsShowcase";
import SolutionsBanner from "../components/landing_page/SolutionsBanner";
import Investments from "../components/landing_page/Investments";
import Technologies from "../components/landing_page/Technologies";
import CommonLayout from "../layouts/CommonLayout";

export default function Home() {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <CommonLayout noMargin={true}>
      {/* banner section  */}
      <LandingPageBanner />
      <div className="box">
        {/* about us section  */}
        <AboutUs />

        {/* projects section  */}
        <ProjectsShowcase />

        {/* solutions section  */}
        <SolutionsBanner />

        {/* technologies section  */}
        <Technologies />

        {/* investments section  */}
        <Investments />
      </div>
    </CommonLayout>
  );
}
