import LandingPageBanner from "../components/landing_page/LandingPageBanner";
import AboutUs from "../components/landing_page/AboutUs";
import ProjectsShowcase from "../components/landing_page/ProjectsShowcase";
import PageTitle from "../components/shared/PageTitle";
import ResponsiveNavbar from "../components/navigation/ResponsiveNavbar";
import SolutionsBanner from "../components/landing_page/SolutionsBanner";
import Investments from "../components/landing_page/Investments";
import Technologies from "../components/landing_page/Technologies";
import Footer from "../components/navigation/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <PageTitle title="BYSL Global Technology Group" />
      <ResponsiveNavbar />
      <LandingPageBanner />
      <div className="box">
        <AboutUs />
        <ProjectsShowcase />
        <SolutionsBanner />
        <Technologies />
        <Investments />
      </div>
      <Footer />
    </div>
  );
}
