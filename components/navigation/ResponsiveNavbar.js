import Navbar from "./Navbar";
import NavbarSmall from "./NavbarSmall";
import { getPath } from "../../utils/paths";

const ResponsiveNavbar = () => {
  const arVrPath = getPath("/ar-vr-technologies");
  const investmentPath = getPath("/investments");

  return (
    <div
      className={`pb-14 lg:pb-[100px] 
      ${(arVrPath && "!pb-0") || (investmentPath && "!pb-0")}`}
    >
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <NavbarSmall />
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
